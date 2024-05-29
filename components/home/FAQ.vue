<script setup></script>

<template>
  <div
    class="bg-primary-50 lg:px-[100px] md:px-[60px] px-5 py-10 w-full"
    id="faq"
  >
    <h2 class="section-title">frequently asked questions</h2>
    <p class="max-w-[82ch]">
      Bibendum vel facilisi ac quisque eu adipiscing quisque. Sagittis quam
      commodo duis dictum id faucibus ut est.
    </p>
    <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3 sm:grid-cols-2">
      <div class="space-y-5" v-for="i in 6" :key="i">
        <div
          class="flex items-center justify-center w-12 h-12 rounded-full bg-primary-900"
        >
          <Icon name="lucide:shield-question" class="text-2xl text-white" />
        </div>
        <h3 class="text-xl font-bold max-w-[30ch]">
          Sit nulla nunc nam pharetra congue libero quis purus mauris.
        </h3>
        <p class="font-medium text-plan-gray-700 max-w-[40ch]">
          Pellentesque suscipit neque leo elementum mi tortor sit euismod.
          Ornare tortor sed suspendisse pulvinar.
        </p>
      </div>
    </div>
  </div>
</template>
