<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);

const open = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emits("update:modelValue", val);
  },
});

const Progress = ref(30);

const tabs = ref([
  {
    name: "Social Emotional",
    num: "1/3",
  },
  {
    name: "Expressive Language",
    num: "1/3",
  },
  {
    name: "Cognitive",
    num: "1/3",
  },
  {
    name: "Gross Motor",
    num: "1/3",
  },
  {
    name: "Fine Motor",
    num: "1/3",
  },
]);
</script>

<template>
  <HModal v-model="open" autoClose wrapperClass="!w-[950px] h-auto">
    <template #Heading>
      <div>
        <h1 class="text-xl font-normal">3 Year - Milestone Checklist</h1>
      </div>
    </template>
    <template #content>
      <div class="space-y-6 mt-14">
        <div class="flex items-center gap-x-4">
          <img
            class="object-cover object-center w-16 h-16 rounded-full"
            src="/images/temp/mother2.jpg"
            alt="mother photo"
          />
          <div>
            <p class="text-xl text-gray-900">Meron Sisay Abebe</p>
            <p class="text-sm text-gray-500">23 Month Old</p>
          </div>
        </div>
        <div class="flex flex-col items-end gap-y-4">
          <p class="text-sm text-primary-900">2/15 Questions</p>
          <HStageProgress :value="Progress" />
        </div>
        <HTabs :tabs="tabs" tabListClass="!space-x-5 justify-between">
          <template #tab="{ tabData }"
            ><div class="flex items-center text-base leading-6 gap-x-2">
              <span
                class="text-gray-600"
                :class="tabData.isActive ? 'text-primary-500' : ''"
                >{{ tabData.tab.name }}</span
              ><span
                class="h-full px-2 text-sm text-primary-950 bg-primary-100 rounded-3xl"
                >{{ tabData.tab.num }}</span
              >
            </div></template
          >
        </HTabs>

        <div class="space-y-10">
          <p class="form-label !text-lg">
            1. Calms down with in 10 minutes after you leave her, like at a
            childcare drop of
          </p>
          <div class="flex items-center gap-x-4">
            <button class="btn-gray-outline">Yes</button>
            <button class="!px-16 btn-gray-outline w-fit">Not Sure</button>
            <button class="btn-gray-outline">No</button>
          </div>

          <HTextArea
            label="Note"
            labelClass="form-label"
            name="Note"
            placeholder="Notes will save automatically enter them here"
            class="col-span-2"
          />
        </div>
        <div class="flex justify-between pt-4">
          <button
            :disabled="parseInt($route.query.step) < 1"
            class="btn-primary h-fit"
            @click="$emit('previous')"
          >
            <Icon name="tdesign:arrow-left" />
            <span>Previous</span>
          </button>
          <button
            :disabled="parseInt($route.query.step) > 3"
            class="btn-primary H-fit"
            @click="$emit('proceed')"
          >
            <span>Proceed</span>
            <Icon name="tdesign:arrow-right" />
          </button>
        </div>
      </div>
    </template>
  </HModal>
</template>
