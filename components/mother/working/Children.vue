<script setup>
const yes_no = ref([
  {
    id: "Yes",
    name: "Yes",
  },
  {
    id: "No",
    name: "No",
  },
]);

const gender = ref([
  {
    id: "Boy",
    name: "Boy",
  },
  {
    id: "Girl",
    name: "Girl",
  },
]);
</script>
<template>
  <div class="space-y-8">
    <CardsChildren isProfile />

    <div class="py-8 space-y-8 border-gray-100 border-y">
      <h class="form-title">Child Info</h>
      <CommonProfileUpload />
      <div class="form-group">
        <HTextField class="form-input" name="first_name">
          <template #label>
            <label class="form-label" for="first_name">Child’s Name</label>
          </template>
        </HTextField>
        <HTextField class="form-input" name="father_name">
          <template #label>
            <label class="form-label" for="father_name">Father Name</label>
          </template>
        </HTextField>
        <HTextField class="form-input" name="grand_father_name">
          <template #label>
            <label class="form-label" for="grand_father_name"
              >Grand Father Name</label
            >
          </template>
        </HTextField>

        <H-ListSelect
          name="premature"
          class="form-input"
          :items="yes_no"
          placeholder="Yes"
        >
          <template #label>
            <label class="form-label" for="premature"
              >Was your child born prematurely?</label
            >
          </template></H-ListSelect
        >

        <HDatePicker
          label="Date of Birth"
          labelClass="form-label"
          leadingIconClass="text-black-500 text-xl left-4 top-3 absolute"
          class="w-full h-full px-12 py-2 text-sm text-gray-600 border border-gray-200 md:text-base"
        />

        <H-ListSelect
          name="gender"
          class="form-input"
          :items="gender"
          placeholder="Boy"
        >
          <template #label>
            <label class="form-label" for="gender">Gender</label>
          </template></H-ListSelect
        >
      </div>
      <div class="flex justify-end">
        <button class="btn-primary">Add Child</button>
      </div>
    </div>

    <div class="flex justify-between">
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
