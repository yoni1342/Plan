<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  modelValue: {
    type: Array,
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
    required: true,
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
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
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

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    if (props.modelValue) {
      return props.modelValue;
    }
    return [props.min, (props.max - props.min) / 2];
  },
  set(val) {
    emit("update:modelValue", val);
  },
});
</script>

<template>
  <div class="space-y-2">
    <div class="relative w-fit">
      <label :class="labelClass" for="Eyea">{{ label }}</label>
      <span v-show="showStar" class="absolute top-0 text-red-500 -right-3"
        >*</span
      >
    </div>

    <VueSlider
      :disabled="disabled"
      v-model="value"
      :tooltip="'always'"
      width="100%"
      height="10px"
      :min="min"
      :max="max"
      :dot-handle="{ background: '#e71d37' }"
      :tooltipStyle="{ backgroundColor: '#ff697c' }"
      :dot-style="{
        background: '#fff',
        border: '4px solid #e71d37',
        width: '16px',
        height: '16px',
        top: '8px',
        padding: '1px',
      }"
      :railStyle="{ background: '#D1D5DB' }"
      :processStyle="{ background: '#e71d37' }"
    >
    </VueSlider>
    <div class="flex justify-between">
      <p class="text-kena-gray-600">
        Minimum: <span class="text-black">{{ min }}</span>
      </p>
      <p class="text-kena-gray-600">
        Maximum: <span class="text-black">{{ max }}</span>
      </p>
    </div>
  </div>
</template>
