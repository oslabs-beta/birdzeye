import { shallowMount } from '@vue/test-utils';
import TheOpeningPage from '@/components/TheOpeningPage.vue';
import App from '@/App.vue';
// import {ipc} from '@/components/TheOpeningPage.vue';
// jest.mock('/components/TheOpeningPage');
// ipc.on in mounted() is not being recognized in tests and is messing up the tests in this file
describe('TheOpeningPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TheOpeningPage, {
      mounted: () => 'mounted',
      parentComponent: App
    })
    // const mockIPC = jest.fn(() => 'test');
  })

  it('has a button', () => {
    // const wrapper = shallowMount(TheOpeningPage)
    // console.log(wrapper);
    expect(wrapper.vm.find('button')).toBe(true)
  })

  it('rootDir is empty string by default', () => {
    // const wrapper = shallowMount(TheOpeningPage)
    expect(wrapper.vm.rootDir).toBe('')
  })

  it('rootName is empty string by default', () => {
    // const wrapper = shallowMount(TheOpeningPage)
    expect(wrapper.vm.rootName).toBe('')
  })
})