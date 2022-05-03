import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/styles/main.css'
import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
