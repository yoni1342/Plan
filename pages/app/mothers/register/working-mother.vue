<script setup>
definePageMeta({
  layout: "app",
});

const router = useRouter();
const route = useRoute();

router.replace({
  path: route.path,
  query: { step: 0 },
});

const steps = ref([
  {
    icon: "fluent:person-20-filled",
    title: "Personal Info",
    sub_title: "Basic bio information",
  },
  {
    icon: "heroicons:currency-dollar-solid",
    title: "Socio Economic Info",
    sub_title: "Socioeconomic info",
  },
  {
    icon: "mingcute:baby-fill",
    title: "Children",
    sub_title: "Detail about children",
  },
  {
    icon: "bxs:badge-check",
    title: "Confirmation",
    sub_title: "Your details here",
  },
]);

const activeStep = computed(() => parseInt(route.query.step));

const goNext = () => {
  router.push({
    path: route.path,
    query: { step: activeStep.value + 1 },
  });
};

const goBack = () => {
  router.push({
    path: route.path,
    query: { step: activeStep.value - 1 },
  });
};
</script>
<template>
  <div class="flex w-full h-full gap-x-4">
    <div class="min-w-[350px]">
      <Mother-SideStepper :steps="steps" />
    </div>
    <div class="w-full px-10 py-6 space-y-12 bg-white rounded-md">
      <div class="flex justify-between">
        <CommonProfileUpload v-if="activeStep == 0" />
        <MotherWorkingProfile v-if="activeStep == 1 || activeStep == 2" />
        <button class="btn-primary h-fit" v-if="activeStep != 3">
          <Icon name="carbon:save" class="text-xl" />
          <span>Save as Draft</span>
        </button>
      </div>
      <Mother-Working-PersonalInfo
        @proceed="goNext"
        @previous="goBack"
        v-if="activeStep == 0"
      />
      <MotherWorkingSocioEconomic
        @proceed="goNext"
        @previous="goBack"
        v-if="activeStep == 1"
      />
      <Mother-Working-Children
        @proceed="goNext"
        @previous="goBack"
        v-if="activeStep == 2"
      />
      <MotherWorkingConfirmation
        @finish="$router.push('/app/mothers')"
        @previous="goBack"
        v-if="activeStep == 3"
      />
    </div>
  </div>
</template>
