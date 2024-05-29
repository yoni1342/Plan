<script setup>
const props = defineProps({
  class: String,
  color1: String, //bg color
  color2: String, //main color
  height: String,
  value: { type: Number, default: 0 },
});
</script>

<template>
  <div
    :class="`
        ${props.height || 'h-2'} 
        ${props.class}
      `"
    class="relative w-full rounded-xl"
  >
    <div
      :class="`${props.color1 || 'bg-primary-200'} ${props.height || 'h-2'} `"
      class="absolute w-full rounded-xl"
    >
      <div
        :class="`${props.color2 || 'bg-primary-600'} ${props.height || 'h-2'} `"
        class="absolute transition-all duration-700 ease-out rounded-xl"
        :style="{ width: `${props.value}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
