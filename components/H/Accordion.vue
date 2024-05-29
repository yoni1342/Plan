<script setup>
const openDropdown = ref(false);
const toggleDropdown = () => {
  openDropdown.value = !openDropdown.value;
};
</script>
<template>
  <div class="flex flex-col w-full py-3 bg-gray-100 gap-y-2 md:gap-y-4">
    <div class="px-4 py-2 md:py-4">
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleDropdown"
      >
        <div class="flex items-center gap-x-4">
          <h2
            class="text-sm font-medium leading-6 text-black xl:text-base font-poppins whitespace-nowrap"
          >
            Chapter 2:
          </h2>
          <h2
            class="text-sm font-medium leading-6 xl:text-base font-poppins text-kena-gray-600"
          >
            Introduction
          </h2>
        </div>
        <div class="block cursor-pointer">
          <Icon
            class="text-kena-gray-600"
            v-if="openDropdown"
            name="ep:arrow-up"
          />
          <Icon class="text-kena-gray-600" v-else name="ep:arrow-down" />
        </div>
      </div>
    </div>

    <div v-if="openDropdown" class="px-6">
      <slot></slot>
    </div>
  </div>
</template>
