import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue switchToMain', () => {
  it('derenders opening screen', () => {
    App.methods.switchToMain(false)
    const wrapper = shallowMount(App)
    expect(wrapper.displayOpen).toBe(false)
  })
})
// test('derenders opening screen', () => {
//   const wrapper = shallowMount(App)
//   App.methods.switchToMain(false)
//   expect(wrapper.displayOpen).toBe(false);
// })

