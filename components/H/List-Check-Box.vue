<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
  },
  labelClass: String,
  rules: {
    type: [String, Object],
    default: "",
    required: false,
  },
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  showStar: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  optionGroupClass: String,
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const emit = defineEmits(["update:modelValue"]);

const selectedOptions = ref(props.modelValue);

const isSelected = (id) => {
  return selectedOptions.value.includes(id);
};

const toggleSelection = (id) => {
  const index = selectedOptions.value.indexOf(id);
  if (index > -1) {
    selectedOptions.value.splice(index, 1);
  } else {
    selectedOptions.value.push(id);
  }
  inputValue.value = selectedOptions.value;
  emit("update:modelValue", selectedOptions.value);
};
</script>

<template>
  <div class="flex flex-col">
    <div class="relative flex gap-x-1 w-fit">
      <h2
        :class="labelClass"
        class="py-2 text-sm font-normal leading-5 text-gray-600 md:text-base"
      >
        {{ label || "List Check Box" }}
      </h2>
      <span v-show="props.showStar" class="absolute text-red-500 -right-3 top-2"
        >*</span
      >
    </div>
    <p
      class="mt-1 text-sm text-red-600 transition-all duration-300 font-body"
      :class="errorMessage ? 'h-5' : 'h-0'"
      id="email-error"
      :visible="errorMessage"
    >
      {{ errorMessage }} &nbsp;
    </p>
    <div :class="props.optionGroupClass">
      <div class="space-x-4" v-for="option in options" :key="option.id">
        <input
          type="checkbox"
          class="rounded ring-primary-600 focus:ring-primary-600 text-primary-600 text-md"
          :value="option.id"
          :checked="isSelected(option.id)"
          @change="toggleSelection(option.id)"
          :disabled="props.disabled"
        />
        <span class="text-gray-900">
          {{ option.name }}
        </span>
      </div>
    </div>
  </div>
</template>
