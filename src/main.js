import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from "@/plugins/router.js";

createApp(App)
    .use(router)
    .mount('#app')
