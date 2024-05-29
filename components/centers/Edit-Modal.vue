<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const education_list = ref([
  {
    id: "BSC",
    name: "BSC",
  },
  {
    id: "MSC",
    name: "MSC",
  },
  {
    id: "Phd",
    name: "Phd",
  },
  {
    id: "Diploma",
    name: "Diploma",
  },
]);

const coordinates = ref({});
</script>

<template>
  <H-Modal v-model="showModal">
    <template #Heading>
      <div class="flex items-center justify-between">
        <h3 class="font-medium">Edit Center Profile</h3>
        <Icon
          name="mdi:close"
          @click="showModal = false"
          class="text-lg cursor-pointer"
        />
      </div>
    </template>
    <template #content>
      <div class="mt-10 space-y-8">
        <!-- Basic Info Field Group -->
        <div class="form-group !grid-cols-2">
          <HTextField class="form-input" name="center_name">
            <template #label>
              <label class="form-label" for="first_name">Center Name</label>
            </template>
          </HTextField>
          <!-- Map Selector Field -->
          <HMapSelectorModal
            class="form-input"
            v-model:coordinates="coordinates"
            name="map_selector"
            modalHeader="Please Select Center Location"
          >
            <template #label>
              <label class="form-label">GeoLocation</label>
            </template>
          </HMapSelectorModal>
          <!-- Zone Field -->
          <H-ListSelect
            name="education_level"
            class="form-input"
            :items="education_list"
            placeholder="Hawassa"
          >
            <template #label>
              <label class="form-label" for="education_level">Zone</label>
            </template></H-ListSelect
          >

          <!-- City Field -->
          <H-ListSelect
            name="education_level"
            class="form-input"
            :items="education_list"
            placeholder="Hawassa"
          >
            <template #label>
              <label class="form-label" for="education_level">City</label>
            </template></H-ListSelect
          >

          <!-- Sub-City Field -->
          <H-ListSelect
            name="education_level"
            class="form-input"
            :items="education_list"
            placeholder="Hawassa"
          >
            <template #label>
              <label class="form-label" for="education_level">Sub-City</label>
            </template></H-ListSelect
          >

          <!-- Area Field -->
          <H-ListSelect
            name="education_level"
            class="form-input"
            :items="education_list"
            placeholder="Hawassa"
          >
            <template #label>
              <label class="form-label" for="education_level">Area</label>
            </template></H-ListSelect
          >

          <!-- Phone Number -->
          <HTextField class="!pl-14 form-input" name="Phone Number">
            <template #leading>
              <div class="absolute left-0 px-2 py-2 bg-gray-200">+251</div>
            </template>
            <template #label>
              <label class="form-label" for="Phone Number">Phone Number</label>
            </template>
          </HTextField>

          <!-- Alternative Phone Number -->
          <HTextField class="form-input !pl-14" name="Alternative Phone Number">
            <template #leading>
              <div class="absolute left-0 px-2 py-2 bg-gray-200">+251</div>
            </template>
            <template #label>
              <label class="form-label" for="Alternative Phone Number"
                >Alternative Phone Number</label
              >
            </template>
          </HTextField>
          <H-ListSelect
            name="members"
            class="form-input"
            :items="education_list"
            placeholder="Select Member"
          >
            <template #label>
              <label class="form-label" for="education_level">Members</label>
            </template></H-ListSelect
          >
        </div>
        <button class="btn-primary !w-full">
          <Icon name="lucide:check" />
          Save Changes
        </button>
      </div>
    </template>
  </H-Modal>
</template>
