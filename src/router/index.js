import Vue from 'vue';
import VueRouter from 'vue-router';
// import Analysis from '../views/Analysis.vue';
import LocalChatBot from '@/components/LocalChatBot.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/analysis', component: Analysis },
  { path: '/chatbot', component: LocalChatBot }, // Add the ChatBot route
];


const router = new VueRouter({
  mode: 'history',
  routes, 
});

// export default router;