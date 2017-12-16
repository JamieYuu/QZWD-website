<template>
  <div>
      <div class="text">
          <template v-if="loggedIn">
            <h3>你好,管理员</h3>
            <br/>
            <b-container>
              <b-row>
                <b-col>
                  <b-btn class="buttons" @click="toLawManage" variant="outline-primary">律师管理</b-btn>
                </b-col>
                <b-col>
                  <b-btn class="buttons" @click="toArtManage" variant="outline-primary">文章管理</b-btn>
                </b-col>
                <b-col>
                  <b-btn class="buttons" @click="toCaseManage" variant="outline-primary">案例管理</b-btn>
                </b-col>
              </b-row>
            </b-container>
          </template>
          <template v-else>
            <p style="font-size: 30px">未登录,请先登录</p>
            <p>
                <router-link to="/admin-login">管理员登录</router-link>
                <router-link to="/">返回首页</router-link>
            </p>
          </template>
      </div>
      <theBottom />
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
    toLawManage: function () {
      this.$router.push('/admin/lawyers-manage')
    },

    toArtManage: function () {
      this.$router.push('/admin/articles-manage')
    },

    toCaseManage: function () {
      this.$router.push('/admin/cases-manage')
    }
  }
}
</script>

<style scoped>
.buttons:hover {
    cursor: pointer;
}

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
