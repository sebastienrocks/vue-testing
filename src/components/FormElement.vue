<template>
  <div>
    <form
      @submit.prevent="submitForm"
      data-qa="form">
      <input
        type="text"
        v-model="inputModel"
        data-qa="form--input" />
      <button
        type="submit"
        :disabled="!hasValue"
        data-qa="form--button">
          Submit
        </button>
    </form>
    <div
      v-if="showSuccess"
      data-qa="form--success">
      Success!
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormElement',
  data() {
    return {
      inputModel: '',
      showSuccess: false
    }
  },
  computed: {
    hasValue: function () {
      return !!this.inputModel.length
    }
  },
  methods: {
    submitForm() {
      this.showSuccess = true
    }
  }
}
</script>
