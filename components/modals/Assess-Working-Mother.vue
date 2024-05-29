<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);

const open = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emits("update:modelValue", val);
  },
});

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
  <HModal
    autoClose
    v-model="open"
    hasCloseIcon
    wrapperClass="!w-[800px] h-[850px] overflow-y-auto"
  >
    <template #Heading>
      <div class="space-y-2">
        <h1 class="text-xl font-normal">Assess Working Mother</h1>
        <div
          class="flex items-center text-base font-normal text-gray-500 gap-x-4"
        >
          <Icon class="text-xl" name="lucide:calendar-days" />
          <span>Friday 12 Feb, 2023</span>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-2 mt-24 gap-x-8 gap-y-8">
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
          optionGroupClass="grid grid-cols-2  gap-y-1"
        />

        <HTextArea
          label="Note"
          labelClass="form-label"
          name="Note"
          placeholder="Notes will save automatically enter them here"
          class="col-span-2"
        />

        <button class="col-span-2 btn btn-primary !w-full mt-2">
          <Icon name="uil:check" />
          <span>Save Changes</span>
        </button>
      </div>
    </template>
  </HModal>
</template>
