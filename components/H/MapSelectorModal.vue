<script setup>
const props = defineProps({
  coordinates: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Select Location",
  },
  label: {
    type: String,
  },
  labelClass: {
    type: [String, Object],
  },
  rules: {
    type: [String, Object],
  },
  modalHeader: {
    type: String,
    default: "Please select your location",
  },
});

const emit = defineEmits(["update:coordinates"]);

const showModal = ref(false);

const localCoordinates = computed({
  get: () => {
    return props.coordinates;
  },
  set: (v) => {
    emit("update:coordinates", v);
  },
});

const updateMapVal = (v) => {
  localCoordinates.value.lat = v.position.lat;
  localCoordinates.value.long = v.position.lng;
};
</script>

<template>
  <H-Modal v-model="showModal" :auto-close="true">
    <template #Heading>
      <div class="flex items-center justify-between">
        <h3 class="font-medium">{{ modalHeader }}</h3>
        <Icon
          name="mdi:close"
          @click="showModal = false"
          class="text-lg cursor-pointer"
        />
      </div>
    </template>
    <template #content>
      <div>
        <H-MapSelector
          class="w-full"
          @updateMapVal="updateMapVal"
          :lat="localCoordinates.lat"
          :long="localCoordinates.long"
        />
      </div>
    </template>
  </H-Modal>
  <div class="w-full">
    <label v-if="label" :class="labelClass" class="">{{ label }}</label>
    <slot name="label" />

    <div
      class="relative py-2 pl-2 pr-10 border rounded-md border-plan-gray-300"
      @click="showModal = true"
    >
      <p class="truncate" v-if="localCoordinates.lat && localCoordinates.long">
        {{ localCoordinates.lat }}, {{ localCoordinates.long }}
      </p>
      <p v-else class="text-gray-400">{{ placeholder }}</p>
      <span
        class="absolute right-0 top-0 h-full px-2.5 bg-plan-gray-200 flex items-center justify-center"
      >
        <Icon name="mdi:location" />
      </span>
    </div>
  </div>
</template>
