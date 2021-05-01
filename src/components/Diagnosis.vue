<template>
  <section class="section is-size-7-mobile is-size-7-tablet">
    <div v-if="!loading" class="container">
      <div class="content">
        <h1 class="title">Diagnosis</h1>
        <h2 v-if="prediction === 1" class="has-text-danger">You may have heart disease</h2>
        <h2 v-if="prediction === 0" class="has-text-success" >You are unlikely to have heart disease</h2>
        <h2 v-if="prediction === null" class="has-text-info" >Fill out the form to get evaluated: <router-link  to="/">Go to form.</router-link></h2>
        <p>Data definition:</p>
        <ol>
          <li>age in years (continuous)</li>
          <li>sex (Binary): 1= Male, 0= Female </li>
          <li>(cp) chest pain type (ordinal):Value 0: asymptomatic, Value 1: atypical angina, Value 2: non-anginal pain, Value 3: typical angina</li>
          <li>(trestbps) resting blood pressure (in mm Hg on admission to the hospital) (continuous)</li>
          <li>(chol) serum cholesterol in mg/dl (continuous)</li>
          <li>(fbs) fasting blood sugar > 120 mg/dl(Binary)(1 = true; 0 = false)</li>
          <li>(restecg) resting electrocardiography results(ordinal 0, 1, 2)</li>
          <li>(thalach) maximum heart rate achieved (continuous)</li>
          <li>(exang) exercise induced angina (binary) (1 = yes; 0 = no)</li>
          <li>(oldpeak) ST depression induced by exercise relative to rest (continuous)</li>
          <li>(slope) of the peak exercise ST segment (ordinal) (Value 1: up sloping , Value 2: flat , Value 3: down sloping )</li>
          <li>(ca) number of major blodd vessels (0–3, ordinal) colored by fluoroscopy</li>
          <li>(thal) maximum heart rate achieved (ordinal) (0 = none; 1 = fixed defect; 2 = normal; 3 = reversible defect)</li>
        </ol>
        <p>Data set from kaggle: <a href="https://www.kaggle.com/ronitf/heart-disease-uci">Heart Disease UCI</a></p>
      </div>
      <div class="table-container">
        <table class="table is-narrow is-bordered is-striped is-hoverable">
          <thead>
            <tr>
              <th>Patient</th>
              <th>age</th>
              <th>sex</th>
              <th>cp</th>
              <th>trestbps</th>
              <th>chol</th>
              <th>fbs</th>
              <th>restecg</th>
              <th>thalach</th>
              <th>exang</th>
              <th>oldpeak</th>
              <th>slope</th>
              <th>ca</th>
              <th>thal</th>
              <th>Heart Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="prediction !== null" >
              <th>You</th>
              <td>{{ this.attributes.age }}</td>
              <td>{{ this.attributes.sex }}</td>
              <td>{{ this.attributes.cp }}</td>
              <td>{{ this.attributes.trestbps }}</td>
              <td>{{ this.attributes.chol }}</td>
              <td>{{ this.attributes.fbs }}</td>
              <td>{{ this.attributes.restecg }}</td>
              <td>{{ this.attributes.thalach }}</td>
              <td>{{ this.attributes.exang }}</td>
              <td>{{ this.attributes.oldpeak }}</td>
              <td>{{ this.attributes.slope }}</td>
              <td>{{ this.attributes.ca }}</td>
              <td>{{ this.attributes.thal }}</td>
              <td>{{ prediction ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
              <th>Avg(Positive)</th>
              <td>{{ positiveAvg.age }}</td>
              <td>{{ positiveAvg.sex }}</td>
              <td>{{ positiveAvg.cp }}</td>
              <td>{{ positiveAvg.trestbps }}</td>
              <td>{{ positiveAvg.chol }}</td>
              <td>{{ positiveAvg.fbs }}</td>
              <td>{{ positiveAvg.restecg }}</td>
              <td>{{ positiveAvg.thalach }}</td>
              <td>{{ positiveAvg.exang }}</td>
              <td>{{ positiveAvg.oldpeak }}</td>
              <td>{{ positiveAvg.slope }}</td>
              <td>{{ positiveAvg.ca }}</td>
              <td>{{ positiveAvg.thal }}</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Avg(Negative)</th>
              <td>{{ negativeAvg.age }}</td>
              <td>{{ negativeAvg.sex }}</td>
              <td>{{ negativeAvg.cp }}</td>
              <td>{{ negativeAvg.trestbps }}</td>
              <td>{{ negativeAvg.chol }}</td>
              <td>{{ negativeAvg.fbs }}</td>
              <td>{{ negativeAvg.restecg }}</td>
              <td>{{ negativeAvg.thalach }}</td>
              <td>{{ negativeAvg.exang }}</td>
              <td>{{ negativeAvg.oldpeak }}</td>
              <td>{{ negativeAvg.slope }}</td>
              <td>{{ negativeAvg.ca }}</td>
              <td>{{ negativeAvg.thal }}</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <diagnosis-charts />
    </div>
    <div class="content has-text-centered">
      <p v-if="loading"><loading-spinner/></p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import { cp_options, restecg_options, slope_options, ca_options, thal_options, sex_options, fbs_options, exang_options } from '../utils/options'
import { positiveAvg, negativeAvg} from '../utils/analysisData'

import DiagnosisCharts from './DiagnosisCharts.vue'
import LoadingSpinner from './LoadingSpinner.vue'

export default {
  setup() {
    return {
      cp_options,
      restecg_options,
      slope_options,
      ca_options,
      thal_options,
      sex_options,
      fbs_options,
      exang_options,
      positiveAvg,
      negativeAvg
    }
  },
  components: { DiagnosisCharts, LoadingSpinner },
  name: 'Diagnosis',
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapState(['attributes', 'prediction'])
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
     }, 200)
  }
}
</script>