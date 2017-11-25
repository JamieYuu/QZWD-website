<template>
  <div>
      <div class="text">
          <template v-if="loggedIn">
            <p>logged in</p>
          </template>
          <template v-else>
            <p style="font-size: 30px">未登录,请先登录</p>
            <p>
                <router-link to="/admin-login">管理员登录</router-link>
                <router-link to="/">返回首页</router-link>
            </p>
          </template>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      loggedIn: false
    }
  },

  created: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    })
  },

  methods: {
  }
}
</script>

<style scoped>
.text {
    text-align: center;
    margin-top: 250px;
    margin-bottom: 200px;
    margin-left: 400px;
    margin-right: 400px;
}

.theText {
    font-size: 36px;
}

.theLink {
    font-size: 20px;
}
</style>
