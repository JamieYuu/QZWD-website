import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUs from '@/components/aboutUs'
import AllBusiness from '@/components/allBusiness'
import Staffs from '@/components/staffs'
import ArticlesAndNews from '@/components/articles-and-news'
import ArtType from '@/components/news/artType'
import TheArticle from '@/components/news/the-article'
import Error from '@/components/error'
import AdminLogin from '@/components/admin-login'
import AdminMain from '@/components/adminMain'
import LawyerManage from '@/components/admin/lawyers-manage'
import ArtManage from '@/components/admin/articles-manage'
import TheBusiness from '@/components/the-business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/404',
      name: 'Error',
      component: Error
    },

    {
      path: '*',
      name: 'toError',
      redirect: '/404'
    },

    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutUs
    },

    {
      path: '/all-business',
      name: 'allBusiness',
      component: AllBusiness
    },

    {
      path: '/staffs',
      name: 'staffs',
      component: Staffs
    },

    {
      path: '/articles-and-news',
      name: 'articlesAndNews',
      component: ArticlesAndNews
    },

    {
      path: '/news/article-type/:id',
      name: 'artType',
      component: ArtType
    },

    {
      path: '/news/the-article/:id',
      name: 'article',
      component: TheArticle
    },

    {
      path: '/the-business/:id',
      name: 'theBusiness',
      component: TheBusiness
    },

    {
      path: '/admin-login',
      name: 'adminLogin',
      component: AdminLogin
    },

    {
      path: '/admin-main',
      name: 'adminMain',
      component: AdminMain
    },

    {
      path: '/admin/lawyers-manage',
      name: 'lawyersManage',
      component: LawyerManage
    },

    {
      path: '/admin/articles-manage',
      name: 'articlesManage',
      component: ArtManage
    }
  ]
})
