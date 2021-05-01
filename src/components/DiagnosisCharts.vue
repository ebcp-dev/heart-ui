<template>
  <div class="container">
    <canvas id="diag-chart"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js'

import planetChartData from '../utils/chartData'

export default {
  setup() {
    return {

    }
  },
  // extends: Bar,
  name: 'DiagnosisCharts',
  data() {
    return {
      chart_data: planetChartData
    }
  },
  mounted () {
    // const ctx = document.getElementById('diag-chart')
    // new Chart(ctx, this.chart_data)
  }
}
</script>

<style>

</style>