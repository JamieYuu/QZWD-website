<template>
  <div>
        <template v-if="loggedIn">
            <div style="text-align: center; margin-top: 80px">
                <h3>律师管理</h3>
                <br/>
            </div>
            <div id="mainBody">
                <b-container>
                    <b-row>
                        <b-col>
                            <p style="font-size: 24px">合伙人列表</p>
                        </b-col>
                        <b-col></b-col><b-col></b-col><b-col></b-col>
                        <b-col>
                            <b-btn class="buttons" variant="success">添加合伙人 <i class="fa fa-plus" aria-hidden="true"></i></b-btn>
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

            <b-modal ref="editModal" id="modal-edit" centered title="编辑律师" size="lg">
                <h4>编辑律师{{this.lawWannaEdit.name}}</h4>
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
                            <label>描述: </label>
                            <b-form-textarea v-model="lawWannaEdit.desc"></b-form-textarea>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label>职位: </label>
                            <b-form-select v-model="lawWannaEdit.position" :options="options"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label>专业领域: </label>
                            <ul>
                                <template v-for="obj in lawPros">
                                    <li :key="obj.id">
                                        <input :placeholder="obj"/>
                                    </li>
                                </template>
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>
                <div slot="modal-footer">
                    <b-btn class="buttons" variant="success">保存</b-btn>
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
      loggedIn: false,
      staffs: [
        {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      ],
      lawWannaEdit: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: { pro: '' }},
      lawPros: {},
      lawWannaDelete: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}},
      options: [
        { value: '律师', text: '律师' },
        { value: '一级合伙人', text: '一级合伙人' },
        { value: '二级合伙人', text: '二级合伙人' }
      ]
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
    this.firebaseRef.child('Staffs').on('value', (datasnap) => {
      var some = datasnap.val()
      this.staffs = some
    })
  },

  methods: {
    edLawyer (obj) {
      this.lawWannaEdit = obj
      this.lawPros = this.lawWannaEdit.profession
      console.log(this.lawPros)
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
    }
  }
}
</script>

<style scoped>
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

