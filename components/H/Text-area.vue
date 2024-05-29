<script setup>
import { useField } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  id: {
    type: String,
    default: undefined,
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  maxlength: {
    type: Number,
    default: 400,
    required: false,
  },
  placeholder: {
    type: String,
    default: undefined,
    required: false,
  },
  label: {
    type: String,
    default: undefined,
    required: false,
  },
  labelClass: {
    type: String,
    default: () => "",
    required: false,
  },
  trailingIcon: {
    type: Function,
    default: undefined,
    required: false,
  },
  rows: {
    type: Number,
    default: 6,
  },
  rules: {
    type: [String, Object],
    default: "",
    required: false,
  },
  disabled: {
    type: Boolean,
  },
  showStar: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
    default: "",
  },
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const set = (event) => {
  emit("update:modelValue", event.target.value);
};
watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);
</script>
<template>
  <div>
    <div class="relative flex gap-x-2 w-fit">
      <label :class="labelClass" :for="label">{{ label }} </label>
      <span v-if="props.showStar" class="absolute text-red-600 -right-3 top-2"
        >*</span
      >
    </div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <textarea
        :disabled="disabled"
        v-model="inputValue"
        @input="set($event)"
        :type="type"
        :name="name"
        :rows="rows"
        :maxlength="maxlength"
        :id="id"
        :class="{
          'focus:ring-gray-600  focus:border-gray-600 hover:border-gray-600 border-gray-300  border':
            !errorMessage,
          'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500 border':
            errorMessage,
          'bg-gray-100 cursor-not-allowed': props.disabled,
          'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500 border':
            wrapperClass != '',
        }"
        class="block w-full p-2 text-base transition-all duration-300 rounded-md text-secondary placeholder-secondary focus:outline-none"
        :placeholder="placeholder"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      <p class="absolute right-0 mt-2 text-sm text-gray-400" id="email-error">
        {{ (inputValue?.length || 0) + "/" + maxlength }} &nbsp;
      </p>
    </div>
    <p
      :visible="errorMessage"
      :class="errorMessage ? 'h-5' : 'h-0'"
      class="mt-2 text-sm text-red-600"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
