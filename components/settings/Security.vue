<script setup>
/*------------ Security Information Form -----------*/
const { handleSubmit } = useForm({});
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const handleProfileChange = handleSubmit(() => {
  console.log(currentPassword.value, newPassword.value, confirmPassword.value);
});
</script>

<template>
  <div class="">
    <h1 class="text-2xl text-black">Update Password</h1>
    <p class="text-plan-gray-700 mt-2.5">Update your password</p>

    <form @submit.prevent="handleProfileChange" class="mt-10">
      <!-- First Name Field -->
      <H-TextField
        name="current_password"
        placeholder="*************"
        :rules="{
          required: true,
        }"
        type="password"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="currentPassword"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">Current Password</p>
        </template>
        <template #leading>
          <Icon
            name="lucide:key"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <!-- Middle Name Field -->
      <H-TextField
        name="new_password"
        placeholder="*************"
        :rules="{
          required: true,
        }"
        type="password"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="newPassword"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">New Password</p>
        </template>
        <template #leading>
          <Icon
            name="lucide:key"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <!-- Last Name Field -->
      <H-TextField
        name="confirm_password"
        placeholder="*************"
        :rules="{
          required: true,
        }"
        type="password"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="confirmPassword"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">Confirm Password</p>
        </template>
        <template #leading>
          <Icon
            name="lucide:key"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <button
        class="w-full btn-primary !bg-primary-500 mt-8 !py-2.5 max-w-[472px]"
      >
        <span>Change Password</span>
      </button>
    </form>
  </div>
</template>
