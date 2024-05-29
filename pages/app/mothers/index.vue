<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

definePageMeta({
  layout: "app",
});

const tabs = ref([
  {
    name: "Working Mothers",
    icon: "mdi:mother-nurse",
  },
  {
    name: "Care Givers",
    icon: "healthicons:child-care",
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
    text: "Age",
    value: "age",
  },
  {
    text: "Occupation",
    value: "occupation",
  },
  {
    text: "Martial Status",
    value: "martial_status",
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

const tableData = ref([
  {
    id: 1,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Active",
  },
  {
    id: 2,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother2.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Draft",
  },
  {
    id: 3,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother3.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Active",
  },
  {
    id: 1,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Active",
  },
  {
    id: 2,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother2.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Draft",
  },
  {
    id: 3,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother3.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 25,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Draft",
  },
  {
    id: 1,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 44,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Active",
  },
  {
    id: 2,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother2.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 32,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Draft",
  },
  {
    id: 3,
    name: {
      first: "Abebe",
      last: "Kebede",
      no_children: 2,
      percent: 17.8,
      image: "/images/temp/mother3.jpg",
    },
    address: {
      address: "24123 Bode Estates, West Wilber 76142",
      phone_no: "+251910780819",
    },
    age: 19,
    occupation: "HR Officer",
    martial_status: "Single",
    last_updated: "2 days ago",
    status: "Active",
  },
]);

const sort = ref([
  {
    age: "asc",
  },
]);

const openAssess = ref(false);
const openEdit = ref(false);
</script>
<template>
  <Modals-AssessWorkingMother v-model="openAssess" />
  <ModalsUpdateProfile v-model="openEdit" />
  <div class="w-full h-[939px] px-6 py-8 space-y-2 bg-white rounded-md">
    <div
      class="flex flex-col xl:justify-between xl:items-center gap-y-4 xl:flex-row"
    >
      <H-Tabs :tabs="tabs" tab-text-class="font-medium" />
      <div class="flex items-center gap-x-4">
        <H-TextField
          name="search_mothers"
          leading-icon="uil:search"
          trailing-icon="tabler:adjustments-filled"
          placeholder="Search..."
          class="px-2 py-3 border !border-gray-200"
          icon-leading-class="text-kena-gray-300"
        />

        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton>
              <div class="!py-3 btn-primary">
                <Icon name="mingcute:user-add-fill" /><span class="truncate"
                  >Register Mothers</span
                >
                <icon name="mdi:chevron-down" />
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
              class="absolute right-0 z-50 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-60 ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1 hover:bg-primary-900 hover:text-white">
                <MenuItem v-slot="{ active }">
                  <button
                    @click="
                      $router.push('/app/mothers/register/working-mother')
                    "
                    class="px-2 py-3 space-x-2 text-center"
                  >
                    <Icon name="mdi:mother-nurse" />
                    <span>Working Mother</span>
                  </button>
                </MenuItem>
              </div>
              <div class="px-1 py-1 hover:bg-primary-900 hover:text-white">
                <MenuItem v-slot="{ active }">
                  <button
                    @click="$router.push('/app/mothers/register/care-givers')"
                    class="px-2 py-3 space-x-2 text-center"
                  >
                    <Icon name="healthicons:child-care" />
                    <span>Care Givers</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>

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
          <img
            class="object-cover object-center w-10 h-10 rounded-full"
            :src="item.name.image"
            alt=""
          />
          <div>
            <p class="!text-sm text-gray-950 truncate">
              {{ item.name.first }} {{ item.name.last }}
            </p>
            <p class="text-xs text-gray-400 truncate">
              {{ item.name.no_children }} Children
            </p>
          </div>
          <p
            class="px-2 py-1 text-xs justify-self-end bg-primary-50 text-[#012d6a] rounded-2xl"
          >
            {{ item.name.percent }}%
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
      <template #action="{ item }">
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
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="$router.push('/app/mothers/profile/working')"
                      class="px-2 py-2 space-x-4 text-base text-center"
                    >
                      <Icon class="text-xl" name="ph:user-square" />
                      <span>View Profile</span>
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1 hover:bg-primary-50">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="openAssess = true"
                      class="px-2 py-2 space-x-4 text-base text-center"
                    >
                      <Icon
                        class="text-xl"
                        name="mdi:question-mark-circle-outline"
                      />
                      <span>Assess Now</span>
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1 hover:bg-primary-50">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="openEdit = true"
                      class="px-2 py-2 space-x-4 text-base text-center"
                    >
                      <Icon class="text-xl" name="iconoir:edit" />
                      <span>Edit Profile</span>
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1 hover:bg-primary-50">
                  <MenuItem v-slot="{ active }">
                    <button class="px-2 py-2 space-x-4 text-base text-center">
                      <Icon class="text-xl" name="ph:trash-bold" />
                      <span>Delete Mother</span>
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
</template>
