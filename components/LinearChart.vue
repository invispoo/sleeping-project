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
  data: number[],
  label: string,
  altLabels?: boolean,
}

const props = defineProps<Props>();

const monthDays = () => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr[i] = `${i}`;
  }
  return arr;
}

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const chartData = reactive({
  labels: monthDays(),
  datasets: [{
    data: props.data,
    label: props.label,
    borderColor: `rgb(${randomInteger(0, 256)}, ${randomInteger(0, 256)}, ${randomInteger(0, 256)})`,
    tension: 0.1
  }]
});

const chartOptions = reactive({

  scales: {
    y: {
      ticks: {
        font: {
          family:	"Ubuntu Sans, sans-serif"
        },
        callback: (value) => {
          if (props.altLabels) {
            switch (value) {
              case 0:
                return 'нет';
              case 1:
                return 'может быть';
              case 2:
                return 'часто';
              case 3:
                return 'да';
              default:
                return ''
            }
          }
          else {
            return value;
          }
        }
      },
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          family:	"Ubuntu Sans, sans-serif"
        }
      }
    },
    tooltip: {
      titleFont: {
          family:	"Ubuntu Sans, sans-serif"
      },
      bodyFont: {
          family:	"Ubuntu Sans, sans-serif"
      },
    }
  }
});
</script>