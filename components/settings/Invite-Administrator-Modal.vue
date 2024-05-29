<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <H-Modal :modelValue="showModal">
    <template #Heading>
      <div class="flex items-center justify-between">
        <div class="flex items-center text-black gap-x-3">
          <h2 class="text-xl font-medium">Invite Administrators</h2>
        </div>
        <button @click="showModal = false">
          <Icon name="ic:round-close" class="text-xl" />
        </button>
      </div>
    </template>
    <template #content>
      <div class="mt-16 ">
        <form @submit.prevent class="space-y-4">
          <H-DragAndDrop>
            <label class="text-plan-black-950">Profile Image</label>
            <div
              class="flex flex-col items-center px-8 py-5 mt-3 border border-gray-300 border-dashed rounded-md gap-y-2 text-plan-gray-900"
            >
              <Icon name="formkit:uploadcloud" class="text-3xl" />
              <p class="">
                Drag and drop here or
                <span class="text-red-800 underline">Browse</span>
              </p>
              <p class="text-sm">
                Select images that are landscape and under 10MB
              </p>
            </div>
          </H-DragAndDrop>
          <H-TextField
            name="name"
            placeholder="Name"
            :rules="{
              required: true,
            }"
            class="relative px-3 py-3 pl-12"
          >
            <template #label>
              <p class="my-3 text-base text-plan-black-950">Name</p>
            </template>
            <template #leading>
              <Icon
                name="uil:user-check"
                class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
              />
            </template>
          </H-TextField>

          <!-- Email Field -->
          <H-TextField
            name="email"
            placeholder="example@gmail.com"
            :rules="{
              email: true,
              required: true,
            }"
            class="relative px-3 py-3 pl-12"
          >
            <template #label>
              <p class="my-3 text-base text-plan-black-950">Email</p>
            </template>
            <template #leading>
              <Icon
                name="material-symbols:mail"
                class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
              />
            </template>
          </H-TextField>

          <!-- Role Field -->
          <H-ListSelect
            :items="[
              { name: 'Administrator', id: 'admin' },
              {
                name: 'Data Encoder',
                id: 'data_encoder',
              },
            ]"
            class="relative px-3 py-3 border border-gray-300 rounded-md"
          >
            <template #label>
              <p class="my-3 text-base text-plan-black-950">Role</p>
            </template>
          </H-ListSelect>
          <button
            class="btn-primary !bg-primary-500 !w-full px-3 py-1.5"
            @click="showModal = false"
          >
            Invite Administrator
          </button>
        </form>
      </div>
    </template>
  </H-Modal>
</template>
