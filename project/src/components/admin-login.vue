<template>
  <div>
      <div class="text">
          <h4>求正沃德网页管理员账号登录</h4>
          <br/><br/><br/><br/><br/><br/>
          <b-form @submit="login">
              <b-form-group id="usernameLabel"
                    horizontal
                    label="账号:" label-for="usernameInput">
              <b-form-input id="usernameInput"
                            type="text"
                            v-model="form.username" required
                            placeholder="">
              </b-form-input>
              </b-form-group>
              <b-form-group id="passwordLabel"
                    horizontal
                    label="密码:" label-for="passwordInput">
              <b-form-input id="passwordInput"
                            type="password"
                            v-model="form.password" required
                            placeholder="">
              </b-form-input>
              </b-form-group>

              <b-alert :show="dismissCountDown"
                dismissible
                variant="danger"
                @dismissed="dismissCountdown=0"
                @dismiss-count-down="countDownChanged">
                账号或密码错误
              </b-alert>

              <p>
                  <template v-if="loading">
                    <b-btn class="theButton" disabled type="submit" variant="primary"> 登录中 <i class="fa fa-refresh fa-spin fa-fw"></i></b-btn> 
                  </template>
                  <template v-else>
                    <b-btn class="theButton" type="submit" variant="primary">登 录</b-btn> 
                  </template>
                  <b-btn class="theButton" variant="secondary" v-on:click="backToMain">返 回</b-btn>
              </p>
          </b-form>
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
      form: {
        username: '',
        password: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      eM: false,
      loading: false
    }
  },

  methods: {
    login: function (evt) {
      evt.preventDefault()
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.form.username, this.form.password).catch((error) => {
        var errorMessage = error.message
        if (errorMessage != null) {
          this.eM = true
          this.dismissCountDown = this.dismissSecs
        }
      })

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('signed in')
          this.$router.push('/admin-main')
        }
      })
    },

    backToMain: function () {
      this.$router.push('/')
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  },

  created: function () {
    firebase.auth().signOut().then(() => {

    })
    this.eM = false
  }
}
</script>

<style scoped>
.theButton:hover {
    cursor: pointer;
}

.text {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 150px;
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
