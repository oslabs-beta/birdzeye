import { shallowMount } from '@vue/test-utils';
import TheComponentTreeContainer from '@/components/componentTree/TheComponentTreeContainer.vue';

describe('tests for TheComponentTreeContainer', () => {
  TheComponentTreeContainer.methods.getChildrenComponents = jest.fn();
  let wrapper = shallowMount(TheComponentTreeContainer);
  test('childComponentsObject should initialize to an empty object', () => {
    expect(typeof wrapper.vm.childComponentsObj).toBe('object')
    expect(Object.keys(wrapper.vm.childComponentsObj).length).toBe(0)
  })
  test('childComponentNameList should initialize to an empty array', () => {
    expect(Array.isArray(wrapper.vm.childComponentNameList)).toBe(true)
    expect(wrapper.vm.childComponentNameList.length).toBe(0)
  })
})