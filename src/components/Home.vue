<template>
  <div class="container p-2">
    <section class="hero welcome">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Heart Predictions.
          </h1>
          <h2 class="subtitle">
            This web application tries to predict whether or not you have heart disease based several medical factors related to your heart.
          </h2>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
                Fill out the form to determine if you are at risk of getting heart disease.
            </p>
          </header>
          <div class="card-content">
            <heart-form />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Analysis
            </p>
          </header>
          <div class="card-content">
            <diagnosis-charts />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Definition
        </p>
      </header>
      <div class="card-content">
        <ol>
          <li>(continuous)age in years</li>
          <li>(binary)sex: 1 = Male, 0 = Female </li>
          <li>(ordinal)(cp) chest pain type: 0 = asymptomatic; 1 = atypical angina; 2 = non-anginal pain; 3 = typical angina</li>
          <li>(continuous)(trestbps) resting blood pressure (in mm Hg on admission to the hospital)</li>
          <li>(continuous)(chol) serum cholesterol in mg/dl</li>
          <li>(binary)(fbs) fasting blood sugar > 120 mg/dl: 1 = true; 0 = false</li>
          <li>(ordinal)(restecg) resting electrocardiography results: 0 = Probable or definite left ventricular hypertrophy; 1 = Normal; 2 = Have ST-T wave abnormality</li>
          <li>(continuous)(thalach) maximum heart rate achieved</li>
          <li>(binary)(exang) exercise induced angina: 1 = yes; 0 = no</li>
          <li>(continuous)(oldpeak) ST depression induced by exercise relative to rest</li>
          <li>(ordinal)(slope) of the peak exercise ST segment: 1: up sloping ; 2: flat ; 3: down sloping</li>
          <li>(ordinal)(ca) number of major blood vessels (0–3) colored by fluoroscopy</li>
          <li>(ordinal)(thal) maximum heart rate achieved: 0 = none; 1 = fixed defect; 2 = normal; 3 = reversible defect</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import DiagnosisCharts from './DiagnosisCharts.vue'
import HeartForm from './HeartForm.vue'

export default {
  name: 'Home',
  components: { HeartForm, DiagnosisCharts },
  data() {
    return {
      loading: false
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>