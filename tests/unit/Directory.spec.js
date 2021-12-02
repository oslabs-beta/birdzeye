import { shallowMount } from '@vue/test-utils';
import Directory from '@/components/directory/Directory';

describe('the Directory component', () => {
  Directory.methods.readSubfile = jest.fn()
  Directory.methods.readSubDirectory = jest.fn()
  Directory.methods.getSubDirectories = jest.fn()
  Directory.methods.getFiles = jest.fn()
  let wrapper = shallowMount(Directory, {
    propsData: {
      directoryName: 'testFolder',
      parentPath: '/path/to'
    }
  })
  test('that allFiles initializes to an empty array', () => {
    expect(Array.isArray(wrapper.vm.allFiles)).toBe(true)
    expect(wrapper.vm.allFiles.length).toBe(0)
  })

  test('that allSubDirectories initializes as an empty array', () => {
    expect(Array.isArray(wrapper.vm.allSubDirectories)).toBe(true)
    expect(wrapper.vm.allSubDirectories.length).toBe(0)
  })

  test('that showFiles initializes to false', () => {
    expect(wrapper.vm.showFiles).toBe(false)
  })
  
  test('that path initializes as a combination of the props with a slash between', () => {
    expect(wrapper.vm.path).toBe('/path/to/testFolder')
  })

  test('that filePath initializes to an empty string', () => {
    expect(wrapper.vm.filePath).toBe('')
  })

  test('that toggleFiles changes showFiles property between true and false', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.showFiles).toBe(true)
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.showFiles).toBe(false)
  })
})