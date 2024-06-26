<script setup>
import { icon } from "leaflet";

const props = defineProps(["lat", "long"]);
const mapping = ref(null);
const userLocation = ref({});
const zoom = ref(14);
const loading = ref(false);
const position = ref({ lat: props.lat, lng: props.long });
const address = ref("");
const dragging = ref(false);
const defaultLocation = ref({
  lat: props.lat || 20.011360489182257,
  lng: props.long || 60.75937938690186,
});

const emit = defineEmits(["updateMapVal"]);

const tileProvider = ref({
  attribution:
    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
});
const getUserPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      userLocation.value = {
        lat: props.lat || pos.coords.latitude,
        lng: props.long || pos.coords.longitude,
      };
      position.value = {
        lat: props.lat || pos.coords.latitude,
        lng: props.long || pos.coords.longitude,
      };
    });
  }
};

onMounted(async () => {
  getUserPosition();
});

const getAddress = async () => {
  loading.value = true;
  let address = "unresolved address";
  try {
    const { lat, lng } = await position.value;
    const result = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    if (result.status === 200) {
      const body = await result.json();
      address = body.display_name;
    }
  } catch (e) {
    // console.log("Reserve Geocode Error->", e);
  }
  loading.value = false;
  return address;
};

watch(
  position,
  async (value) => {
    // console.log("Watcher", value);
    address.value = await getAddress();
    emit("updateMapVal", {
      position: value || defaultLocation.value,
      address: address.value,
    });
    // console.log("position in wathcer", position.value);
  },
  { deep: true }
);

const doSomethingOnReady = () => {};

const onMapClick = async (value) => {
  if (value.latlng) {
    position.value = value.latlng;
  }
  // emit("updateMapVal", {
  //     position: value || defaultLocation.value,
  //   });
};

const tooltipContent = computed(() => {
  if (dragging.value) return "...";
  if (loading.value) return "Loading...";
  if (!address.value)
    return `<strong>Unknown Location</strong> <hr/><strong>lat:</strong> ${position.value.lat}<br/> <strong>lng:</strong> ${position.value.lng}`;
  return `<strong>${address.value.replace(
    ",",
    "<br/>"
  )}</strong> <hr/><strong>lat:</strong> ${
    position.value.lat
  }<br/> <strong>lng:</strong> ${position.value.lng}`;
});
</script>

<template>
  <div class="w-full">
    <div class="grid w-full grid-cols-2 my-5 gap-x-10">
      <HTextfield
        name="lat"
        rules="required"
        class="w-auto"
        type="number"
        v-model="position.lat"
      >
        <template v-slot:label>
          <h1>Latitude</h1>
        </template>
      </HTextfield>
      <HTextfield
        name="lng"
        rules="required"
        class=""
        type="number"
        v-model="position.lng"
      >
        <template v-slot:label>
          <h1>Longtiude</h1>
        </template>
      </HTextfield>
    </div>
    <h1 class="flex items-center mb-2 text-sm text-gray-700 gap-x-2">
      <Icon name="carbon:information" class="text-2xl text-primary" />
      Double click the map to set the location! / Ctrl + scroll to Zoom in and
      out
    </h1>
    <div class="h-[40vh]">
      <LMap
        class="rounded-md"
        @ready="doSomethingOnReady()"
        ref="mapping"
        @dblclick="onMapClick"
        :zoom="zoom"
        :maxZoom="18"
        :center="[
          position.lat || userLocation.lat || defaultLocation.lat,
          position.lng || userLocation.lng || defaultLocation.lng,
        ]"
      >
        <LTileLayer
          :url="tileProvider.url"
          :attribution="tileProvider.attribution"
        />

        <LMarker
          v-if="position.lat && position.lng"
          visible
          :lat-lng="position"
          @dragstart="dragging = true"
          @dragend="dragging = false"
        >
          <LIcon
            name="Location"
            :class="'custom-div-icon'"
            :icon-size="[40, 40]"
            icon-url="/images/Location_marker.png"
          ></LIcon>
          <LTooltip :content="tooltipContent" :options="{ permanent: true }" />
        </LMarker>
      </LMap>
    </div>
  </div>
</template>
