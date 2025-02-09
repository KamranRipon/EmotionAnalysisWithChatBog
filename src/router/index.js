import Vue from 'vue';
import VueRouter from 'vue-router';
import ButtonPage from '../views/ButtonPage.vue';
import SurveyPage from '../views/NeutralSurveyPage.vue';
import AnalysisPage from '../views/AnalysisPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ButtonPage },
  { path: '/survey', component: SurveyPage },
  { path: '/analysis', component: AnalysisPage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default  router