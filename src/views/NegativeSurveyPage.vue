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
      questions: ['Negative question 1?', 'Negative question 2?', 'Negative question 3?'],
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

<style scoped>
.survey-page {
  padding: 20px;
}

.question {
  margin: 20px 0;
}

.home-button {
  margin-top: 20px;
}
</style>