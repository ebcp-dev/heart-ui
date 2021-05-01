<template>
  <medical-form />
</template>

<script>
import MedicalForm from './MedicalForm.vue'

export default {
  name: 'Home',
  components: { MedicalForm },
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