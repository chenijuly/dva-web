import IndexPage from '../pages/index-page/index';
import Test from '../pages/test/index'
const routes = [
  {
    path: '',
    component: IndexPage
  },
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/test',
    component: Test,
    childrem: [
      {
        path: '/:id',
        component: IndexPage
      },
    ]
  }
]

export default routes