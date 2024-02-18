import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

export default [
  {
    name: 'index',
    path: '/',
    redirect: '/news',
  },
  {
    name: 'ask',
    path: '/ask',
    component: AskView,
  },
  {
    name: 'jobs',
    path: '/jobs',
    component: JobsView,
  },
  {
    name: 'news',
    path: '/news',
    component: NewsView,
  },
  {
    name: 'user',
    path: '/user/:id',
    component: UserView,
  },
  {
    name: 'item',
    path: '/item/:id',
    component: ItemView,
  },
];
