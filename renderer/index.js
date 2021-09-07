import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
// const app = createApp({data() {
//   return {count: 4}
// } });

// const vm = app.mount('#root');
// console.log(vm.count, 'vm.count')
app.mount('#root');