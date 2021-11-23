import { shallowMount } from '@vue/test-utils';
import TheSimulatorContainer from '@/components/simulator/TheSimulatorContainer'

describe('TheSimulatorContainer component', () => {
  let wrapper = shallowMount(TheSimulatorContainer);
  test('that display property initializes to 0', () => {
    expect(wrapper.vm.display).toBe(0)
  })

  test('that projectUrl starts as an empty string', () => {
    expect(wrapper.vm.projecturl).toBe('')
  })

  test('that portNumber starts as an empty string', () => {
    expect(wrapper.vm.portNumber).toBe('')
  })
  
  test('that the clicking the form runs the choosePort method which uses the number in portNumber and sets projecturl to be a string with the desired url', async () => {
    wrapper.vm.portNumber = '8080';
    await wrapper.find('form').trigger('click');
    expect(wrapper.vm.projecturl).toBe('http://localhost:8080/')
  })
})