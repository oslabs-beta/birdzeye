import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue switchToMain', () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(App);
  })
  it('derenders opening screen', () => {
    // const wrapper = shallowMount(App);
    cmp.vm.switchToMain(false);
    expect(cmp.vm.displayOpen).toBe(false)
  })
})
