import { shallowMount } from '@vue/test-utils'
import TheTabContainer from '@/components/tab/TheTabContainer.vue'

describe('TheTabContainer.vue', () => {
  let wrapper;
  TheTabContainer.methods.filePath = jest.fn();
  
  beforeEach(() => {
    wrapper = shallowMount(TheTabContainer)
  })

  test('that showTerm is false by default', () => {
    
    expect(wrapper.vm.showTerm).toBe(false)
  })

  test('that showText is true by default', () => {
    
    expect(wrapper.vm.showText).toBe(true)
  })

  test('that clicking the toggle runs setDisplay and changes properties showTerm and showText', async () => {
    await wrapper.find('span').trigger('click')
    expect(wrapper.vm.showTerm).toBe(true)
    expect(wrapper.vm.showText).toBe(false)
  })
  
})