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
</script>

<template>
  <HModal autoClose v-model="open" class="w-[300px] h-auto">
    <template #Heading>
      <div class="space-x-2 text-xl font-normal text-red-600">
        <Icon name="mingcute:baby-fill" /><span> Remove Child</span>
      </div>
    </template>
    <template #content>
      <div class="space-y-8">
        <div class="mt-12">
          Are you sure you want to remove the child’s information form this
          Mother. This action is irreversible please consider your action
          thoroughly.
        </div>
        <div class="flex justify-between">
          <button @click="open = false" class="!bg-red-600 btn-primary">
            Cancel
          </button>
          <button
            class="!bg-white border border-gray-200 !text-black btn-primary"
          >
            Confirm
          </button>
        </div>
      </div>
    </template>
  </HModal>
</template>
