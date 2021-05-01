<template>
  <section class="section">
    <div v-if="!loading" class="container">
      <h1 class="title">Diagnosis</h1>
      <div class="content">
        <h2 v-if="prediction === 1" class="has-text-danger">You may have heart disease</h2>
        <h2 v-if="prediction === 0" class="has-text-success" >You are unlikely to have heart disease</h2>
        <h2 v-if="prediction === null" class="has-text-info" >Fill out the form to get evaluated: <router-link  to="/">Go to form.</router-link></h2>
        <diagnosis-charts />
      </div>
      <div class="table-container">
        <table class="table is-narrow is-bordered is-striped is-hoverable">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age(years)</th>
              <th>Sex</th>
              <th>Chest Pain</th>
              <th>Resting Blood Pressure (mm Hg)</th>
              <th>Cholesterol (mg/dl)</th>
              <th>Fasting Blood Sugar</th>
              <th>Resting Electrocardiography Results</th>
              <th>Max Heart Rate (bpm)</th>
              <th>Exercise Angina</th>
              <th>ST segment decrease during exercise</th>
              <th>ST slope</th>
              <th>Major Blood vessels</th>
              <th>Blood flow</th>
              <th>Heart Disease</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="prediction !== null" >
              <th>You</th>
              <td>{{ this.attributes.age }}</td>
              <td>{{ sex_options[this.attributes.sex].text }}</td>
              <td>{{ cp_options[this.attributes.cp].text.substring(3) }}</td>
              <td>{{ this.attributes.trestbps }}</td>
              <td>{{ this.attributes.chol }}</td>
              <td>{{ fbs_options[this.attributes.fbs].text }}</td>
              <td>{{ restecg_options[this.attributes.restecg].text }}</td>
              <td>{{ this.attributes.thalach }}</td>
              <td>{{ exang_options[this.attributes.exang].text }}</td>
              <td>{{ this.attributes.oldpeak }}</td>
              <td>{{ slope_options[this.attributes.slope].text }}</td>
              <td>{{ this.attributes.ca }}</td>
              <td>{{ thal_options[this.attributes.thal].text }}</td>
              <td>{{ prediction ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
              <th>Avg(Positive)</th>
              <td>52</td>
              <td>Split</td>
              <td>Atypical Angina</td>
              <td>129.3</td>
              <td>242.2</td>
              <td>No</td>
              <td>Normal</td>
              <td>158.5</td>
              <td>No</td>
              <td>0.58</td>
              <td>Ascending</td>
              <td>0</td>
              <td>Normal Blood Flow</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th>Avg(Negative)</th>
              <td>56</td>
              <td>Male</td>
              <td>Asymptomatic</td>
              <td>134.4</td>
              <td>251.1</td>
              <td>No</td>
              <td>Probable or definite left ventricular hypertrophy</td>
              <td>139.1</td>
              <td>Split</td>
              <td>1.59</td>
              <td>Flat</td>
              <td>1</td>
              <td>Reversible Defect</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><router-link to="https://www.kaggle.com/ronitf/heart-disease-uci">Data set</router-link> from Kaggle.</p>
    </div>
    <div class="content has-text-centered">
      <p v-if="loading"><loading-spinner/></p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import { cp_options, restecg_options, slope_options, ca_options, thal_options, sex_options, fbs_options, exang_options } from '../utils/options'

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
      exang_options
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