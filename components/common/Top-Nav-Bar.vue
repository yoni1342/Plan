<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const route = useRoute();
const navs = ref([
  {
    name: "Dashboard",
    icon: "material-symbols:dashboard",
    to: "/app/dashboard",
  },
  {
    name: "Mothers",
    icon: "heroicons:user-group-solid",
    to: "/app/mothers",
  },
  {
    name: "Centers",
    icon: "uil:shop",
    to: "/app/centers",
  },
  {
    name: "Settings",
    icon: "mdi:cog",
    to: "/app/settings",
  },
]);

const currNav = computed(() => {
  return navs.value.find((item) => route.path.includes(item.to));
});
</script>
<template>
  <div class="flex items-center justify-between w-full">
    <div
      class="text-xl font-normal leading-normal flex-row-wrapper text-primary-900"
    >
      <Icon class="text-xl md:text-2xl" :name="currNav.icon" />
      <p class="text-base md:text-xl">{{ currNav.name }}</p>
    </div>
    <div class="relative flex items-center gap-x-4">
      <div
        class="relative font-medium bg-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span
          class="absolute top-0 right-0 bg-[#D8727D] rounded-full w-2 h-2 z-50"
        ></span>
        <Icon name="tdesign:notification" class="text-2xl" />
      </div>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton>
            <div
              class="flex cursor-pointer items-center px-4 md:px-6 py-2 rounded-[27px] gap-x-4 bg-primary-50"
            >
              <img
                src="/images/profile.jpg"
                class="object-cover object-center w-10 h-10 rounded-full"
                alt="profile picture"
              />
              <p class="hidden text-base font-medium md:block">Abebe Kebede</p>
              <Icon class="text-2xl font-medium" name="mdi:chevron-down" />
            </div>
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 w-40 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg hover:bg-primary-900 hover:text-white ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem>
                <button class="px-2 py-3 space-x-2 text-center">
                  <Icon name="streamline:button-power-1-solid" />
                  <span>Log out</span>
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
