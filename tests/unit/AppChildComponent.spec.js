import { shallowMount } from '@vue/test-utils';
import AppChildComponent from '@/components/componentTree/AppChildComponent.vue';

describe('AppChildComponent tests', () => {
  let wrapper = shallowMount(AppChildComponent);
  test('that childComponentsObj initializes to an empty object', () => {
    expect(typeof wrapper.vm.childComponentsObj).toBe('object')
    expect(wrapper.vm.childComponentsObj.hasOwnProperties).toBe(false)
  })
})