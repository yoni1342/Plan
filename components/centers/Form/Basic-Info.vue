<script setup>
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
  <div class="h-full space-y-8">
    <div class="space-y-8">
      <!-- Basic Info Field Group -->
      <h2 class="form-title">Basic Info</h2>
      <div class="form-group">
        <HTextField class="form-input" name="center_name">
          <template #label>
            <label class="form-label" for="first_name">Center Name</label>
          </template>
        </HTextField>
      </div>

      <!-- Address & Contact Field Group -->
      <h2 class="form-title">Address & Contact</h2>
      <div class="form-group">
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
      </div>

      <!-- Members Field Group -->
      <h2 class="form-title">Members</h2>
      <div class="form-group">
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
    </div>

    <div class="flex justify-between pb-10">
      <button
        :disabled="parseInt($route.query.step) < 1"
        class="btn-primary h-fit"
        @click="$emit('previous')"
      >
        <Icon name="tdesign:arrow-left" />
        <span>Previous</span>
      </button>
      <button
        :disabled="parseInt($route.query.step) > 3"
        class="btn-primary H-fit"
        @click="$emit('proceed')"
      >
        <span>Proceed</span>
        <Icon name="tdesign:arrow-right" />
      </button>
    </div>
  </div>
</template>
