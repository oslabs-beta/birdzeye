import { shallowMount } from '@vue/test-utils';
import TheOpeningPage from '@/components/TheOpeningPage.vue';

// ipc.on in mounted() is not being recognized in tests and is messing up the tests in this file
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