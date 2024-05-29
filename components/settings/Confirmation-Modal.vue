<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  headerTitle: {
    type: String,
    required: true,
  },
  headerIcon: {
    type: String,
  },
  bodyTitle: {
    type: String,
    required: true,
  },
  bodyDescription: {
    type: String,
  },
  agreeText: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue", "agreed"]);

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const agreed = () => {
  emit("agreed");
  showModal.value = false;
};
</script>
<template>
  <H-Modal :modelValue="showModal">
    <template #Heading>
      <div class="flex items-center justify-between">
        <div class="flex items-center text-red-600 gap-x-3">
          <Icon :name="headerIcon" class="text-2xl" />
          <h2 class="text-2xl">{{ headerTitle }}</h2>
        </div>
        <button @click="showModal = false">
          <Icon name="ic:round-close" class="text-xl" />
        </button>
      </div>
    </template>
    <template #content>
      <div class="mt-16 space-y-5">
        <h3 class="text-black">{{ bodyTitle }}</h3>
        <p v-if="bodyDescription" class="text-plan-gray-700">
          {{ bodyDescription }}
        </p>

        <!-- Actions -->
        <div class="grid grid-cols-2 gap-3">
          <button
            class="btn-primary !bg-primary-500 !w-full px-3 py-1.5"
            @click="showModal = false"
          >
            Cancel
          </button>
          <button
            class="btn-primary !bg-white border border-plan-gray-300 !text-black !w-full px-3 py-1.5"
            @click="agreed"
          >
            {{ agreeText }}
          </button>
        </div>
      </div>
    </template>
  </H-Modal>
</template>
