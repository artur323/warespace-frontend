import { createApp, ref, onMounted } from 'vue'
import './style.css'
import App from './App.vue'

const darkMode = ref(localStorage.getItem('darkMode') === 'true');

onMounted(() => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

export { darkMode };

createApp(App).mount('#app')
