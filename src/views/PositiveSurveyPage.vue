<template>
  <div>
    <h1>Positive Survey</h1>
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
      questions: ['How are you today?', 'How was your day?', 'Did you have a good time?'],
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
  .positive-survey {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: lightblue;
    align-items: left;
  }
  
  #app {
    width: 90%;
    margin: 0 auto;
  }
  
  .question {
    margin-bottom: 30px;
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
    display: block;
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

  </style>