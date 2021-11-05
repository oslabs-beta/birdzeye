import { shallowMount } from '@vue/test-utils'
import TheTabContainer from '@/components/tab/TheTabContainer.vue'

describe('TheTabContainer.vue', () => {
  let wrapper;
  TheTabContainer.methods.filePath = jest.fn();
  beforeEach(() => {
    wrapper = shallowMount(TheTabContainer)
  })

  it('showTerm is false by default', () => {
    // const wrapper = shallowMount(TheTabContainer)
    expect(wrapper.vm.showTerm).toBe(false)
  })

  it('showText is true by default', () => {
    // const wrapper = shallowMount(TheTabContainer)
    expect(wrapper.vm.showText).toBe(true)
  })
})