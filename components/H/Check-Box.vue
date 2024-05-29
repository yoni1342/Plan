<script setup>
import { useField } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: () => "",
    required: false,
  },
  rules: {
    type: String,
    default: "",
    required: false,
  },
  name: {
    type: String,
    default: "Input",
    required: false,
  },
  label: String,
  description: String,
  hideDetail: {
    type: Boolean,
    default: false,
    required: false,
  },
  class: String,
  wrapperClass: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const {
  errorMessage,
  value: checkbox,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

watch(
  () => props.modelValue,
  (newVal) => {
    checkbox.value = newVal || false;
  }
);

const checkBoxChanged = (ev) => {
  emit("update:modelValue", ev.target.value === "true" ? true : false);
};
</script>
<template>
  <div class="text-md">
    <div class="relative flex items-start" :class="props.wrapperClass">
      <div class="flex items-center">
        <input
          v-model="checkbox"
          :id="name"
          :value="checkbox"
          :disabled="disabled"
          :aria-describedby="name"
          :name="name"
          @change="checkBoxChanged($event)"
          type="checkbox"
          class="text-xl rounded focus:ring-primary-600 !text-primary-600 border-primary-600"
          :class="[
            props.class,
            !errorMessage
              ? 'focus:ring-primary-600 dark:focus:ring-primary-600 h-4 w-4 text-primary-600 text-sm cursor-pointer'
              : 'focus:ring-red-500 border-red-500  h-4 w-4 text-primary-600 focus:border-red-500  text-sm  cursor-pointer',
          ]"
        />
      </div>
      <div class="ml-3 text-md">
        <label
          :for="name"
          class="font-medium text-kena-gray-600"
          :class="labelClass"
        >
          <span v-html="props.label"></span>
        </label>
        <p
          v-if="props.description"
          id="name"
          class="text-sm text-kena-gray-600"
        >
          {{ props.description }}
        </p>
      </div>
    </div>
    <p
      :visible="errorMessage"
      v-if="!props.hideDetail && errorMessage"
      class="mt-2 text-sm text-red-600 font-body"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
