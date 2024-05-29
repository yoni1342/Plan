<script setup>
definePageMeta({
  layout: "app",
});

const router = useRouter();

const route = useRoute();

const draftContainer = ref(null);

const reRoute = (newQuery) => {
  router.push({
    query: { ...route.query, ...newQuery },
  });
};

const steps = ref([
  {
    icon: "bx:check",
    title: "basic center info",
    sub_title: "Basic Center information",
  },
  {
    icon: "uil:question-circle",
    title: "assessment",
    sub_title: "Assess center’s status",
  },
]);

if (!route.query.step) {
  router.replace({
    query: { step: steps.value[0].title, ...route.query },
  });
}

const activeStepIndex = computed(() => {
  const stepTitle = route.query.step;
  return steps.value.findIndex((step) => step.title === stepTitle) || 0;
});

const goNext = () => {
  draftContainer.value?.scrollIntoView({
    block: "end",
    inline: "nearest",
    behavior: "smooth",
  });
  reRoute({ step: steps.value[activeStepIndex.value + 1].title });
};

const goBack = () => {
  draftContainer.value?.scrollIntoView({
    block: "end",
    inline: "nearest",
    behavior: "smooth",
  });
  reRoute({ step: steps.value[activeStepIndex.value - 1].title });
};
</script>
<template>
  <div class="flex w-full h-[calc(100vh-116px)] gap-x-4">
    <div class="min-w-[350px] h-full overflow-y-auto relative">
      <Mother-SideStepper :steps="steps" />
    </div>
    <div
      class="w-full h-full px-10 py-6 space-y-12 overflow-y-auto bg-white rounded-md"
    >
      <div>
        <div class="flex items-center justify-end" ref="draftContainer">
          <button class="btn-primary h-fit" v-if="activeStep != 3">
            <Icon name="carbon:save" class="text-xl" />
            <span>Save as Draft</span>
          </button>
        </div>
        <Centers-Form-BasicInfo
          v-if="activeStepIndex === 0"
          @proceed="goNext"
        />

        <Centers-Form-Assessment
          v-if="activeStepIndex === 1"
          @proceed="goNext"
          @previous="goBack"
        />
      </div>
    </div>
  </div>
</template>
