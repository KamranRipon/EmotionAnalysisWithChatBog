import ButtonPage from './views/ButtonPage.vue';
// import SurveyPage from './views/NeutralSurveyPage.vue';
import AnalysisPage from './views/AnalysisPage.vue';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PositiveSurveyPage from './views/PositiveSurveyPage.vue'
import NegativeSurveyPage from './views/NegativeSurveyPage.vue';
import NeutralSurveyPage from './views/NeutralSurveyPage.vue';
import '@/assets/styles.css'; // Import the global styles

const routes = [
  { path: '', component: ButtonPage },
  // { path: '/survey', component: SurveyPage },
  { path: '/analysis', component: AnalysisPage },
  { path: '/postive-survey', component: PositiveSurveyPage },
  { path: '/negative-survey', component: NegativeSurveyPage },
  { path: '/neutral-survey', component: NeutralSurveyPage },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
