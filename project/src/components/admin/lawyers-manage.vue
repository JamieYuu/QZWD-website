<template>
  <div>
        <template v-if="loggedIn">
            <div id="backToMain">
                <router-link to="/admin-main">管理员首页</router-link>
            </div>
            <div style="text-align: center; margin-top: 80px">
                <h3>律师管理</h3>
                <br/>
            </div>
            <div id="mainBody">
                <b-container>
                    <b-row>
                        <b-col>
                            <p style="font-size: 24px">律师列表</p>
                        </b-col>
                        <b-col></b-col><b-col></b-col><b-col></b-col>
                        <b-col>
                            <b-btn v-b-modal.modal-addNew @click="addNew" class="buttons" variant="success">添加律师 <i class="fa fa-plus" aria-hidden="true"></i></b-btn>
                        </b-col>
                    </b-row>
                </b-container>
                <hr/>
                <div style="text-align: center">
                <b-container>
                    <b-row>
                        <b-col><p class="tableHeader">姓名</p></b-col><b-col><p class="tableHeader">手机</p></b-col><b-col><p class="tableHeader">邮箱</p></b-col><b-col class="tableHeader">职位</b-col><b-col></b-col>
                    </b-row>
                    <template v-for="obj in staffs">
                        <b-row :key="obj.id">
                            <b-col>{{obj.name}}</b-col><b-col>{{obj.phone}}</b-col><b-col>{{obj.email}}</b-col><b-col>{{obj.position}}</b-col>
                            <b-col>
                                <p v-b-modal.modal-edit class="buttons editBtn" @click="edLawyer(obj)"><i class="fa fa-pencil" aria-hidden="true"></i></p>
                                <p v-b-modal.modal-delete class="buttons deleteBtn" @click="delLawyer(obj)"><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                            </b-col>
                        </b-row>
                    </template>
                </b-container>
                </div>

                <br/><br/>
                <br/><br/><br/> 
            </div>

            <b-modal ref="deleteModal" id="modal-delete" centered title="删除律师">
                <p class="my-4">确定删除 {{this.lawWannaDelete.name}} 吗?</p>
                <div slot="modal-footer">
                    <b-btn class="buttons" @click="deleteLawyer" variant="danger">删除</b-btn>
                    <b-btn class="buttons" variant="secondary" @click="hideDeleteModal">取消</b-btn>
                </div>
            </b-modal>

            <b-modal ref="addNewModal" id="modal-addNew" centered title="添加律师" size="lg">
                <h4>添加律师{{lawWannaAdd.name}}</h4>
                <br/>
                <b-container>
                    <b-row>
                        <b-col>
                            <label>姓名: </label>
                            <input v-model="lawWannaAdd.name"/>
                        </b-col>
                        <b-col>
                            <label>邮箱: </label>
                            <input v-model="lawWannaAdd.email"/>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label>手机: </label>
                            <input v-model="lawWannaAdd.phone"/>
                        </b-col>
                        <b-col>
                            <label>联系方式: </label>
                            <input v-model="lawWannaAdd.oPhone"/>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>描述: </label>
                            <b-form-textarea v-model="lawWannaAdd.desc"></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>职位: </label>
                            <b-form-select v-model="lawWannaAdd.position" :options="options"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>专业领域: </label>
                            <template v-for=" val in pros">
                                <div :key="val.id">
                                <input type="checkbox" :id="val.id" :value="val" v-model="lawPros">
                                <label :for="val.id">{{val}}</label>
                                </div>
                            </template>
                        </b-col>
                    </b-row>
                    <template v-if="this.lawWannaAdd.position != '律师'">
                    <b-row>
                        <b-col>
                            <br/>
                            <p>图片</p>
                            <b-form-file id="file_input1" v-model="file"></b-form-file>
                            <p>Selected file: {{file && file.name}}</p>
                        </b-col>
                    </b-row>
                    </template>
                </b-container>
                <div slot="modal-footer">
                    <b-btn class="buttons" @click="saveNew" variant="success">添加</b-btn>
                    <b-btn class="buttons" variant="secondary" @click="hideAddNewModal">取消</b-btn>
                </div>
            </b-modal>

            <b-modal ref="editModal" id="modal-edit" centered title="编辑律师" size="lg">
                <h4>编辑律师{{this.lawWannaEdit.name}}</h4>
                <br/>
                <b-container>
                    <b-row>
                        <b-col>
                            <label>姓名: </label>
                            <input v-model="lawWannaEdit.name"/>
                        </b-col>
                        <b-col>
                            <label>邮箱: </label>
                            <input v-model="lawWannaEdit.email"/>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label>手机: </label>
                            <input v-model="lawWannaEdit.phone"/>
                        </b-col>
                        <b-col>
                            <label>联系方式: </label>
                            <input v-model="lawWannaEdit.oPhone"/>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>描述: </label>
                            <b-form-textarea v-model="lawWannaEdit.desc"></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>职位: </label>
                            <b-form-select v-model="lawWannaEdit.position" :options="options"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <br/>
                            <label>专业领域: </label>
                            <b-form-checkbox-group plain :options="pros" v-model="lawPros" />
                        </b-col>
                    </b-row>
                    <template v-if="this.lawWannaEdit.position != '律师'">
                    <b-row>
                        <b-col>
                            <br/>
                            <p>图片</p>
                            <b-img :src="thePicSrc" />
                            <b-form-file id="file_input1" v-model="file"></b-form-file>
                            <p>Selected file: {{file && file.name}}</p>
                        </b-col>
                    </b-row>
                    </template>
                </b-container>
                <div slot="modal-footer">
                    <b-btn class="buttons" @click="saveEdit" variant="success">保存</b-btn>
                    <b-btn class="buttons" variant="secondary" @click="hideEditModal">取消</b-btn>
                </div>
            </b-modal>

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

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      fireStorageRef: firebase.storage().ref(),
      thePicRef: '',
      thePicSrc: '',
      file: null,
      fileEdit: null,
      loggedIn: false,
      pros: [],
      staffs: [
        {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      ],
      lawWannaEdit: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: { pro: '' }},
      lawWannaAdd: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}},
      lawPros: [],
      lawWannaDelete: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}},
      options: [
        { value: '律师', text: '律师' },
        { value: '助理律师', text: '助理律师' },
        { value: '高级合伙人', text: '高级合伙人' },
        { value: '二级合伙人', text: '二级合伙人' }
      ]
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

    this.firebaseRef.child('Staffs').on('value', (datasnap) => {
      var some = datasnap.val()
      this.staffs = some
    })

    this.firebaseRef.child('Business').once('value', (datasnap) => {
      var theBus = datasnap.val()
      for (var obj in theBus) {
        var target = {text: theBus[obj].title, value: theBus[obj].title}
        this.pros.push(target)
      }
    })
  },

  watch: {
    lawPros: function () {
      this.lawWannaAdd.profession = {}
      for (var i = 0; i < this.lawPros.length; i++) {
        this.lawWannaAdd.profession[i] = this.lawPros[i]
      }
    }
  },

  methods: {
    edLawyer (obj) {
      this.file = null
      this.thePicSrc = ''
      this.lawPros = []
      this.lawWannaEdit = obj
      for (var pro in this.lawWannaEdit.profession) {
        this.lawPros.push(this.lawWannaEdit.profession[pro])
      }
      if (this.lawWannaEdit.position !== '律师') {
        var pathName = 'Staffs/' + this.lawWannaEdit.name
        this.fireStorageRef.child(pathName).getDownloadURL().then((url) => {
          this.thePicSrc = url
        })
      }
    },

    addNew: function () {
      this.file = null
      this.lawPros = []
      this.lawWannaAdd = {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
    },

    saveNew: function () {
      this.firebaseRef.child('Staffs').push(this.lawWannaAdd)
      var pathName = 'Staffs/' + this.lawWannaAdd.name
      this.fireStorageRef.child(pathName).put(this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
      })
      this.$refs.addNewModal.hide()
    },

    delLawyer (obj) {
      this.lawWannaDelete = obj
    },

    deleteLawyer: function () {
      for (var lawyer in this.staffs) {
        if (this.staffs[lawyer] === this.lawWannaDelete) {
          delete this.staffs[lawyer]
          break
        }
      }
      this.firebaseRef.child('Staffs').set(this.staffs)
      this.$refs.deleteModal.hide()
      location.reload()
    },

    hideDeleteModal () {
      this.$refs.deleteModal.hide()
    },

    hideEditModal () {
      this.$refs.editModal.hide()
    },

    hideAddNewModal () {
      this.$refs.addNewModal.hide()
    },

    saveEdit: function () {
      for (var lawyer in this.staffs) {
        if (this.staffs[lawyer] === this.lawWannaEdit) {
          this.staffs[lawyer].profession = {}
          for (var val in this.lawPros) {
            this.staffs[lawyer].profession[val] = this.lawPros[val]
          }
          break
        }
      }
      this.firebaseRef.child('Staffs').set(this.staffs)
      if (this.lawWannaEdit.position !== '律师' && this.file !== null) {
        var pathName = 'Staffs/' + this.lawWannaEdit.name
        console.log(pathName)
        this.firestorageRef.child(pathName).delete().then(() => {})
        this.fireStorageRef.child(pathName).put(this.file).then((snapshot) => {
          console.log('Uploaded a blob or file!')
        })
      }
      this.$refs.editModal.hide()
    }
  }
}
</script>

<style scoped>
#backToMain {
    position: absolute;
    left: 20px;
    top: 40px;
}

.deleteBtn {
    color: red; 
    display: inline;
}

.editBtn {
    display: inline; 
    white-space: pre; 
    color: black
}

#opDiv {
    display: inline;
}

.buttons:hover {
    cursor: pointer;
}

.tableHeader {
    font-size: 18px;
    font-weight: 700;
}

#mainBody {
    margin-left: 100px;
    margin-right: 100px;
}

hr {
    border-width: 3px;
}
</style>

