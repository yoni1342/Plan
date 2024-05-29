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

const difficulty = ref([
  {
    id: "Difficult",
    name: "Difficult",
  },
  {
    id: "Not Difficult",
    name: "Not Difficult",
  },
]);
</script>
<template>
  <div class="grid grid-cols-5 gap-x-12">
    <div class="col-span-2">
      <MotherInsertedData hasChild />
    </div>

    <div class="col-span-3">
      <MotherFollowUpQ />
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
      @click="$emit('finish')"
    >
      <span>Finish</span>
      <Icon name="tdesign:arrow-right" />
    </button>
  </div>
</template>
