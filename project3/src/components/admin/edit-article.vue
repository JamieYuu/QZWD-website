<template>
    <div>
        <template v-if="loggedIn">
            <br/><br/>
            <router-link to="/admin-main">管理员首页</router-link>
            <div style="text-align: center">
                <p class="headerText">编辑文章</p>
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
                        <b-col cols="2">文章种类:</b-col>
                        <b-col><b-form-select :options="options" v-model="targetArt.ZL"></b-form-select></b-col>
                        <b-col cols="1">发布时间:</b-col>
                        <b-col><flat-pickr v-model="targetArt.date" placeholder="选择时间"></flat-pickr></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col cols="1">作者姓名:</b-col>
                        <b-col><b-form-input v-model="targetArt.author" type="text"></b-form-input></b-col>
                        <b-col cols="1">作者邮箱:</b-col>
                        <b-col><b-form-input v-model="targetArt.authorEmail" type="text"></b-form-input></b-col>
                        <b-col cols="1">作者电话:</b-col>
                        <b-col><b-form-input v-model="targetArt.authorPhone" type="text"></b-form-input></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>作者介绍:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><b-form-textarea v-model="targetArt.authorDes" :rows="3"></b-form-textarea></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>文章分类:</b-col>
                    </b-row>
                    <b-row>
                        <b-form-checkbox-group plain v-model="types" :options="business" />
                    </b-row>
                    <b-row>
                        <b-col>文章内容:</b-col>
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
        ZL: '',
        author: '',
        authorDes: '',
        authorEmail: '',
        authorPhone: '',
        date: '',
        des: '',
        information: '',
        title: '',
        type: {}
      },
      types: [],
      options: [
        {value: 'WZ', text: '文章'},
        {value: 'SWSXW', text: '事务所新闻'},
        {value: 'FGJD', text: '法规解读'}
      ],
      business: [],
      loggedIn: false
    }
  },

  components: {
    VueEditor
  },

  watch: {
    types: function () {
      this.targetArt.type = {}
      for (var i = 0; i < this.types.length; i++) {
        this.targetArt.type[i] = this.types[i]
      }
    }
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
      var targetPath = 'Ariticles/' + pathName
      this.firebaseRef.child(targetPath).once('value', (datasnap) => {
        this.targetArt = datasnap.val()
        for (var obj in this.targetArt.type) {
          this.types.push(this.targetArt.type[obj])
        }
      })
    }

    this.firebaseRef.child('Business').once('value', (datasnap) => {
      var theBus = datasnap.val()
      for (var obj in theBus) {
        var target = {text: theBus[obj].title, value: theBus[obj].title}
        this.business.push(target)
      }
    })
  },

  methods: {
    cancel: function () {
      this.$router.push('/admin/articles-manage')
    },

    saveArt: function () {
      var pathName = this.$route.params.id.slice(1)
      if (pathName === 'new') {
        this.firebaseRef.child('Ariticles').push(this.targetArt)
      } else {
        var artUrl = 'Ariticles/' + pathName
        this.firebaseRef.child(artUrl).set(this.targetArt)
      }
      this.$router.push('/admin/articles-manage')
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

