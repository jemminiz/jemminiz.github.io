import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure the router is imported
const app = createApp(App);
app.use(router); // Ensure the router is used in the app
app.mount('#app');
