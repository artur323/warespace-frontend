import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  isDarkMode.value = e.matches
})

createApp(App)
  .provide('isDarkMode', isDarkMode)
  .mount('#app')
