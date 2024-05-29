<script setup>
import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from "@vuepic/vue-datepicker";

const date = ref();

// For demo purposes assign range from the current date
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});

definePageMeta({
  layout: "app",
});

// Dummy analytics data
const analytics = ref([
  {
    title: "Total",
    icon: "mdi:account-group",
    value: "0",
    description: "Mothers",
  },
  {
    title: "Total",
    icon: "mdi:account-group",
    value: "0",
    description: " Working Mothers",
  },
  {
    title: "Total",
    icon: "mdi:account-group",
    value: "0",
    description: "Stay at Home Mothers",
  },
]);

// Dummy Chart options
const lineOptions = ref({
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 5.5, 6.4, 7.7, 8.9],
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58, 59, 60, 62, 59],
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
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#FF1654",
      },
      labels: {
        style: {
          colors: "#FF1654",
        },
      },
      title: {
        text: "Series A",
        style: {
          color: "#FF1654",
        },
      },
    },
    {
      opposite: true,
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
        text: "Series B",
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
    horizontalAlign: "right",
    verticalAlign: "top",
    offsetX: 40,
  },
});

const pieOptions = ref({
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
});

const format = (date) => {
  const day1 = date[0].getDate();
  const month1 = date[0].getMonth() + 1;
  const year1 = date[0].getFullYear();

  const day2 = date[1].getDate();
  const month2 = date[1].getMonth() + 1;
  const year2 = date[1].getFullYear();
  return `${day1}/${month1}/${year1} - ${day2}/${month2}/${year2}`;
};
</script>
<template>
  <div
    class="w-full min-h-screen px-4 py-5 bg-white rounded-md sm:px-6 lg:px-8"
  >
    <div>
      <!-- Date Range Filter -->
      <div class="flex items-center justify-end">
        <!-- <H-DatePicker
          name="date"
          class="relative py-2 pl-10 border rounded-md border-primary-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-transparent"
          leading-icon-class="absolute text-xl -translate-y-1/2 left-2 top-1/2"
        /> -->
        <div class="w-fit">
          <VueDatePicker
            v-model="date"
            range
            calendarCellClassName="bg-white"
            :format="format"
            auto-apply
          />
        </div>
      </div>
      <div class="grid grid-cols-6 gap-x-10">
        <!-- Mothers Analytics -->
        <div class="col-span-4">
          <div
            class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Dashboard-Analytic
              v-for="(analytic, index) in analytics"
              :key="index"
              :title="analytic.title"
              :description="analytic.description"
              :icon="analytic.icon"
              :value="analytic.value"
            />
          </div>

          <!-- Line Chart -->
          <div class="flex items-center justify-center p-5 mt-8 shadow">
            <VueApexCharts
              type="line"
              :options="lineOptions"
              class="w-full mt-10"
              :series="lineOptions.series"
            />
          </div>
        </div>

        <!-- Child Analytics -->
        <div class="col-span-2">
          <div
            class="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            <Dashboard-Analytic
              v-for="(analytic, index) in analytics.slice(0, 2)"
              :key="index"
              :title="analytic.title"
              :description="analytic.description"
              :icon="analytic.icon"
              :value="analytic.value"
            />
          </div>

          <!-- Pie Chart -->
          <div class="flex items-center justify-center p-5 mt-8 shadow">
            <VueApexCharts
              type="donut"
              :options="pieOptions.chartOptions"
              :series="pieOptions.series"
              class="w-full mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dp__range_start,
.dp__range_end {
  @apply bg-primary-600 text-white  rounded-full;
}

.dp__range_between {
  @apply bg-primary-100  rounded-full;
}

.dp__button_bottom {
  @apply hidden;
}
</style>
