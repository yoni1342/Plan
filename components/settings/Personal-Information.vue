<script setup>
/*------------ Personal Information Form -----------*/
const { handleSubmit } = useForm({});
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");

const handleProfileChange = handleSubmit(() => {
  console.log(firstName.value, middleName.value, lastName.value);
});
</script>

<template>
  <div>
    <h1 class="text-2xl text-black">Personal Information</h1>
    <p class="text-plan-gray-700 mt-2.5">Update your personal information</p>
    <div class="relative mt-4 w-max">
      <img
        src="/images/profile.jpg"
        alt="profile image"
        class="object-cover w-20 h-20 rounded-full"
      />
      <button
        class="absolute bottom-0 right-0 flex items-center justify-center text-white border-2 rounded-full bg-primary-500 w-7 h-7 border-plan-gray-300"
      >
        <Icon name="lucide:plus" />
      </button>
    </div>
    <form @submit.prevent="handleProfileChange">
      <!-- First Name Field -->
      <H-TextField
        name="first_name"
        placeholder="First Name"
        :rules="{
          required: true,
        }"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="firstName"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">First Name</p>
        </template>
        <template #leading>
          <Icon
            name="uil:user-check"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <!-- Middle Name Field -->
      <H-TextField
        name="middle_name"
        placeholder="Middle Name"
        :rules="{
          required: true,
        }"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="middleName"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">Middle Name</p>
        </template>
        <template #leading>
          <Icon
            name="uil:user-check"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <!-- Last Name Field -->
      <H-TextField
        name="last_name"
        placeholder="Middle Name"
        :rules="{
          required: true,
        }"
        class="relative px-3 py-3 pl-12 max-w-[472px]"
        v-model="lastName"
      >
        <template #label>
          <p class="text-xl text-primary-950 my-3.5">Last Name</p>
        </template>
        <template #leading>
          <Icon
            name="uil:user-check"
            class="absolute z-10 w-5 h-5 -translate-y-2.5 left-3.5 top-1/2 text-plan-gray-700"
          />
        </template>
      </H-TextField>

      <button
        class="w-full btn-primary !bg-primary-500 mt-8 !py-2.5 max-w-[472px]"
      >
        <span>Update</span>
      </button>
    </form>
  </div>
</template>
