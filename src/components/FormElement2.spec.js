import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import FormElement from './FormElement.vue'

let wrapper

describe('Form Element', () => {
  beforeEach(() => {
    wrapper = mount(FormElement)
  })

  it('should have a form element', () => {
    expect(wrapper.findQa('form').exists()).toBe(true)
  })

  it('should have an input element', () => {
    expect(wrapper.findQa('form--input').exists()).toBe(true)
  })

  it('should have a button', () => {
    expect(wrapper.findQa('form--button').exists()).toBe(true)
  })

  it('should have a disabled button', () => {
    expect(wrapper.findQa('form--button').attributes('disabled')).toBe('disabled')
  })

  it('should NOT have a success', () => {
    expect(wrapper.findQa('form--success').exists()).toBe(false)
  })

  describe('when the user fills out the form', () => {
    beforeEach(() => {
      wrapper.findQa('form--input').setValue('test')
    })

    it('should NOT have a disabled button', () => {
      expect(wrapper.findQa('form--button').attributes('disabled')).toBe(undefined)
    })

    it('should NOT have a success', () => {
      expect(wrapper.findQa('form--success').exists()).toBe(false)
    })
  })

  describe('when the user submits a valid form', () => {
    beforeEach(async () => {
      wrapper.findQa('form--input').setValue('test')
      await flushPromises()

      wrapper.findQa('form--button').trigger('submit')
      await flushPromises()
    })

    it('should have a success', () => {
      expect(wrapper.findQa('form--success').exists()).toBe(true)
    })
  })
})
