<script setup>
const props = defineProps({
  isProfile: {
    type: Boolean,
    default: false,
  },
});
const open = ref(false);
const openEdit = ref(false);
</script>
<template>
  <div
    class="flex items-center gap-x-6 border border-primary-200 bg-primary-50 w-[360px] rounded-md py-2 px-4"
  >
    <img
      class="object-cover object-center w-12 h-12 rounded-full"
      src="/images/temp/mother2.jpg"
      alt="mother photo"
    />
    <div>
      <p class="text-base text-primary-950">Meron Sisay Abebe</p>
      <p class="space-x-2 text-sm text-primary-950">Mother of 2</p>
    </div>
    <div v-if="isProfile" class="flex gap-x-2">
      <Icon
        class="text-2xl cursor-pointer text-primary-950"
        name="line-md:edit"
      />
      <Icon
        class="text-2xl cursor-pointer text-primary-950"
        name="tabler:trash"
        @click="open = true"
      />
    </div>
    <div v-else class="flex gap-x-4">
      <Icon
        class="text-2xl cursor-pointer text-primary-950"
        name="carbon:skip-forward-outline"
        @click="openEdit = true"
      />
      <Icon
        @click="$router.push('/app/mothers/profile/children')"
        class="text-2xl cursor-pointer text-primary-950"
        name="ph:eye"
      />
    </div>
  </div>
</template>
