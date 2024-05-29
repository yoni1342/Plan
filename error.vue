<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: { path: "/" } });
const router = useRouter();
</script>
<template>
  <div class="bg-kena-gray-100">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-2xl px-4">
        <h1 class="mb-8 text-4xl font-bold text-center">Coming Soon!</h1>
        <p class="mb-12 text-lg text-center text-kena-gray-600">
          Our website is under construction. We'll be back soon!
        </p>
        <div class="flex items-center justify-center gap-5">
          <button
            @click="
              clearError();
              router.back();
            "
            class="btn-primary !bg-white !border !border-kena-gray-200 text-kena-black-950"
          >
            <Icon name="lets-icons:back" /> Back
          </button>
          <button @click="handleError" class="btn-primary">Go To Home</button>
        </div>
      </div>
    </div>
  </div>
</template>
