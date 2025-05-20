<template>
  <div class="splash-page" v-if="!loadingComplete">
    <div class="logo-container">
      <div class="logo">Jonathan Emminizer</div>
      <p class="loading-text">Loading...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SplashPage',
  setup() {
    const router = useRouter();
    const loadingComplete = ref(false);

    onMounted(() => {
      document.body.style.background = 'linear-gradient(135deg, #6a11cb, #2575fc)'; // Match splash page background
      setTimeout(() => {
        loadingComplete.value = true;
        document.body.classList.add('fade-out'); // Trigger fade-out effect
        setTimeout(() => {
          router.push('/portfolio'); // Navigate to portfolio after fade-out
        }, 0);
      }, 3000); // Simulate a 3-second loading screen
    });

    return { loadingComplete };
  },
});
</script>

<style scoped>
.splash-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 10px;
}

.loading-text {
  font-size: 18px;
  animation: blink 1.5s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Global fade-out effect */
body.fade-out {
  animation: fadeOut 1s ease-in-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
</style>