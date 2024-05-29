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
  <HModal
    autoClose
    v-model="open"
    hasCloseIcon
    wrapperClass="!w-[800px] h-[700px] overflow-y-auto"
  >
    <template #Heading>
      <div class="space-y-4">
        <h1 class="text-xl font-normal">Update Mother’s Profile</h1>

        <div class="relative flex items-center justify-center w-16 h-16">
          <img
            class="object-cover object-center w-16 h-16 rounded-full"
            src="/images/temp/mother2.jpg"
            alt="mother photo"
          />
          <span
            class="absolute bottom-0 flex items-center justify-center border border-white rounded-full cursor-pointer w-7 h-7 -right-3 bg-primary-500"
          >
            <Icon class="text-2xl text-white" name="line-md:edit" />
          </span>
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid grid-cols-2 mt-32 gap-x-8 gap-y-8">
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
        <div></div>
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

        <button class="col-span-2 btn btn-primary !w-full mt-2">
          <Icon name="uil:check" />
          <span>Save Changes</span>
        </button>
      </div>
    </template>
  </HModal>
</template>
