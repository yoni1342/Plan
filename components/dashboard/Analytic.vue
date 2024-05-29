<script setup>
defineProps({
  title: {
    type: String,
    default: "Total",
  },
  icon: {
    type: String,
    default: "mdi:account-group",
  },
  value: {
    type: String,
    default: "0",
  },
  description: {
    type: String,
  },
});
</script>
<template>
  <div class="flex items-center px-5 py-3.5 rounded-md shadow gap-x-4">
    <div class="flex items-center justify-center">
      <div
        class="flex items-center justify-center w-12 h-12 rounded-md bg-primary-50"
      >
        <Icon :name="icon" class="w-6 h-6 text-plan-gray-950" />
      </div>
    </div>
    <div class="flex flex-col gap-y-1">
      <h2 class="text-sm font-medium text-justify text-plan-gray-500">
        {{ title }}
      </h2>
      <p class="text-3xl font-semibold text-justify">{{ value }}</p>
      <p class="text-sm text-justify truncate text-plan-gray-500 line-clamp-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>
