<script setup></script>
<template>
  <div
    class="bg-primary-900 lg:px-[100px] md:px-[60px] px-5 py-2 flex items-center justify-between"
  >
    <div>
      <img src="/images/plan-logo-white-bg.png" class="w-36" alt="" />
    </div>
    <nav class="items-center hidden text-white lg:flex gap-x-12">
      <nuxt-link class="capitalize" to="/"> HOME </nuxt-link>
      <nuxt-link class="capitalize" to="/#about"> ABOUT </nuxt-link>
      <nuxt-link class="capitalize" to="/#services"> SERVICES </nuxt-link>
      <nuxt-link
        class="underline capitalize"
        to="https://plan-international.org/ethiopia/what-we-do/"
        target="__black"
      >
        WHAT WE DO
      </nuxt-link>
    </nav>
    <div>
      <nuxt-link
        to="/login"
        class="flex items-center px-6 py-2 text-white border rounded-md border-plan-gray-300 gap-x-3"
      >
        <Icon name="lucide:shield-ellipsis" class="w-5 h-5" />
        <span>LOG IN</span>
      </nuxt-link>
    </div>
  </div>
</template>
