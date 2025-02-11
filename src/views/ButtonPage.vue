<template>
    <div class="button-page">
      <h1>Emotion Analysing App & Emotion-Sensitive Chatbot</h1>
      <h2>What emotions have you experienced now/today?</h2>
      <p></p>
      <div class="button-container">
        <button @click="goToPositiveSurvey('positive')" class="positive-button">Positive</button>
        <button @click="goToNegativeSurvey('negative')" class="negative-button">Negative</button>
        <button @click="goToNeutralSurvey('neutral')" class="neutral-button">Neutral</button>
        <button @click="goToChatBot('chatbot')" class="chatbot-button">ChatBot</button>
      </div>
    </div>
</template>
  
<script>
export default {
  methods: {
    goToPositiveSurvey(mood) {
      this.$router.push({ path: '/postive-survey', query: { mood } });
    },
    goToNegativeSurvey(mood) {
      this.$router.push({ path: '/negative-survey', query: { mood } });
    },
    goToNeutralSurvey(mood) {
      this.$router.push({ path: '/neutral-survey', query: { mood } });
    },
    goToChatBot(mood) {
      this.$router.push({ path: '/chatbot', query: { mood } });
    },
  },
};
</script>

<style scoped>
.button-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

button {
  padding: 15px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: bold;
}

button:hover {
  transform: scale(1.05);
}

.positive-button {
  background-color: #42b983;
  color: white;
}

.positive-button:hover {
  background-color: #3aa876;
}

.negative-button {
  background-color: #ff4d4d;
  color: white;
}

.negative-button:hover {
  background-color: #cc0000;
}

.neutral-button {
  background-color: #36a2eb;
  color: white;
}

.neutral-button:hover {
  background-color: #2c8fd1;
}

.chatbot-button {
  background-color: #ffce56;
  color: #333;
}

.chatbot-button:hover {
  background-color: #e6b800;
}
</style>
