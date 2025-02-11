<template>
  <div class="analysis-container">
    <h1 class="title">Analysis</h1>
    <div class="chart-container">
      <canvas ref="pieChart"></canvas>
    </div>
    <div class="button-container">
      <button @click="goToHome" class="exit-button">Exit</button>
      <button @click="goToChatBot" class="chatbot-button">ChatBot</button>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    const surveyData = JSON.parse(localStorage.getItem('surveyData'));
    if (surveyData && surveyData.answers && surveyData.answers.length) {
      this.renderPieChart(surveyData.answers);
    } else {
      console.warn("No survey data available.");
    }
  },
  methods: {
    renderPieChart(answers) {
      const ctx = this.$refs.pieChart.getContext('2d');
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      this.chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Happiness', 'Excitement', 'Gratitude'],
          datasets: [
            {
              data: answers,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
    goToHome() {
      this.$router.push('/');
    },
    goToChatBot() {
      this.$router.push('/chatbot');
    },
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  },
};
</script>

<style scoped>
.analysis-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.chart-container {
  width: 100%;
  max-width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.exit-button, .chatbot-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.exit-button {
  background-color: #ff4d4d;
  color: white;
}

.exit-button:hover {
  background-color: #cc0000;
}

.chatbot-button {
  background-color: #36a2eb;
  color: white;
}

.chatbot-button:hover {
  background-color: #2c8fd1;
}
</style>
