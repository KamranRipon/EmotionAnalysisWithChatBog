<template>
    <div>
      <h1>Welcome to the Survey</h1>
      <button @click="goToPositiveSurvey('positive')">Positive</button>
      <button @click="goToNegativeSurvey('negative')">Negative</button>
      <button @click="goToNeutralSurvey('neutral')">Neutral</button>
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
    },
  };
  </script>

<style scoped>
.button-page {
  padding: 20px;
}

button {
  margin: 10px;
}
</style>
