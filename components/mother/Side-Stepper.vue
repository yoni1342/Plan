<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div
    class="sticky top-0 w-full h-full pl-8 pr-4 space-y-16 bg-white rounded-md py-9"
  >
    <h2 class="text-[23px] font-normal text-blue-950">Registration</h2>
    <div>
      <div v-for="(step, index) in steps" :key="index">
        <div class="flex items-center gap-x-4">
          <span
            class="flex items-center justify-center w-10 h-10 rounded-full"
            :class="[
              index < parseInt($route.query.step)
                ? 'bg-green-100'
                : 'bg-primary-100',
              index == parseInt($route.query.step)
                ? 'bg-primary-300 text-white'
                : '',
            ]"
          >
            <Icon
              class="text-2xl text-gray-500"
              :class="index == parseInt($route.query.step) ? 'text-white' : ''"
              :name="
                index < parseInt($route.query.step) ? 'bx:check' : step.icon
              "
            />
          </span>
          <div>
            <h3 class="text-lg leading-6 text-gray-600 capitalize">
              {{ step.title }}
            </h3>
            <p class="text-sm leading-7 text-gray-500">{{ step.sub_title }}</p>
          </div>
        </div>
        <div v-if="index < steps.length - 1" class="w-10 h-16">
          <div
            class="h-16 py-2 border mx-auto w-[0.2px] border-primary-400/30"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
