<script setup>
const props = defineProps({
  class: String,
});
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
  <div class="space-y-12">
    <h1 class="form-title">Follow up Questions</h1>
    <div :class="class" class="pr-4 space-y-8 h-[630px] overflow-y-auto">
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Have you ever faced difficulty finding quality child care that is
            affordable and convenient (location, distance) ?</label
          >
        </template></H-ListSelect
      >
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Do your face difficulty in finding trusted care providers?</label
          >
        </template></H-ListSelect
      >
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Do you have someone to look after your kid when you go to
            work?</label
          >
        </template></H-ListSelect
      >
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Do you face frequent interruptions from calls about their children
            ?</label
          >
        </template></H-ListSelect
      >
      <HTextField
        :placeholder="1000"
        type="number"
        class="form-input"
        name="number_of_children"
      >
        <template #label>
          <label class="form-label !text-sm" for="number_of_children"
            >How many hours do you spend a day to search for a job when the kid
            is with you/not going to childcare?</label
          >
        </template>
      </HTextField>
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Any discrimination or biases in work place making it more difficult
            for you to advance/stay in your careers?</label
          >
        </template></H-ListSelect
      >
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="yes_no"
        placeholder="Yes"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >Have you been encountered a scenario to choose between work and a
            child</label
          >
        </template></H-ListSelect
      >
      <H-ListSelect
        name="Child Care"
        class="form-input"
        :items="difficulty"
        placeholder="Not difficult"
      >
        <template #label>
          <label class="form-label !text-sm" for="Child Care"
            >How difficult has it been to take a leave for your children
            ?</label
          >
        </template></H-ListSelect
      >
    </div>
  </div>
</template>
