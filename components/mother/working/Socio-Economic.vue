import CheckBoxVue from '~/components/H/Check-Box.vue'; import { HListCheckBox }
from '#build/components';
<script setup>
const martial_status = ref([
  {
    id: "married",
    name: "Married",
  },
  {
    id: "unmarried",
    name: "Unmarried",
  },
  {
    id: "divorced",
    name: "Divorced",
  },
  {
    id: "widowed",
    name: "Widowed",
  },
]);

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

const checkBoxOptions = ref([
  {
    id: "Seek support from your colleagues, family, and friends. (2)",
    name: "Seek support from your colleagues, family, and friends. (2)",
  },
  {
    id: "Plan and organize your home and office work. (3)",
    name: "Plan and organize your home and office work. (3)",
  },
  {
    id: "Find a flexible work arrangement.(4)",
    name: "Find a flexible work arrangement.(4)",
  },
  {
    id: "Discuss your needs with your employer (4)",
    name: "Discuss your needs with your employer (4)",
  },
  {
    id: "Downward adjustment (5)",
    name: "Downward adjustment (5)",
  },
  {
    id: "No coping mechanism (6)",
    name: "No coping mechanism (6)",
  },
]);
</script>
<template>
  <div class="space-y-8">
    <div class="space-y-8">
      <h2 class="form-title">Social Questionnaires</h2>
      <div class="form-group">
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
              >How many hours do you spend a day to search for a job when the
              kid is with you/not going to childcare?</label
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
              >Any discrimination or biases in work place making it more
              difficult for you to advance/stay in your careers?</label
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
              >Do you face frequent interruptions from calls about their
              children ?</label
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
              child?</label
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
              >Do you have an issue in flexible timing so that you stay on the
              work you have or like to do</label
            >
          </template></H-ListSelect
        >

        <H-ListSelect
          name="Child Care"
          class="form-input"
          :items="difficulty"
          placeholder="Not Difficult"
        >
          <template #label>
            <label class="form-label !text-sm" for="Child Care"
              >How difficult has it been to take a leave for your
              children?</label
            >
          </template></H-ListSelect
        >

        <HListCheckBox
          class="col-span-2"
          name="challenges"
          labelClass="form-label"
          label="How do you cope to one or many of the challenges you mentioned?"
          :options="checkBoxOptions"
          optionGroupClass="grid grid-cols-2 gap-x-3 gap-y-1"
        />
      </div>
    </div>
    <div class="space-y-8">
      <h2 class="form-title">Economic Questionnaires</h2>
      <div class="form-group">
        <HTextField
          :placeholder="2000"
          type="number"
          class="form-input"
          name="number_of_children"
        >
          <template #label>
            <label class="form-label" for="number_of_children"
              >Monthly Net Income</label
            >
          </template>
        </HTextField>
        <HTextField
          :placeholder="1000"
          type="number"
          class="form-input"
          name="number_of_children"
        >
          <template #label>
            <label class="form-label" for="number_of_children"
              >Monthly Net Expense</label
            >
          </template>
        </HTextField>
        <HTextField
          :placeholder="4000"
          type="number"
          class="form-input"
          name="number_of_children"
        >
          <template #label>
            <label class="form-label" for="number_of_children"
              >Expense on Child Care</label
            >
          </template>
        </HTextField>
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
