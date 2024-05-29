<script setup>
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const sidebarOpen = ref(true);
</script>
<template>
  <div class="bg-primary-50">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex flex-1 w-full max-w-xs">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute top-0 flex justify-center w-16 pt-5 left-full"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <Icon name="iconoir:xmark" class="text-2xl" />
                  </button>
                </div>
              </TransitionChild>
              <div
                class="flex flex-col w-full pb-4 overflow-y-auto bg-white grow gap-y-5 ring-1"
              >
                <Common-SideNavBar />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <Common-SideNavBar />
    </div>

    <div class="flex flex-col min-h-screen lg:pl-72 lg:mx-6">
      <div
        class="sticky w-full rounded-md top-0 z-40 flex items-center px-4 py-3 bg-white h-[76px] shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <Icon class="text-2xl" name="pajamas:hamburger" />
        </button>

        <div
          class="flex items-center self-stretch justify-between flex-1 gap-x-4 lg:gap-x-6"
        >
          <CommonTopNavBar />
        </div>
      </div>

      <main class="flex-grow lg:pt-10">
        <div class="h-full">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
