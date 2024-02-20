import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '@/views/CreateListView';

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
    // component: createListView('AskView'),
  },
  {
    name: 'jobs',
    path: '/jobs',
    component: JobsView,
    // component: createListView('JobsView'),
  },
  {
    name: 'news',
    path: '/news',
    // component: NewsView,
    component: createListView('NewsView'),
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
