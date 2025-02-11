<template>
  <div class="positive-survey">
    <h1>Positive Emotion</h1>
    <p class="mood-text">Mood: {{ $route.query.mood }}</p>
    <div class="questions-container">
      <div v-for="(question, index) in questions" :key="index" class="question">
        <label>{{ question }}</label>
        <input type="range" v-model="answers[index]" min="0" max="5" class="slider" />
        <span class="slider-value">{{ answers[index] }}</span>
      </div>
    </div>
    <div class="button-container">
      <button @click="submitSurvey" class="submit-button">
      <!-- <div class="spinner-border spinner-border-sm"></div> -->
      <div>
        <b-spinner label="Loading..."></b-spinner>
      </div>
      Analyze</button>
      <button @click="goToHome" class="exit-button">Exit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variants: ['primary'],
      questions: ['Happiness', 'Excitement', 'Gratitude'],
      answers: [0, 0, 0],
    };
  },
  methods: {
    submitSurvey() {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;        
      }, 2000);
      const surveyData = {
        mood: this.$route.query.mood,
        answers: this.answers,
      };
      localStorage.setItem('surveyData', JSON.stringify(surveyData));
      this.$router.push('/AnalysisPositiveEmotionPage');
    },
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.positive-survey {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #e3f2fd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.mood-text {
  font-size: 1.2rem;
  color: #007bb5;
  margin-bottom: 20px;
}

.questions-container {
  width: 100%;
}

.question {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

label {
  display: block;
  margin-bottom: 8px;
}

.slider {
  width: 100%;
}

.slider-value {
  display: block;
  font-size: 1rem;
  margin-top: 5px;
}

.button-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.submit-button, .home-button {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.submit-button {
  background-color: #4caf50;
  color: white;
}

.submit-button:hover {
  background-color: #45a049;
}

.home-button {
  background-color: #ff4d4d;
  color: white;
}

.home-button:hover {
  background-color: #cc0000;
}
</style>
