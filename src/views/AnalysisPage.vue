<template>
  <div>
    <h1>Analysis</h1>
    <canvas ref="pieChart"></canvas>
    <button @click="goToHome" style="margin-top: 20px;">Home</button>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    const surveyData = JSON.parse(localStorage.getItem('surveyData'));
    if (surveyData) {
      this.renderPieChart(surveyData.answers);
    }
  },
  methods: {
    renderPieChart(answers) {
      const ctx = this.$refs.pieChart.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['How are you today?', 'How was your day?', 'Did you have a good time?'],
          datasets: [
            {
              data: answers,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
      });
    },
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.analysis-page {
  padding: 20px;
}

.home-button {
  margin-top: 20px;
}
</style>