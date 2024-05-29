<script setup>
definePageMeta({
  layout: "auth",
});

const router = useRouter();

/*----------------- Login Form -----------------*/
const email = ref("");
const password = ref("");

const { handleSubmit } = useForm({});
const handleLogin = handleSubmit(() => {
  router.replace({ path: "/app" });
});
</script>
<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="max-w-[600px] shadow rounded-2xl px-20 py-10">
      <div class="max-w-[412px] mx-auto flex flex-col gap-y-8">
        <div>
          <img src="/images/logo.png" alt="logo" class="w-[300px]" />
        </div>
        <p class="text-center text-plan-gray-600">
          Please enter your credential to continue. If you forgot your password
          please contact the IT Support team.
        </p>
        <div>
          <form @submit.prevent="handleLogin">
            <H-TextField
              name="email"
              placeholder="you@example.com"
              :rules="{
                required: true,
                email: true,
              }"
              class="relative px-3 py-2 pl-10"
              v-model="email"
            >
              <template #label>
                <p class="text-xl text-primary-950 my-3.5">Email</p>
              </template>
              <template #leading>
                <Icon
                  name="material-symbols:mail"
                  class="absolute z-10 w-5 h-5 -translate-y-2.5 left-2 top-1/2 text-plan-gray-700"
                />
              </template>
            </H-TextField>
            <H-TextField
              name="password"
              placeholder="Password"
              rules="required"
              type="password"
              class="relative px-3 py-2 pl-10"
              v-model="password"
            >
              <template #label>
                <p class="text-xl text-primary-950 my-3.5">Password</p>
              </template>
              <template #leading>
                <Icon
                  name="lucide:key"
                  class="absolute z-10 w-5 h-5 -translate-y-2.5 left-2 top-1/2 text-plan-gray-700"
                />
              </template>
            </H-TextField>
            <button class="w-full btn-primary mt-8 !py-2.5">
              <Icon name="lucide:shield-ellipsis" class="w-5 h-5" />
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
