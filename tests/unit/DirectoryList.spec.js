import { shallowMount } from '@vue/test-utils';
import DirectoryList from '@/components/directory/DirectoryList';

describe('DirectoryList component', () => {
  DirectoryList.methods.getDirectories = jest.fn();
  DirectoryList.methods.getFiles = jest.fn();
  DirectoryList.methods.readDirectory = jest.fn();
  DirectoryList.methods.readFile = jest.fn();
  
  let wrapper = shallowMount(DirectoryList, {
    propsData: {
      rootdir: '/folderA/folderB'
    }
  });

  test('that allDirectories is an empty array on initialization', () => {
    expect(Array.isArray(wrapper.vm.allDirectories)).toBe(true)
    expect(wrapper.vm.allDirectories.length).toBe(0)
  })

  test('that allFiles initializes as an empty array', () => {
    expect(Array.isArray(wrapper.vm.allFiles)).toBe(true)
    expect(wrapper.vm.allFiles.length).toBe(0)
  })

  test('that pathToDirectory is a file path based on props with a slash added', () => {
    // await wrapper.setProps({rootdir: '/folderA/folderB'})
    expect(wrapper.vm.pathToDirectory).toBe('/folderA/folderB/')
  })
})