<script setup>
import VueApexCharts from "vue3-apexcharts";

definePageMeta({
  layout: "app",
});

// Dummy Chart options
const lineOptions = ref({
  chart: {
    height: 350,
    type: "area",
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#247BA0"],
  series: [
    {
      name: "SCORE",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 5.5, 6.4, 7.7, 8.9],
    },
  ],
  stroke: {
    width: [4, 4],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  xaxis: {
    categories: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  },
  yaxis: [
    {
      opposite: false,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#247BA0",
      },
      labels: {
        style: {
          colors: "#247BA0",
        },
      },
      title: {
        text: "SCORE",
        style: {
          color: "#247BA0",
        },
      },
    },
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
  },
  legend: {
    horizontalAlign: "left",
    verticalAlign: "top",
    offsetX: 40,
  },
});

const showEditModal = ref(false);
const showAccessModal = ref(false);
</script>

<template>
  <Centers-EditModal v-model="showEditModal" />
  <Centers-AssessModal v-model="showAccessModal" />
  <div class="w-full min-h-screen px-10 py-6 space-y-8 bg-white rounded-md">
    <div class="flex justify-end gap-x-4">
      <button
        class="!text-gray-600 !bg-white !border !shadow-none btn-primary hover:!bg-gray-50"
        @click="showEditModal = true"
      >
        <Icon name="iconoir:edit" />
        <span>Edit Profile</span>
      </button>
      <button class="btn-primary" @click="showAccessModal = true">
        <Icon name="mdi:question-mark-circle-outline" /> <span>Assess Now</span>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-x-8">
      <Centers-Inserted-Data hasChild />
      <Centers-FollowUpQ />

      <div class="space-y-4">
        <VueApexCharts
          type="area"
          :options="lineOptions"
          :series="lineOptions.series"
          class="w-full mt-10"
        />
        <div class="space-y-6">
          <div class="flex justify-between">
            <h1 class="form-title">Center Progress</h1>
            <Icon
              name="heroicons-outline:sort-ascending"
              class="text-3xl text-primary-950"
            />
          </div>
          <div class="space-y-4">
            <Centers-Progress v-for="i in 3" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
