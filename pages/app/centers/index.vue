<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

definePageMeta({
  layout: "app",
});

const currentTabIndex = ref(0);

const tabs = ref([
  {
    name: "List View",
    icon: "lucide:list-tree",
  },
  {
    name: "Map View",
    icon: "uil:map",
  },
]);

const headers = ref([
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Address",
    value: "address",
  },
  {
    text: "Members",
    value: "members",
  },
  {
    text: "Last Updated",
    value: "last_updated",
  },
  {
    text: "Status",
    value: "status",
  },
  {
    text: "Action",
    value: "action",
  },
]);

const tableData = ref(
  new Array(7).fill({
    name: "Hanan's Center",
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    members: [
      {
        name: "Hanan Kedebe",
        profile_image: "/images/temp/mother.jpg",
      },
      {
        name: "Melat Alemu",
        profile_image: "/images/temp/mother.jpg",
      },
    ],
    last_updated: "12/01/2024",
    status: "Active",
  })
);

const sort = ref([]);

const markedLocations = [
  [7.0472, 38.4807],
  [7.0477, 38.4958],
  [7.0477, 38.4958],
];
</script>
<template>
  <div class="w-full h-full px-6 py-8 space-y-2 bg-white rounded-md">
    <div
      class="flex flex-col xl:justify-between xl:items-center gap-y-4 xl:flex-row"
    >
      <H-Tabs
        v-model:currentTabIndex="currentTabIndex"
        :tabs="tabs"
        tab-text-class="font-medium"
      />
      <div class="flex items-center gap-x-4">
        <H-TextField
          name="search_mothers"
          leading-icon="uil:search"
          trailing-icon="tabler:adjustments-filled"
          placeholder="Search..."
          class="px-2 py-2.5 border !border-gray-200"
          icon-leading-class="text-plan-gray-300"
        />

        <nuxt-link
          to="/app/centers/register"
          class="!py-2.5 btn-primary !w-fit"
        >
          <Icon name="heroicons-solid:view-grid-add" />
          <span class="truncate"> Register Center </span>
        </nuxt-link>
      </div>
    </div>
    <div v-if="currentTabIndex === 0">
      <HTable
        :headers="headers"
        :items="tableData"
        :sort="sort"
        :loading="false"
        rowStyle="border-b border-gray-100 bg-white"
        rowHeadStyle="text-gray-500 bg-gray-50 py-2 px-[12px] text-[12px] leading-normal"
      >
        <template #name="{ item }">
          <div class="flex items-center gap-x-4">
            <H-CheckBox />
            <div>
              <p class="!text-sm text-gray-950 truncate">
                {{ item.name }}
              </p>
              <p class="text-xs text-gray-400 truncate">3 Members</p>
            </div>
            <p
              class="px-2 py-1 text-xs justify-self-end bg-primary-50 text-[#012d6a] rounded-2xl"
            >
              20%
              <Icon
                class="text-xl font-medium text-red-600"
                name="ic:baseline-trending-down"
              />
            </p>
          </div>
        </template>
        <template #address="{ item }">
          <div>
            <p class="!text-sm text-gray-950 truncate">
              {{ item.address.address }}
            </p>
            <p class="text-xs text-gray-400 truncate">
              {{ item.address.phone_no }}
            </p>
          </div>
        </template>
        <template #members="{ item }">
          <div class="flex items-center gap-x-2">
            <span class="chip !bg-primary-50 !text-black font-medium">{{
              item.members[0]?.name
            }}</span>

            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton>
                  <button
                    class="!bg-primary-50 !text-black !rounded-full w-7 h-7 flex items-center justify-center"
                  >
                    <Icon name="tabler:dots" class="text-xl" />
                  </button>
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
                  class="absolute right-0 z-50 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-60 ring-1 ring-black/5 focus:outline-none"
                >
                  <div class="px-3.5 py-2 pb-6">
                    <p class="text-sm">Members</p>
                    <div
                      v-for="(member, index) in item.members"
                      :key="index"
                      class="mt-2 border-b border-b-plan-gray-300 py-1.5"
                    >
                      <p class="flex items-center gap-x-2">
                        <img
                          :src="member.profile_image"
                          alt=""
                          class="object-cover w-8 h-8 rounded-full"
                        />
                        {{ member.name }}
                      </p>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </template>
        <template #status="{ item }">
          <button
            class="px-2 py-1 text-xs rounded-2xl"
            :class="
              item.status == 'Active'
                ? ' text-green-700 bg-green-200 '
                : 'text-blue-700 bg-blue-200'
            "
          >
            {{ item.status }}
          </button>
        </template>
        <template #action>
          <div>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton>
                  <Icon class="text-xl" name="entypo:dots-three-vertical" />
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
                  class="absolute right-0 z-50 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-60 ring-1 ring-black/5 focus:outline-none"
                >
                  <div class="px-1 py-1 hover:bg-primary-50">
                    <MenuItem>
                      <button class="px-2 py-2 space-x-4 text-base text-center">
                        <Icon class="text-xl" name="ph:user-square" />
                        <span>View Profile</span>
                      </button>
                    </MenuItem>
                  </div>
                  <div class="px-1 py-1 hover:bg-primary-50">
                    <MenuItem>
                      <button class="px-2 py-2 space-x-4 text-base text-center">
                        <Icon
                          class="text-xl"
                          name="mdi:question-mark-circle-outline"
                        />
                        <span>Assess Now</span>
                      </button>
                    </MenuItem>
                  </div>
                  <div class="px-1 py-1 hover:bg-primary-50">
                    <MenuItem>
                      <button class="px-2 py-2 space-x-4 text-base text-center">
                        <Icon class="text-xl" name="iconoir:edit" />
                        <span>Edit Center</span>
                      </button>
                    </MenuItem>
                  </div>
                  <div class="px-1 py-1 hover:bg-primary-50">
                    <MenuItem>
                      <button class="px-2 py-2 space-x-4 text-base text-center">
                        <Icon class="text-xl" name="ph:trash-bold" />
                        <span>Delete Center</span>
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </template>
      </HTable>

      <div class="pagination">
        <div class="flex justify-end my-1">
          <div class="flex items-center px-2 py-1 border rounded-md gap-x-3">
            <p class="text-sm text-gray-600 capitalize">Showing</p>
            <select
              class="w-[60px] px-2 py-1 text-sm border text-gray-600 focus:ring-gray-100 border-gray-200 rounded-md"
              name="showing_per_page"
              value="10"
              id="showing_per_page"
            >
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
            </select>
          </div>
        </div>
        <H-Paginate :itemsPerPage="6" :totalData="24" />
      </div>
    </div>
    <div v-else>
      <div class="w-full h-[70vh] rounded-md">
        <ClientOnly>
          <LMap ref="map" :zoom="14" :center="[7.0477, 38.4958]">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              layer-type="base"
              name="OpenStreetMap"
            />
            <LMarker
              class="bg-white w-52"
              v-for="(markedLocation, index) in markedLocations"
              :key="index"
              :lat-lng="markedLocation"
            >
              <LIcon
                name="Hey"
                :class="'custom-div-icon'"
                :icon-size="[40, 40]"
                icon-url="/icons/location_marker.svg"
              ></LIcon>
              <LPopup class="w-48 bg-white">
                <div class="w-full h-full">
                  <div class="flex items-center justify-between">
                    <div
                      class="flex flex-col justify-center cursor-pointer gap-y-0"
                      @click="$router.push('/app/centers/1')"
                    >
                      <p class="!text-sm text-gray-950 py-0 !my-0">
                        Hanan's Center
                      </p>
                      <p class="text-xs text-gray-400 !mt-1.5 !mb-0">
                        3 Members
                      </p>
                    </div>
                    <p
                      class="px-2 py-1 text-xs justify-self-end bg-primary-50 text-[#012d6a] rounded-2xl"
                    >
                      20%
                      <Icon
                        class="text-xl font-medium text-green-600"
                        name="ic:baseline-trending-down"
                      />
                    </p>
                  </div>
                  <p class="!my-1 flex items-center gap-x-2 text-gray-400">
                    <Icon name="uil:calendar-alt" class="text-base" />
                    12/01/2024
                  </p>
                </div>
              </LPopup>
            </LMarker>
          </LMap>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
