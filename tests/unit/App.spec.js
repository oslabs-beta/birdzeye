import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue switchToMain', () => {
  let cmp;
  beforeEach(() => {
    cmp = shallowMount(App);
  })
  it('is rendering opening screen at start because displayOpen property starts as true', () => {
    expect(cmp.vm.displayOpen).toBe(true)
  })
  
  it('derenders opening screen by changing displayOpen property to false', () => {
    cmp.vm.switchToMain(false);
    expect(cmp.vm.displayOpen).toBe(false)
  })
  
  it('sets root as chosen by user by setting projectRoot property', () => {
    cmp.vm.setRoot('/vueapp');
    expect(cmp.vm.projectRoot).toBe('/vueapp')
  })

  it('sets the name of the root chosen by user by setting directoryName property', () => {
    cmp.vm.getRootName('App');
    expect(cmp.vm.directoryName).toBe('App')
  })
})
