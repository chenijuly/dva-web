const BasicLayout = () => import('../layouts/BasicLayout');
const IndexPage = () => import('../pages/index-page/index');
const Test = () => import ('../pages/test/index');

const routes = [
  {
    path: '/',
    component: BasicLayout,
    models: () => [
      import('../models/user')
    ],
    children: [{
      path: '/',
      component: IndexPage,
    }, {
      path: '/aa',
      component: Test,
    }]
  },
  {
    path: '/test',
    component: Test,
    children: [
      {
        path: '/a',
        component: IndexPage,
      },
    ],
  },
];

export default routes;
