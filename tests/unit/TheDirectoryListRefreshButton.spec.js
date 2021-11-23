import { shallowMount } from '@vue/test-utils';
import TheDirectoryListRefreshButton from '@/components/directory/TheDirectoryListRefreshButton';

describe('TheDirectoryListRefreshButton component', () => {
  // const mockFunc = jest.fn()
  let wrapper = shallowMount(TheDirectoryListRefreshButton, {
    propsData: {
      rootdir: 'someRootDir'
    },
    methods: {
      refreshDirectoryTree: jest.fn()
    }
  });
  test('that filePath is rootdir from props with a slash', () => {
    expect(wrapper.vm.filePath).toBe('someRootDir/')
  })
  test('that clicking runs the refreshDirectoryTree function', async () => {
    await wrapper.find('span').trigger('click');
    expect(wrapper.methods.refreshDirectoryTree.mock.calls.length).toBe(1);
  })
})