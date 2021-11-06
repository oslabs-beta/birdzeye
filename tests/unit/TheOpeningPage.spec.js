import { shallowMount } from '@vue/test-utils';
import TheOpeningPage from '@/components/TheOpeningPage.vue';

describe('TheOpeningPage.vue', () => {
  TheOpeningPage.methods.setRoot = jest.fn()
  let wrapper = shallowMount(TheOpeningPage);

  it('has a button', () => {
    expect(wrapper.html('button')).toBe("<section><button>Open Project</button><img alt=\"birdzeye logo\" src=\"\"></section>")
  })

  it('rootDir is empty string by default', () => {
    expect(wrapper.vm.rootDir).toBe('')
  })

  it('rootName is empty string by default', () => {
    expect(wrapper.vm.rootName).toBe('')
  })
})