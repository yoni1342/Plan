<script setup>
const props = defineProps({
  hasChild: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="space-y-12 border-r border-primary-300">
    <div class="space-y-4">
      <img
        class="object-cover object-center rounded-full w-28 h-28"
        src="/images/temp/mother.jpg"
        alt="mother photo"
      />
      <div>
        <div class="flex items-center gap-x-4">
          <span class="text-xl">Hana Alemu</span>
          <span class="px-2 py-1 text-xs text-blue-700 bg-blue-200 rounded-2xl"
            >Pending</span
          >
        </div>
        <span class="text-sm text-gray-500">Mother of 2</span>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div class="space-y-2">
        <p class="text-sm text-gray-500">Martial Status</p>
        <p class="text-base text-primary-950">Married</p>
      </div>
      <div class="space-y-2">
        <p class="text-sm text-gray-500">Age</p>
        <p class="text-base text-primary-950">32</p>
      </div>
      <div class="space-y-2">
        <p class="text-sm text-gray-500">Occupation</p>
        <p class="text-base text-primary-950">HR Officer</p>
      </div>
    </div>
    <div class="space-y-2">
      <p class="text-sm text-gray-500">Address</p>
      <p class="text-base text-primary-950">
        24123 Bode Estates, West Wilber 76142
      </p>
    </div>
    <div class="grid grid-cols-2">
      <div class="space-y-2">
        <p class="text-sm text-gray-500">Phone Number</p>
        <p class="text-base text-primary-950">+251910780819</p>
      </div>
      <div class="space-y-2">
        <p class="text-sm text-gray-500">Alternative Phone Number</p>
        <p class="text-base text-primary-950">+251710780819</p>
      </div>
    </div>
    <div class="space-y-4" v-if="hasChild">
      <p class="text-sm text-gray-500">Phone Number</p>
      <CardsChildren v-for="i in 2" :key="i" />
    </div>
    <div class="space-y-4" v-else>
      <p class="text-sm text-gray-500">Phone Number</p>
      <CardsCenter v-for="i in 2" :key="i" />
    </div>
  </div>
</template>
