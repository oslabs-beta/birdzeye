import { shallowMount } from '@vue/test-utils';
import TheOpeningPage from '@/components/TheOpeningPage.vue';

describe('TheOpeningPage.vue', () => {
  
  TheOpeningPage.methods.setRoot = jest.fn();
  
  // TheOpeningPage.methods.setRoot = jest.fn((path) => {
  //   TheOpeningPage.rootDir = path;
  //   // TheOpeningPage.rootName = TheOpeningPage.methods.getHomeDirectory(path);
     
  //   const mockgetHomeDirectory = (filePath) => {
  //     let slashPos = 0;
  //     console.log(filePath, 'filePath in mockgetHomeDir');
  //     if (filePath) {
  //       for (let i = filePath.length; i > 0; i--) {
  //         if (filePath[i] === '/') {
  //           slashPos = i;
  //           break;
  //         }
  //       }
  //     } 
  //     return filePath.slice(slashPos + 1);
  //   }
  //   TheOpeningPage.rootName = mockgetHomeDirectory(path)
  // });
  let wrapper = shallowMount(TheOpeningPage, {
    //methods: {
      setRoot: jest.fn((path) => {
        wrapper.vm.rootDir = path;
        // TheOpeningPage.rootName = TheOpeningPage.methods.getHomeDirectory(path);
         
        const mockgetHomeDirectory = (filePath) => {
          let slashPos = 0;
          console.log(filePath, 'filePath in mockgetHomeDir');
          if (filePath) {
            for (let i = filePath.length; i > 0; i--) {
              if (filePath[i] === '/') {
                slashPos = i;
                break;
              }
            }
          } 
          return filePath.slice(slashPos + 1);
        }
        wrapper.vm.rootName = mockgetHomeDirectory(path)
      })
    //}
  });


  it('has a button', () => {
    
    expect(wrapper.html('button')).toBe("<section><button>Open Project</button><img alt=\"birdzeye logo\" src=\"\"></section>")
  })

  it('rootDir is empty string by default', () => {
    
    expect(wrapper.vm.rootDir).toBe('')
  })

  it('rootName is empty string by default', () => {
    
    expect(wrapper.vm.rootName).toBe('')
  })
  wrapper.vm.setRoot('/someFolder/rootFolder');
  it('should save file path to rootDir and the root folder name to rootName', () => {
    expect(wrapper.vm.rootDir).toBe('/someFolder/rootFolder')
    expect(wrapper.vm.rootName).toBe('rootFolder')
  })
})