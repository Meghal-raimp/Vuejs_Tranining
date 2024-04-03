import { createApp } from 'vue'
import App from './App.vue'
// import router from './router/index'
import 'chart.js';
import store from "@/store";
createApp(App).use(store).mount('#app')
