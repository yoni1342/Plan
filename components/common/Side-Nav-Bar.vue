<script setup>
const navs = ref([
  {
    name: "Dashboard",
    icon: "material-symbols:dashboard",
    to: "/app/dashboard",
  },
  {
    name: "Mothers",
    icon: "heroicons:user-group-solid",
    to: "/app/mothers",
  },
  {
    name: "Centers",
    icon: "uil:shop",
    to: "/app/centers",
  },
  {
    name: "Settings",
    icon: "mdi:cog",
    to: "/app/settings",
  },
]);

const open = ref(false);
</script>
<template>
  <HModal v-model="open" auto-close>
    <template #content>
      <div class="flex items-center justify-between">
        <button
          class="flex flex-col items-center justify-center h-32 py-2 border border-primary-200 text-primary-950 w-44 lg:w-56 gap-y-6 lg:h-44 rounded-xl"
        >
          <Icon class="text-5xl lg:text-8xl" name="mdi:mother-nurse" />
          <span class="text-lg lg:text-xl">Working Mother</span>
        </button>
        <button
          class="flex flex-col items-center justify-center h-32 py-2 border-2 text-primary-950 w-44 lg:w-56 gap-y-6 border-primary-200 bg-primary-50 lg:h-44 rounded-xl"
        >
          <Icon class="text-5xl lg:text-8xl" name="healthicons:child-care" />
          <span class="text-lg lg:text-xl">Care Givers</span>
        </button>
      </div>
    </template>
  </HModal>
  <div
    class="flex flex-col items-center pt-8 pb-4 overflow-y-auto bg-white grow gap-y-32 lg:gap-y-44"
  >
    <NuxtLink to="/"
      ><img src="/images/logo.png" class="w-36" alt=""
    /></NuxtLink>
    <div class="flex flex-col gap-y-10">
      <NuxtLink
        class="px-10 py-2 text-xl font-normal leading-normal border-l-4 border-white rounded-md flex-row-wrapper text-primary-950"
        :class="[
          $route.path.includes(nav.to) &&
            'bg-primary-50 !text-primary-900  !border-primary-900',
        ]"
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
      >
        <Icon class="text-xl md:text-2xl" :name="nav.icon" />
        <p class="text-base md:text-xl">{{ nav.name }}</p>
      </NuxtLink>
    </div>
    <button
      @click="open = true"
      class="flex flex-col items-center justify-center h-32 py-2 text-white w-44 lg:w-56 gap-y-6 bg-primary-900 lg:h-44 rounded-2xl"
    >
      <Icon class="text-5xl text-white lg:text-8xl" name="mdi:mother-nurse" />
      <span class="text-lg lg:text-xl">Register Mother</span>
    </button>
  </div>
</template>
