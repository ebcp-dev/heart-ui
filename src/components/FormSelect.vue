<template>
  <label class="label">{{ selectLabel }}</label>
  <div :class="{ 'is-danger': errorMsg }" class="select is-small mb-2">
    <select v-model="value" >
      <option disabled :selected="true" value=null>Select {{ selectLabel }}</option>
      <option v-for="option in selectOptions" v-bind:value="option.value" 
      v-bind:key="option.value" >
      {{ option.text }}
      </option>
    </select>
  </div>
  <p v-if="errorMsg" class="help is-danger"> {{ errorMsg }}</p>
  <article v-if="selectMessage" class="message is-small is-info">
    <div class="message-body">{{ selectMessage }}</div>
  </article>
</template>

<script>
export default {
  name: 'FormSelect',
  props: ['modelValue', 'selectLabel', 'selectOptions',  'selectMessage', 'errorMsg'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  mounted() {
  }
}
</script>