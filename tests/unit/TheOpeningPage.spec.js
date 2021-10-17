import { shallowMount } from '@vue/test-utils'
import TheOpeningPage from '@/components/TheOpeningPage.vue'

describe('TheOpeningPage.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(TheOpeningPage)
  })

  it('has a button', () => {
    // const wrapper = shallowMount(TheOpeningPage)

    expect(wrapper.vm.contains('button')).toBe(true)
  })

  it('rootDir is empty string by default', () => {
    // const wrapper = shallowMount(TheOpeningPage)
    expect(wrapper.vm.rootDir).toBe('')
  })

  it('rootName is empty string by default', () => {
    // const wrapper = shallowMount(TheOpeningPage)
    expect(wrapper.vm.rootName).toBe('')
  })
})