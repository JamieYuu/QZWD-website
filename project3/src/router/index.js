import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUs from '@/components/aboutUs'
import AllBusiness from '@/components/allBusiness'
import Staffs from '@/components/staffs'
import ArticlesAndNews from '@/components/articles-and-news'
import Articles from '@/components/news/articles'
import TheArticle from '@/components/news/the-article'
import BankFinance from '@/components/business/bank-finance'
import Arbitration from '@/components/business/arbitration'
import CompetitionTradeSupervision from '@/components/business/competition-trade-Supervision'
import RealEstate from '@/components/business/real-estate'
import IntellectualProperty from '@/components/business/intellectual-property'
import Error from '@/components/error'
import AdminLogin from '@/components/admin-login'
import AdminMain from '@/components/adminMain'

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
      name: 'Error',
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
      path: '/articles',
      name: 'articles',
      component: Articles
    },

    {
      path: '/news/the-article/:id',
      name: 'article',
      component: TheArticle
    },

    {
      path: '/business/bank-finance',
      name: 'bankFinance',
      component: BankFinance
    },

    {
      path: '/business/arbitration',
      name: 'arbitration',
      component: Arbitration
    },

    {
      path: '/business/competition-trade-Supervision',
      name: 'competitionTradeSupervision',
      component: CompetitionTradeSupervision
    },

    {
      path: '/business/real-estate',
      name: 'realEstate',
      component: RealEstate
    },

    {
      path: '/business/intellectual-property',
      name: 'intellectualProperty',
      component: IntellectualProperty
    },

    {
      path: '/admin-login',
      name: 'adminLogin',
      component: AdminLogin
    },

    {
      path: '/admin-main',
      name: 'adminLogin',
      component: AdminMain
    }
  ]
})
