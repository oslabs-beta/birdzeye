import { shallowMount } from '@vue/test-utils';
import File from '@/components/directory/File';

describe('the File component', () => {
  let wrapper = shallowMount(File, {
    propsData: {
      fileName: 'testFile',
      parentPath: '/some/path'
    }
  });
  test('that componentTreeFileName is the name passed from props', () => {
    expect(wrapper.vm.componentTreeFileName).toBe('testFile')
  })

  test('that filePath is a combination of parentPath and fileName with a slash between', () => {
    expect(wrapper.vm.filePath).toBe('/some/path/testFile')
  })
})