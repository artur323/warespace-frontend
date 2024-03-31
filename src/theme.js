import { ref, onMounted } from 'vue';

const darkMode = ref(localStorage.getItem('darkMode') === 'true');

const toggleDarkMode = () => {
  console.log(123);
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value);
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

export { darkMode, toggleDarkMode };