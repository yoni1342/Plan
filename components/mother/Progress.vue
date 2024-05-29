<script setup>
const props = defineProps({
  isNotChild: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div class="grid grid-cols-12">
    <div class="flex flex-col items-center col-span-2">
      <div
        class="flex flex-col items-center justify-center w-12 h-12 border-t-4 border-red-600 rounded-sm bg-primary-100"
      >
        <p class="text-xs font-medium text-primary-950">23</p>

        <p class="text-xs font-medium text-primary-950">DEC</p>
      </div>
      <div class="w-[1px] h-[60%] border border-primary-50"></div>
    </div>
    <div class="col-span-7 space-y-3">
      <p class="text-base text-primary-950">
        Faucibus odio morbi egestas ligula gravida mi sem cursus diam.
      </p>
      <button
        v-if="isNotChild"
        class="text-gray-600 !py-2 !h-fit bg-white border shadow-none btn-primary hover:bg-gray-50"
      >
        <Icon name="lucide:list-tree" />
        <span>View Response</span>
      </button>
      <div v-else class="h-6"></div>
    </div>
    <p
      class="col-span-3 h-fit px-4 w-fit py-1 text-base justify-self-end bg-primary-100 text-[#012d6a] rounded-2xl"
    >
      17.8%
      <Icon
        class="text-xl font-medium text-red-600"
        name="ic:baseline-trending-down"
      />
    </p>
  </div>
</template>
