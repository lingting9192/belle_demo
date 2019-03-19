import Vue from 'vue'
import Router from 'vue-router'
// import bookshelf from './pages/bookshelf/bookshelf.vue'
// import bookcity from './pages/bookcity/bookcity.vue'
const bookshelf = r => require.ensure([], () => r(require('@/pages/bookshelf/bookshelf')), 'bookshelf')
const bookcity = r => require.ensure([], () => r(require('@/pages/bookcity/bookcity')), 'bookcity')
const me = r => require.ensure([], () => r(require('@/pages/me/me')), 'me')
const novel = r => require.ensure([], () => r(require('@/pages/bookcity/children/novel')), 'novel')

 Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: {
        name:'bookshelf'
      }
    },
    {
      name:'bookshelf',
      path: '/bookshelf',
      component: bookshelf
    },
    {
      name:'bookcity',
      path: '/bookcity',
      component: bookcity,
      children:[{
        name:'novel',
        path: 'novel',
        component: novel,
      }]
    },
    {
      name:'me',
      path: '/me',
      component: me
    },
  ]
})
