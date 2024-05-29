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
</script>
<template>
  <HModal
    autoClose
    v-model="open"
    hasCloseIcon
    wrapperClass="!w-[800px] h-[800px] overflow-y-auto"
  >
    <template #Heading>
      <div class="space-y-4">
        <h1 class="text-xl font-normal">Update Mother’s Profile</h1>

        <div class="relative flex items-center justify-center w-16 h-16">
          <img
            class="object-cover object-center w-16 h-16 rounded-full"
            src="/images/temp/mother.jpg"
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
            <label class="form-label" for="first_name">First Name</label>
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
        <HDatePicker
          label="Date of Birth"
          labelClass="form-label"
          leadingIconClass="text-black-500 text-xl left-4 top-3 absolute"
          class="w-full h-full px-12 py-2 text-sm text-gray-600 border border-gray-200 md:text-base"
        />
        <H-ListSelect
          name="martial_status"
          class="form-input"
          :items="martial_status"
          placeholder="Married"
        >
          <template #label>
            <label class="form-label" for="martial_status"
              >Martial Status</label
            >
          </template></H-ListSelect
        >

        <HTextField class="form-input" name="occupation">
          <template #label>
            <label class="form-label" for="occupation">Occupation</label>
          </template>
        </HTextField>

        <H-ListSelect
          name="education_level"
          class="form-input"
          :items="education_list"
          placeholder="BSC."
        >
          <template #label>
            <label class="form-label" for="education_level"
              >Education Level</label
            >
          </template></H-ListSelect
        >

        <HTextField type="number" class="form-input" name="number_of_children">
          <template #label>
            <label class="form-label" for="number_of_children"
              >Number of Children age &lt;3 Yrs</label
            >
          </template>
        </HTextField>
        <HTextField type="number" class="form-input" name="family_size">
          <template #label>
            <label class="form-label" for="family_size">Family Size</label>
          </template>
        </HTextField>

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
        <HTextField class="form-input" name="Phone Number">
          <template #leading>
            <div class="absolute left-0 px-2 py-2 bg-gray-200">+251</div>
          </template>
          <template #label>
            <label class="form-label" for="Phone Number">Phone Number</label>
          </template>
        </HTextField>

        <HTextField class="form-input" name="Alternative Phone Number">
          <template #leading>
            <div class="absolute left-0 px-2 py-2 bg-gray-200">+251</div>
          </template>
          <template #label>
            <label class="form-label" for="Alternative Phone Number"
              >Alternative Phone Number</label
            >
          </template>
        </HTextField>
        <button class="col-span-2 btn btn-primary !w-full mt-2">
          <Icon name="uil:check" />
          <span>Save Changes</span>
        </button>
      </div>
    </template>
  </HModal>
</template>
