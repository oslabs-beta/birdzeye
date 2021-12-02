import { shallowMount } from '@vue/test-utils';
import DirectoryContainer from '@/components/directory/DirectoryContainer';

describe('the DirectoryContainer component', () => {
  let wrapper = shallowMount(DirectoryContainer);
  test('that allDirectories initializes as an empty array', () => {
    expect(Array.isArray(wrapper.vm.allDirectories)).toBe(true)
    expect(wrapper.vm.allDirectories.length).toBe(0)
  })
})