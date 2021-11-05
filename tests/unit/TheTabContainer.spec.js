import { shallowMount } from '@vue/test-utils'
import TheTabContainer from '@/components/tab/TheTabContainer.vue'

describe('TheTabContainer.vue', () => {
  let wrapper;
  TheTabContainer.methods.filePath = jest.fn();
  
  beforeEach(() => {
    wrapper = shallowMount(TheTabContainer)
  })

  it('showTerm is false by default', () => {
    
    expect(wrapper.vm.showTerm).toBe(false)
  })

  it('showText is true by default', () => {
    
    expect(wrapper.vm.showText).toBe(true)
  })
  
})