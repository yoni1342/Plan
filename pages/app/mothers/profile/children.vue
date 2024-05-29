<script setup>
import VueApexCharts from "vue3-apexcharts";

definePageMeta({
  layout: "app",
});

// Dummy Chart options
const columnOptions = ref({
  series: [
    {
      name: "Social",
      data: [44, 55, 41, 67, 22, 43],
      color: "#D2B0FF",
    },
    {
      name: "Language",
      data: [13, 23, 20, 8, 13, 27],
      color: "#88FFE0",
    },
    {
      name: "Cognitive",
      data: [11, 17, 15, 15, 21, 14],
      color: "#AFFF9D",
    },
    {
      name: "Movement",
      data: [21, 7, 25, 13, 22, 8],
      color: "#FFFDA9",
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
    ],
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
});

const tabs = ref([
  {
    name: "Social Emotional",
    num: "1/3",
  },
  {
    name: "Expressive Language",
    num: "1/3",
  },
  {
    name: "Cognitive",
    num: "1/3",
  },
  {
    name: "Gross Motor",
    num: "1/3",
  },
  {
    name: "Fine Motor",
    num: "1/3",
  },
]);

const openAssess = ref(false);
const editProfile = ref(false);
</script>

<template>
  <ModalsEditChildren v-model="openAssess" />
  <ModalsUpdateChildren v-model="editProfile" />
  <div
    class="grid w-full min-h-screen grid-cols-12 px-10 py-8 bg-white rounded-md"
  >
    <div class="col-span-7 space-y-8">
      <div class="flex justify-between">
        <div class="flex gap-x-4">
          <img
            class="object-cover object-center w-16 h-16 rounded-full"
            src="/images/temp/mother2.jpg"
            alt="mother photo"
          />
          <div>
            <p class="text-xl text-gray-900">Meron Sisay Abebe</p>
            <p class="text-sm text-gray-500">23 Month Old</p>
          </div>
        </div>

        <button class="shadow-none h-fit btn-gray-outline !px-4">
          <Icon class="text-xl" name="lucide:circle-dot-dashed" />
          <span> 6 Months</span> <Icon name="tabler:selector" />
        </button>
      </div>
      <HTabs :tabs="tabs" tabListClass="!space-x-5 justify-between">
        <template #tab="{ tabData }"
          ><div class="flex items-center text-base leading-6 gap-x-2">
            <span
              class="text-gray-600"
              :class="tabData.isActive ? 'text-primary-500' : ''"
              >{{ tabData.tab.name }}</span
            ><span
              class="h-full px-2 text-sm text-primary-950 bg-primary-100 rounded-3xl"
              >{{ tabData.tab.num }}</span
            >
          </div></template
        >
      </HTabs>

      <div class="w-fit px-4 space-y-4 h-[620px] overflow-y-auto">
        <CardsAssessChildData v-for="i in 3" :key="i" />
      </div>
    </div>

    <div class="col-span-5 space-y-8">
      <div class="flex justify-end gap-x-4">
        <button
          @click="editProfile = true"
          class="text-gray-600 bg-white border shadow-none btn-primary hover:bg-gray-50"
        >
          <Icon name="iconoir:edit" />
          <span>Edit Profile</span>
        </button>
        <button @click="openAssess = true" class="btn-primary">
          <Icon name="mdi:question-mark-circle-outline" />
          <span>Assess Now</span>
        </button>
      </div>
      <div class="flex justify-end gap-x-4">
        <button class="shadow-none h-fit btn-gray-outline !px-4">
          <span> Monthly</span>
          <Icon class="text-xl" name="mi:chevron-down" />
        </button>
      </div>
      <div class="h-[650px] px-4 overflow-y-auto">
        <VueApexCharts
          type="bar"
          :options="columnOptions"
          :series="columnOptions.series"
          class="w-full mt-10 h-1/2"
        />

        <div class="space-y-6">
          <h1 class="form-title">Progress</h1>

          <div class="space-y-4">
            <Mother-Progress :isNotChild="false" v-for="i in 3" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
