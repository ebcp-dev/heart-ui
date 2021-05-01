<template>
  <label class="label">{{ radioLabel }}</label>
  <div class="control mb-2">
    <label v-for="option in radioOptions" 
      v-bind:key="option.value" class="radio">
      <input v-model="value" type="radio" v-bind:value="option.value" 
      v-bind:key="option.value">
      {{ option.text }}
    </label>
  </div>
  <p v-if="errorMsg" class="help is-danger"> {{ errorMsg }}</p>
  <article v-if="radioMessage" class="message is-small is-info">
    <div class="message-body">{{ radioMessage }}</div>
  </article>
</template>

<script>
export default {
  name: 'FormRadio',
  props: ['modelValue', 'radioLabel', 'radioOptions',  'radioMessage', 'errorMsg'],
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