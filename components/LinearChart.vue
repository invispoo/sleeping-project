<template>
  <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

interface Props {
  labels: string[],
  data: number[],
  label: string,
  color: string
}

const props = defineProps<Props>();

const chartData = reactive({
  labels: props.labels,
  datasets: [{
    data: props.data,
    label: props.label,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
});

const chartOptions = reactive({
  responsive: true
});
</script>

<style scoped>

</style>