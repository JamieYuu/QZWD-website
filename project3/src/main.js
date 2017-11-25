// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import Header from './header'
import BottomInf from './bottomInf'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('theHeader', Header)
Vue.component('theBottom', BottomInf)

var config = {
  apiKey: 'AIzaSyBu-mEfUAvkg2MDn2KBJ_mk1OwGIEb5PMo',
  authDomain: 'qzwdproject.firebaseapp.com',
  databaseURL: 'https://qzwdproject.firebaseio.com',
  projectId: 'qzwdproject',
  storageBucket: 'qzwdproject.appspot.com',
  messagingSenderId: '150000319769'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
