<template>
  <canvas class="chart-container mb-4" id="barChart" width="25" height="25"></canvas>
  <div class="columns">
    <div class="column">
      <canvas class="chart-container mb-4" id="ageChart" width="25" height="25"></canvas>
    </div>
    <div class="column">
      <canvas class="chart-container mb-4" id="trestbpsChart" width="25" height="25"></canvas>
      <canvas class="chart-container mb-4" id="cholChart" width="25" height="25"></canvas>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Chart, registerables } from 'chart.js'

import { barChart, ageChart, trestbpsChart, cholChart } from '../utils/chartData'

export default {
  setup() {
    return {
    }
  },
  name: 'DiagnosisCharts',
  methods: {
    renderChart() {
      Chart.register(...registerables)

      const barCtx = document.getElementById('barChart').getContext('2d')
      const ageCtx = document.getElementById('ageChart').getContext('2d')
      const trestbpsCtx = document.getElementById('trestbpsChart').getContext('2d')
      const cholCtx = document.getElementById('cholChart').getContext('2d')

      new Chart(barCtx, barChart(this.attributes))
      new Chart(ageCtx, ageChart(this.attributes))
      new Chart(trestbpsCtx, trestbpsChart(this.attributes))
      new Chart(cholCtx, cholChart(this.attributes))
    }
  },
  computed: {
    ...mapState(['attributes'])
  },
  mounted () {
    this.renderChart()
  }
}
</script>

<style>
.chart-container {
  position: relative;
  min-height: auto;
  width: 100%;
  height: 100%;
  max-height: 1000;
  max-width: 1000;
}

</style>