import { Wrapper } from '@vue/test-utils'

// A simple helper to find elements by a data-qa attribute in vue-test-utils wrappers
Wrapper.prototype.findQa = function (value) {
  return this.find(`[data-qa="${value}"]`)
}

Wrapper.prototype.findAllQa = function (value) {
  return this.findAll(`[data-qa="${value}"]`)
}
