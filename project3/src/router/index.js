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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      path: '/news/the-article',
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
    }
  ]
})
