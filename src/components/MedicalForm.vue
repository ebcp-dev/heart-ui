<template>
  <section class="section">
    <div class="card">
      <form @submit.prevent="sendData" v-if="!loading" class="card-content">
        <h1 class="title">Fill out the form to determine if you are at risk of getting heart disease.</h1>
        <!-- age -->
        <label class="label">Age (years)</label>
        <div class="control">
          <input name="age" v-model.number="form_input.age" :class="{ 'is-danger': v$.form_input.age.$error }" class="input is-small mb-2" type="number" placeholder="Enter age" />
          <p v-if="v$.form_input.age.$error" class="help is-danger">{{ v$.form_input.age.$errors[0].$message }}</p>
        </div>
        <!-- sex -->
        <form-radio v-model="form_input.sex" :errorMsg="v$.form_input.sex.$error ? v$.form_input.sex.$errors[0].$message : false" :radioLabel="'Sex'" :radioOptions="sex_options" />
        <!-- cp -->
        <form-select v-model="form_input.cp" :errorMsg="v$.form_input.cp.$error ? v$.form_input.cp.$errors[0].$message : false" :selectLabel="'Chest Pain Level'" :selectOptions="cp_options" :selectMessage="'Level of chest pain experienced'" />
        <!-- trestbps -->
        <label class="label">Resting Blood Pressure</label>
        <div class="control">
          <input name="trestbps"  
          v-model.number="form_input.trestbps" :class="{ 'is-danger': v$.form_input.trestbps.$error }" class="input is-small mb-2" type="number" min="0" max="999" placeholder="Enter blood pressure" />
        </div>
        <p v-if="v$.form_input.trestbps.$error" class="help is-danger">{{ v$.form_input.trestbps.$errors[0].$message }}</p>
        <article class="message is-small is-info">
          <div class="message-body">Resting blood pressure (mm Hg on admission to the hospital)</div>
        </article>
        <!-- chol -->
        <label class="label">Cholesterol</label>
        <div class="control">
          <input name="chol" v-model.number="form_input.chol" :class="{ 'is-danger': v$.form_input.chol.$error }" class="input is-small mb-2" type="number" min="0" max="999" placeholder="Cholesterol (mg/dl)" />
        </div>
        <p v-if="v$.form_input.chol.$error" class="help is-danger">{{ v$.form_input.chol.$errors[0].$message }}</p>
        <article class="message is-small is-info">
          <div class="message-body">Cholesterol measurement in mg/dl</div>
        </article>
        <!-- fbs -->
        <form-radio v-model="form_input.fbs" :errorMsg="v$.form_input.fbs.$error ? v$.form_input.fbs.$errors[0].$message : false" :radioLabel="'Fasting Blood Sugar'" :radioOptions="fbs_options" :radioMessage="'Fasting blood sugar > 120 mg/dl?'" />
        <!-- restecg -->
        <form-select v-model="form_input.restecg" :errorMsg="v$.form_input.restecg.$error ? v$.form_input.restecg.$errors[0].$message : false" :selectLabel="'Resting Electrocardiography Results'" :selectOptions="restecg_options" :selectMessage="'Resting electrocardiographic measurement (normal, having ST-T wave abnormality, showing probable or definite left ventricular hypertrophy by Estes\' criteria)'" />
        <!-- thalach -->
        <label class="label">Max Heart Rate</label>
        <div class="control">
          <input name="thalach" v-model.number="form_input.thalach" :class="{ 'is-danger': v$.form_input.thalach.$error }" class="input is-small mb-2" type="number" min="0" max="999" placeholder="Heart rate" />
        </div>
        <p v-if="v$.form_input.thalach.$error" class="help is-danger"> {{ v$.form_input.thalach.$errors[0].$message }}</p>
        <article class="message is-small is-info">
          <div class="message-body">Maximum heart rate achieved</div>
        </article>
        <!-- exang -->
        <form-radio v-model="form_input.exang" :errorMsg="v$.form_input.exang.$error ? v$.form_input.exang.$errors[0].$message : false" :radioLabel="'Exercise Induced Angina'" :radioOptions="exang_options" :radioMessage="'Chest pain during exercise'" />
        <!-- oldpeak -->
        <label class="label">ST Depression</label>
        <div class="control">
          <input name="oldpeak" v-model.number="form_input.oldpeak" class="input is-small mb-2" type="number" step="0.1" min="0" max="10" placeholder="Enter value" />
        </div>
        <p v-if="v$.form_input.oldpeak.$error" class="help is-danger"> {{ v$.form_input.oldpeak.$errors[0].$message }}</p>
        <article class="message is-small is-info">
          <div class="message-body">Decrease of the ST segment during exercise compared to rest.</div>
        </article>
        <!-- slope -->
        <form-select v-model="form_input.slope" :errorMsg="v$.form_input.slope.$error ? v$.form_input.slope.$errors[0].$message : false" :selectLabel="'ST segment slope'" :selectOptions="slope_options" :selectMessage="'Slope of the peak exercise ST segment (upsloping, flat, downsloping)'" />
        <!-- ca -->
        <form-select v-model="form_input.ca" :errorMsg="v$.form_input.ca.$error ? v$.form_input.ca.$errors[0].$message : false" :selectLabel="'Major blood vessels'" :selectOptions="ca_options" :selectMessage="'Number of major vessels (0–3) colored by fluoroscopy'" />
        <!-- thal -->
        <form-select v-model="form_input.thal" :errorMsg="v$.form_input.thal.$error ? v$.form_input.thal.$errors[0].$message : false" :selectLabel="'Blood Flow'" :selectOptions="thal_options" :selectMessage="'Results of blood flow observed via radioactive dye. Fixed defect - no blood flow in some parts of the heart. Reversible defect - abnormal blood flow is observed.'" />
        <button class="button is-link">Submit</button>
        <!-- error message -->
        <article v-if="errors.length" class="message is-danger">
          <div class="message-body mt-2">{{ errors }}</div>
        </article>
      </form>
      <div v-else class="content has-text-centered">
        <loading-spinner />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, minValue, maxValue, maxLength } from '@vuelidate/validators'
import store from '../store'

import { cp_options, restecg_options, slope_options, ca_options, thal_options, sex_options, fbs_options, exang_options } from '../utils/options'

import LoadingSpinner from './LoadingSpinner.vue'
import FormSelect from './FormSelect.vue'
import FormRadio from './FormRadio.vue'

const server = import.meta.env.DEV ? import.meta.env.VITE_DEV_SERVER : import.meta.env.VITE_PROD_SERVER

export default {
  setup() {
    return {
      v$: useVuelidate(),
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
  components: { LoadingSpinner, FormSelect, FormRadio },
  name: 'MedicalForm',
  data() {
    return {
      form_input: {
        age: 53,
        sex: 1,
        cp: 1,
        trestbps: 129,
        chol: 252,
        fbs: 0,
        restecg: 1,
        thalach: 160,
        exang: 0,
        oldpeak: 1,
        slope: 2,
        ca: 0,
        thal: 3
      },
      loading: true,
      errors: ''
    }
  },
  validations() {
    return {
      form_input: {
        age: {
          required,
          minValue: minValue(0),
          maxLength: maxLength(3)
        },
        sex: {
          required
        },
        cp: {
          required
        },
        trestbps: {
          required,
          minValue: minValue(0),
          maxLength: maxLength(3)
        },
        chol: {
          required,
          minValue: minValue(0),
          maxLength: maxLength(3)
        },
        fbs: {
          required
        },
        restecg: {
          required
        },
        thalach: {
          required,
          minValue: minValue(0),
          maxLength: maxLength(3)
        },
        exang: {
          required
        },
        oldpeak: {
          required,
          minValue: minValue(0),
          maxValue: maxValue(10),
          maxLength: maxLength(3)
        },
        slope: {
          required
        },
        ca: {
          required
        },
        thal: {
          required
        }
      }
    }
  },
  computed: {
    ...mapState(['attributes'])
  },
  methods: {
    ...mapActions(['saveAttributes', 'savePrediction']),
    validateValue(value) {
      if (!value) {
        return 'This data is required'
      }
      return true
    },
    sendData() {
      this.v$.$validate()
      if (this.v$.$error) {
        this.errors = 'Submission has errors.'
      } else {
        this.saveAttributes(this.form_input)
        fetch(`${server}/api`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(store.state.attributes),
        })
        .then(response => response.json())
        .then(data => {
          this.savePrediction(data.prediction[0])
        })
        .then(() => {
          this.$router.push('/diagnosis')
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      }
    }
  },
  mounted() {
    setTimeout(() => {  
      this.loading = false
     }, 200)
  }
}
</script>