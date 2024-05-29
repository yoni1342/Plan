<script setup>
definePageMeta({
  layout: "app",
});
</script>
<template>
  <div class="w-full h-full overflow-y-auto">
    <!-- Administrators Section -->
    <Settings-Administrator />

    <div
      class="grid w-full grid-cols-2 px-4 py-5 mt-8 bg-white rounded-md shadow-sm sm:px-6 lg:px-12 gap-x-32"
    >
      <!-- Personal Information -->
      <Settings-PersonalInformation />

      <!-- Security -->
      <Settings-Security />
    </div>
  </div>
</template>
