<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const tableHeader = ref([
  {
    text: "#",
    value: "profile_image",
  },
  {
    text: "Full Name",
    value: "name",
  },
  {
    text: "Email",
    value: "email",
  },
  {
    text: "Role",
    value: "role",
  },
  {
    text: "Status",
    value: "status",
  },
  {
    text: "Created at",
    value: "created_at",
  },
  {
    text: "Action",
    value: "action",
  },
]);
// Dummy table data
const tableData = ref([
  {
    first_name: "Samson",
    middle_name: "Luqas",
    last_name: "Ali",
    email: "samson@gmail.com",
    role: "Data Encoder",
    status: "Revoked",
    created_at: "2022-01-01 00:00:00",
    profile_image: "/images/profile.jpg",
  },
  {
    first_name: "Abebe",
    middle_name: "",
    last_name: "Kebede",
    email: "abebe@gmail.com",
    role: "Administrator",
    status: "Active",
    created_at: "2022-01-01 00:00:00",
    profile_image: "/images/profile.jpg",
  },
]);

/**--------------- Modal Variables ------------------*/
const showReactivateModal = ref(false);
const showRevokeModal = ref(false);
const showAddModal = ref(false);

const revokeProps = ref({
  headerTitle: "Revoke Access",
  headerIcon: "material-symbols:lock-outline",
  bodyTitle: "Are you sure you want to revoke access?",
  bodyDescription:
    "Revoking access to this user will result on the  user unable to login, and do adminstration tasks.",
});

const reactivateProps = ref({
  headerTitle: "Reactivate Access",
  headerIcon: "material-symbols:lock-open-outline",
  bodyTitle: "Are you sure you want to reactivate access?",
  bodyDescription:
    "By confirming access reactivation, the user will regain entry to the system and be able to resume using our services.",
});
</script>

<template>
  <!-- Add Administrator Modal -->
  <Settings-InviteAdministratorModal v-model="showAddModal" />

  <!-- Revoke Access Modal -->
  <Settings-ConfirmationModal
    v-model="showRevokeModal"
    :headerTitle="revokeProps.headerTitle"
    :headerIcon="revokeProps.headerIcon"
    :bodyTitle="revokeProps.bodyTitle"
    :bodyDescription="revokeProps.bodyDescription"
    agreeText="Revoke "
  />

  <!-- Reactivate Access Modal -->
  <Settings-ConfirmationModal
    v-model="showReactivateModal"
    :headerTitle="reactivateProps.headerTitle"
    :headerIcon="reactivateProps.headerIcon"
    :bodyTitle="reactivateProps.bodyTitle"
    :bodyDescription="reactivateProps.bodyDescription"
    agreeText="Reactivate "
  />

  <div class="w-full px-4 py-5 bg-white rounded-md shadow-sm sm:px-6 lg:px-8">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl text-plan-gray-700">2 Administrators</h2>
      <button
        class="btn-primary !bg-primary-500 !w-fit px-3 py-1.5"
        @click="showAddModal = true"
      >
        <Icon name="lucide:user-plus" class="text-lg" />
        <span>Add Administrators</span>
      </button>
    </div>

    <!-- Administrators Table -->
    <H-Table
      :items="tableData"
      :headers="tableHeader"
      :sort="[]"
      :loading="false"
      rowHeadStyle="!bg-plan-gray-100 !capitalize"
      supporterClass="!border-0 !border-t-md mt-5"
      rowStyle="border-b border-b-plan-gray-200"
    >
      <template #profile_image="{ item }">
        <div>
          <img
            :src="item.profile_image"
            class="object-cover w-10 h-10 rounded-full"
            :alt="item.first_name"
          />
        </div>
      </template>
      <template #name="{ item }">
        <p class="text-plan-black-700">
          {{ item.first_name }} {{ item.middle_name }}
          {{ item.last_name }}
        </p>
      </template>
      <template #status="{ item }">
        <p
          class="font-medium"
          :class="[
            item.status === 'Active' ? 'text-green-500' : 'text-red-500',
          ]"
        >
          {{ item.status }}
        </p>
      </template>
      <template #action="{ item }">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton>
              <button>
                <Icon name="tabler:dots" class="text-2xl rotate-90" />
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
              class="absolute right-0 z-10 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-52 ring-1 ring-black/5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem>
                  <button
                    @click="showReactivateModal = true"
                    class="flex items-center w-full px-2 py-2 hover:bg-primary-50 gap-x-2"
                  >
                    <Icon
                      class="text-base"
                      name="material-symbols:lock-open-outline"
                    />
                    <span>Reactivate Access</span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    @click="showRevokeModal = true"
                    class="flex items-center w-full px-2 py-2 text-red-600 hover:bg-primary-50 gap-x-2"
                  >
                    <Icon
                      class="text-base"
                      name="material-symbols:lock-outline"
                    />
                    <span>Revoke Access</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </template>
    </H-Table>
  </div>
</template>
