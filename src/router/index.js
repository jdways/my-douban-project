import Vue from 'vue'
import Router from 'vue-router'
import HeadNav from '@/components/HeadNav'
import PagesView from '@/view/PagesView'
import HomeView from '@/view/HomeView'
import MovieView from '@/view/MovieView'
import BookView from '@/view/BookView'
import GroupView from '@/view/GroupView'
import BroadView from '@/view/BroadView'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'broad',
          name: 'BroadView',
          component: BroadView
        },
        /*{
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }*/
      ]
    },
  ]
})
