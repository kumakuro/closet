
const testList = () => import('../views/test/list.vue');
const testUpdate = () => import('../views/test/update.vue');

export default [
  {
    path: 'list',
    name:'aestlist',
    component: testList
  },
  {
    path: 'update',
    name:'aestupdate',
    component: testUpdate
  }
]