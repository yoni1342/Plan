<script setup>
import { useField } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  items: Array,
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  rules: {
    type: [String, Object],
    default: "",
    required: false,
  },
  class: {
    type: String,
  },
  label: {
    type: String,
    default: undefined,
    required: false,
  },
  labelClass: {
    type: String,
  },
  showStar: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
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
  <div class="flex flex-col">
    <div class="relative flex gap-x-2 w-fit">
      <label :class="labelClass" :for="label">{{ label }} </label>
      <span v-if="showStar" class="absolute text-red-600 -right-3 top-2"
        >*</span
      >
    </div>
    <div class="flex flex-col items-start gap-y-3">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="flex items-center h-5 gap-x-2"
      >
        <input
          v-model="inputValue"
          @input="set"
          :id="item.id"
          :aria-describedby="item.name"
          :disabled="disabled"
          :name="props.name"
          type="radio"
          :value="item.name"
          class="transition-all duration-200 disabled:text-kena-gray-600 disabled:cursor-not-allowed"
          :class="[
            errorMessage
              ? 'focus:ring-red-500  h-4 w-4 focus:border-red-500 rounded-full text-sm  cursor-pointer'
              : 'focus:ring-primary-500 h-4 w-4  border-secondary rounded-full text-sm cursor-pointer text-primary-500',
          ]"
        />
        <label
          :for="item.id"
          :class="labelClass"
          class="cursor-pointer font-sm text-secondary"
        >
          {{ item.name }}
        </label>
      </div>
    </div>

    <p
      :visible="errorMessage"
      class="text-sm text-red-600"
      :class="errorMessage ? 'h-5 mt-2' : 'h-0 mt-0'"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
