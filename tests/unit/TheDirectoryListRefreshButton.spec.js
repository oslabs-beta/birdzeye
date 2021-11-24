import { shallowMount } from '@vue/test-utils';
import TheDirectoryListRefreshButton from '@/components/directory/TheDirectoryListRefreshButton';

describe('TheDirectoryListRefreshButton component', () => {
  
  let wrapper = shallowMount(TheDirectoryListRefreshButton, {
    propsData: {
      rootdir: 'someRootDir'
    }
  });
  test('that filePath is rootdir from props with a slash', () => {
    expect(wrapper.vm.filePath).toBe('someRootDir/')
  })
  test('that clicking runs the refreshDirectoryTree function', async () => {
    wrapper.vm.refreshDirectoryTree = jest.fn();
    await wrapper.find('span').trigger('click');
    expect(wrapper.vm.refreshDirectoryTree).toHaveBeenCalled();
  })
})