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
                        <b-col cols="2">标题:</b-col>
                        <b-col><b-form-input v-model="targetArt.title" type="text" placeholder="输入标题"></b-form-input></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col cols="2">大标题:</b-col>
                        <b-col><b-form-input v-model="targetArt.bigTitle" type="text" placeholder="输入大标题"></b-form-input></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>细节种类</b-col>
                    </b-row>
                    <br/>
                    <template v-for="obj in typeArray">
                        <b-row :key="obj.id">
                            <b-col cols="2">小标题:</b-col>
                            <b-col><b-form-input v-model="obj.subtitle" type="text"></b-form-input></b-col>
                        </b-row>
                        <b-row :key="obj.id">
                            <b-col cols="2">描述:</b-col>
                            <b-col><b-form-textarea v-model="obj.description" type="text" :rows="3"></b-form-textarea></b-col>
                        </b-row>
                        <b-row :key="obj.id">
                            <b-col><b-btn variant="danger" class="buttons" @click="delType(typeArray.indexOf(obj))">删除</b-btn></b-col>
                        </b-row>
                        <br :key="obj.id"/>
                        <hr :key="obj.id"/>
                    </template>
                    <b-btn variant="success" @click="addListItem" class="buttons">添加细节</b-btn>
                    <br/>
                    <hr/>
                    <b-row>
                        <b-col>团队介绍:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><vue-editor v-model="targetArt.teamDes"></vue-editor></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>业务内容:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><b-form-textarea v-model="targetArt.mainBody" :rows="5"></b-form-textarea></b-col>
                    </b-row>
                    <br/>
                    <b-row>
                        <b-col>标题图片:</b-col>
                    </b-row>
                    <b-row>
                        <b-col><b-form-file v-model="file" accept="image/*"></b-form-file></b-col>
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
      firestorageRef: firebase.storage().ref(),
      targetArt: {},
      loggedIn: false,
      typeArray: [],
      file: ''
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
      var targetPath = 'Business/' + pathName
      this.firebaseRef.child(targetPath).once('value', (datasnap) => {
        this.targetArt = datasnap.val()
        for (var obj in this.targetArt.lists) {
          this.typeArray.push(this.targetArt.lists[obj])
        }
      })
    } else {
      this.targetArt = {
        bigTitle: '',
        lists: {},
        mainBody: '',
        teamDes: '',
        title: ''
      }
      this.typeArray.push({
        subtitle: '',
        description: ''
      })
    }
  },

  methods: {
    cancel: function () {
      this.$router.push('/admin/business-manage')
    },

    saveArt: function () {
      var pathName = this.$route.params.id.slice(1)
      this.targetArt.lists = {}
      for (var i = 0; i < this.typeArray.length; i++) {
        this.targetArt.lists[i] = this.typeArray[i]
      }
      if (pathName === 'new') {
        this.firebaseRef.child('Business').push(this.targetArt)
      } else {
        var artUrl = 'Business/' + pathName
        this.firebaseRef.child(artUrl).set(this.targetArt)
      }

      var imgPathname = 'Business/' + this.targetArt.title + '.jpg'
      this.firestorageRef.child(imgPathname).delete().then(() => {})
      this.firestorageRef.child(imgPathname).put(this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
      })
      this.$router.push('/admin/business-manage')
    },

    addListItem: function () {
      this.typeArray.push({
        subtitle: '',
        description: ''
      })
    },

    delType: function (pos) {
      this.typeArray.splice(pos, 1)
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

