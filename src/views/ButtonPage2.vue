<template>
    <div class="button-page">
      <div class="header">
        <h1>Emotion Analysing App & Emotion-Sensitive Chatbot</h1>
      <h2>What emotions have you experienced now/today?</h2>
      <p></p>
      </div>
    </div>
    <div class="button-containder">
      <button @click="goToPositiveSurvey('positive')">Positive</button>
      <button @click="goToNegativeSurvey('negative')">Negative</button>
      <button @click="goToNeutralSurvey('neutral')">Neutral</button>
      <button @click="goToChatBot('chatbot')">ChatBot</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // goToSurvey(mood) {
      //   this.$router.push({ path: '/survey', query: { mood } });
      // },
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
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #36a2eb;
}

h1 {
  font-size: 2.5rem;
  color: #285e95;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  gap: 20px; /* Space between buttons */
  background-color: #3498db;
}

button {
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  transform: scale(1.05); /* Slightly enlarge the button on hover */
}

.positive-button {
  background-color: #42b983; /* Green */
  color: white;
}

.positive-button:hover {
  background-color: #3aa876; /* Darker green */
}

.negative-button {
  background-color: #ff6384; /* Red */
  color: white;
}

.negative-button:hover {
  background-color: #e55373; /* Darker red */
}

.neutral-button {
  background-color: #36a2eb; /* Blue */
  color: white;
}

.neutral-button:hover {
  background-color: #2c8fd1; /* Darker blue */
}
</style>
