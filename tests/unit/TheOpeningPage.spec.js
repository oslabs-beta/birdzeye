import { shallowMount } from '@vue/test-utils';
import TheOpeningPage from '@/components/TheOpeningPage.vue';

describe('TheOpeningPage.vue', () => {

  
  TheOpeningPage.methods.setRoot = jest.fn();
  
  
  let wrapper = shallowMount(TheOpeningPage);

  test('that it renders a button for the user to click', () => {
    
    expect(wrapper.html('button')).toBe("<section><button>Open Project</button><img alt=\"birdzeye logo\" src=\"\"></section>")
  })

  test('that rootDir is empty string by default', () => {
    
    expect(wrapper.vm.rootDir).toBe('')
  })

  test('that rootName is empty string by default', () => {
    
    expect(wrapper.vm.rootName).toBe('')
  })
  
  test('that getHomeDirectory takes a file path string and returns the name of the root directory', () => {
    expect(wrapper.vm.getHomeDirectory('/someFolder/rootFolder')).toBe('rootFolder')
  })
})