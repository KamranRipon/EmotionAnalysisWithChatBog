import ButtonPage from './views/ButtonPage.vue';
// import SurveyPage from './views/NeutralSurveyPage.vue';
// import AnalysisPage from './views/AnalysisPositiveEmotionPage.vue';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PositiveSurveyPage from './views/PositiveSurveyPage.vue'
import NegativeSurveyPage from './views/NegativeSurveyPage.vue';
import NeutralSurveyPage from './views/NeutralSurveyPage.vue';
import '@/assets/styles.css'; // Import the global styles
import LocalChatBot from './components/LocalChatBot.vue';
import AnalysisPositiveEmotionPage from './views/AnalysisPositiveEmotionPage.vue';
import AnalysisNegativeEmotionPage from './views/AnalysisNegativeEmotionPage.vue';
import AnalysisNeutralEmotionPage from './views/AnalysisNeutralEmotionPage.vue';

const routes = [
  { path: '', component: ButtonPage },
  // { path: '/survey', component: SurveyPage },
  // { path: '/analysis', component: AnalysisPage },
  { path: '/postive-survey', component: PositiveSurveyPage },
  { path: '/negative-survey', component: NegativeSurveyPage },
  { path: '/neutral-survey', component: NeutralSurveyPage },
  { path: '/chatbot', component: LocalChatBot },
  { path: '/AnalysisPositiveEmotionPage', component: AnalysisPositiveEmotionPage },
  { path: '/AnalysisNegativeEmotionPage', component: AnalysisNegativeEmotionPage },
  { path: '/AnalysisNeutralEmotionPage', component: AnalysisNeutralEmotionPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
