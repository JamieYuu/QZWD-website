<template>
    <div>
        <template v-if="loggedIn">
            <br/><br/>
            <router-link to="/admin-main">管理员首页</router-link>
            <div style="text-align: center">
                <p class="headerText">编辑案例</p>
            </div>
            <hr/>

            <div class="editDiv">
                <b-container>
                    <b-row>
                        <b-col cols="1">标题:</b-col>
                        <b-col><b-form-input v-model="targetArt.title" type="text" placeholder="输入标题"></b-form-input></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col cols="1">发布时间:</b-col>
                        <b-col><flat-pickr v-model="targetArt.date" placeholder="选择时间"></flat-pickr></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col cols="1">律师姓名:</b-col>
                        <b-col><b-form-input v-model="targetArt.lawyer" type="text"></b-form-input></b-col>
                        <b-col cols="1">律师邮箱:</b-col>
                        <b-col><b-form-input v-model="targetArt.lawyerEmail" type="text"></b-form-input></b-col>
                        <b-col cols="1">律师电话:</b-col>
                        <b-col><b-form-input v-model="targetArt.lawyerPhone" type="text"></b-form-input></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>律师介绍:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><b-form-textarea v-model="targetArt.lawyerDes" :rows="3"></b-form-textarea></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>案例内容:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><vue-editor v-model="targetArt.information"></vue-editor></b-col>
                    </b-row>
                    <br/>
                </b-container>
                <div id="saveBtn">
                    <p>
                        <b-btn variant="success" @click="saveArt" class="buttons">保存</b-btn>
                        <b-btn variant="secondary" @click="cancel" class="buttons">取消</b-btn>
                    </p>
                </div>
            </div>

            <hr/>
        </template>
        <template v-else>
            <p style="font-size: 30px">未登录,请先登录</p>
            <p>
                <router-link to="/admin-login">管理员登录</router-link>
                <router-link to="/">返回首页</router-link>
            </p>
        </template>

        <theBottom/>
    </div>
</template>

<script>
import firebase from 'firebase'
import { VueEditor } from 'vue2-editor'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      targetArt: {
        lawyer: '',
        lawyerDes: '',
        lawyerEmail: '',
        lawyerPhone: '',
        date: '',
        information: '',
        title: ''
      },
      loggedIn: false
    }
  },

  components: {
    VueEditor
  },

  watch: {
  },

  created: function () {
    console.log('created')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    })

    var pathName = this.$route.params.id.slice(1)
    if (pathName !== 'new') {
      var targetPath = 'Cases/' + pathName
      this.firebaseRef.child(targetPath).once('value', (datasnap) => {
        this.targetArt = datasnap.val()
      })
    }
  },

  methods: {
    cancel: function () {
      this.$router.push('/admin/cases-manage')
    },

    saveArt: function () {
      var pathName = this.$route.params.id.slice(1)
      if (pathName === 'new') {
        this.firebaseRef.child('Cases').push(this.targetArt)
      } else {
        var artUrl = 'Cases/' + pathName
        this.firebaseRef.child(artUrl).set(this.targetArt)
      }
      this.$router.push('/admin/cases-manage')
    }
  }
}
</script>

<style scoped>
#saveBtn {
    text-align: center;
}

.editDiv {
    margin-left: 100px;
    margin-right: 100px;
}

.headerText {
    font-size: 30px;
}

.buttons:hover {
    cursor: pointer;
}
</style>

