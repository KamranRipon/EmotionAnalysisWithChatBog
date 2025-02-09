<template>
  <div>
    <h1>Survey</h1>
    <p>Mood: {{ $route.query.mood }}</p>
    <div v-for="(question, index) in questions" :key="index">
      <label>{{ question }}</label>
      <input type="range" v-model="answers[index]" min="0" max="5" />
      <span>{{ answers[index] }}</span>
    </div>
    <button @click="submitSurvey">Submit</button>
    <button @click="goToHome" style="margin-top: 20px;">Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: ['Neutral Question 1?', 'Neutral Question 2?', 'Neutral Question 3?'],
      answers: [0, 0, 0],
    };
  },
  methods: {
    submitSurvey() {
      const surveyData = {
        mood: this.$route.query.mood,
        answers: this.answers,
      };
      localStorage.setItem('surveyData', JSON.stringify(surveyData));
      this.$router.push('/analysis');
    },
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

#app {
  width: 60%;
  margin: 0 auto;
}

.question {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

input[type='range'] {
  width: 100%;
  margin: 10px 0;
}

.slider-value {
  display: block;
  text-align: center;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.results {
  margin-top: 30px;
}

.results ul {
  list-style-type: none;
  padding: 0;
}

.results li {
  margin-bottom: 10px;
}
</style>