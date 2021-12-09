import { shallowMount } from '@vue/test-utils';
import TheTerminalTextEditorContainer from '@/components/terminalTextEditor/TheTerminalTextEditorContainer.vue';

describe('TheTerminalTextEditorContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheTerminalTextEditorContainer);
  })

  test('showTerm is false by default', () => {
    expect(wrapper.vm.showTerm).toBe(false);
  })

  test('showText is true by default', () => {
    expect(wrapper.vm.showText).toBe(true);
  })
  
  test('clicking the toggle runs setDisplay and changes properties showTerm and showText', async () => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.showTerm).toBe(true);
    expect(wrapper.vm.showText).toBe(false);
  })
})