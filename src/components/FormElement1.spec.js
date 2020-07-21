import { mount } from '@vue/test-utils'

import FormElement from './FormElement.vue'

let wrapper

describe('Form Element', () => {
  beforeEach(() => {
    wrapper = mount(FormElement)
  })

  describe('default data', () => {
    it('should have empty inputModel', () => {
      expect(wrapper.vm.inputModel).toBe('')
    })

    it('should have showSuccess as false', () => {
      expect(wrapper.vm.showSuccess).toBe(false)
    })

    it('should have hasValue return false', () => {
      expect(wrapper.vm.hasValue).toBe(false)
    })
  })

  describe('when the form is submitted', () => {
    beforeEach(() => {
      wrapper.vm.submitForm()
    })

    it('should have showSuccess as true', () => {
      expect(wrapper.vm.showSuccess).toBe(true)
    })
  })
})
