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
      <div
        class="flex items-center justify-center border rounded-full w-28 h-28 border-primary-500 bg-primary-50"
      >
        <Icon class="text-primary-500 w-[76px] h-[76px]" name="uil:shop" />
      </div>
      <div>
        <div class="flex items-center gap-x-4">
          <span class="text-xl">Hana’s Center</span>
          <p
            class="px-2 py-1 text-xs justify-self-end bg-primary-50 text-[#012d6a] rounded-2xl"
          >
            20%
            <Icon
              class="text-xl font-medium text-red-600"
              name="ic:baseline-trending-down"
            />
          </p>
        </div>
        <span class="text-sm text-gray-500">2 Members</span>
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
      <p class="text-sm text-gray-500">Members</p>
      <Centers-Cards-Member v-for="i in 2" :key="i" />
    </div>
  </div>
</template>
