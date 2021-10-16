import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue switchToMain', () => {
  it('derenders opening screen', () => {
    
    const wrapper = shallowMount(App);
    App.methods.switchToMain(false);
    expect(wrapper.displayOpen).toBe(false)
  })
})
