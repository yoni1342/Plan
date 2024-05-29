<template>
  <main class="bg-white w-screen min-h-screen max-w-[1920px] mx-auto">
    <header class="fixed top-0 left-0 z-50 w-full">
      <Home-TopNavBar />
    </header>
    <div class="">
      <slot></slot>
    </div>
  </main>
</template>
