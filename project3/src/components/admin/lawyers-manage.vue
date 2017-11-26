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
                        <b-col><p class="tableHeader">姓名</p></b-col><b-col><p class="tableHeader">手机</p></b-col><b-col><p class="tableHeader">邮箱</p></b-col><b-col></b-col>
                    </b-row>
                    <template v-for="obj in hhrStaffs">
                        <b-row :key="obj.id">
                            <b-col>{{obj.name}}</b-col><b-col>{{obj.phone}}</b-col><b-col>{{obj.email}}</b-col>
                            <b-col>
                                <p class="buttons editBtn" @click="editLawyer"><i class="fa fa-pencil" aria-hidden="true"></i></p>
                                <p v-b-modal.modal-delete class="buttons deleteBtn" @click="deleteLawyer"><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                            </b-col>
                        </b-row>
                    </template>
                </b-container>
                </div>

                <br/><br/>

                <b-container>
                    <b-row>
                        <b-col>
                            <p style="font-size: 24px">律师列表</p>
                        </b-col>
                        <b-col></b-col><b-col></b-col><b-col></b-col>
                        <b-col>
                            <b-btn class="buttons" variant="success">添加律师 <i class="fa fa-plus" aria-hidden="true"></i></b-btn>
                        </b-col>
                    </b-row>
                </b-container>
                <hr/>
                <div style="text-align: center">
                <b-container>
                    <b-row>
                        <b-col><p class="tableHeader">姓名</p></b-col><b-col><p class="tableHeader">手机</p></b-col><b-col><p class="tableHeader">邮箱</p></b-col><b-col></b-col>
                    </b-row>
                    <template v-for="obj in lsStaffs">
                        <b-row :key="obj.id">
                            <b-col>{{obj.name}}</b-col><b-col>{{obj.phone}}</b-col><b-col>{{obj.email}}</b-col>
                            <b-col>
                                <p class="buttons editBtn" @click="editLawyer"><i class="fa fa-pencil" aria-hidden="true"></i></p>
                                <p v-b-modal.modal-delete class="buttons deleteBtn" @click="deleteLawyerPop(obj)"><i class="fa fa-trash-o" aria-hidden="true"></i></p>
                            </b-col>
                        </b-row>
                    </template>
                </b-container>
                </div>
                <br/><br/><br/> 
            </div>
            <b-modal ref="deleteModal" id="modal-delete" centered title="删除律师">
                <p class="my-4">确认要删除 {{lawWannaDelete.name}} 吗?</p>
                <div slot="modal-footer">
                    <b-btn class="buttons" @click="deleteLawyer" variant="danger">删除</b-btn>
                    <b-btn class="buttons" variant="secondary" @click="hideDeleteModal">取消</b-btn>
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
      staffs: {
        staff: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      },
      hhrStaffs: [
        {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      ],
      lsStaffs: [
        {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      ],
      newStaffs: null,
      lawWannaDelete: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
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
    for (var obj in this.staffs) {
      var theObj = this.staffs[obj]
      if (theObj.position === '律师') {
        this.lsStaffs.push(theObj)
      } else {
        this.hhrStaffs.push(theObj)
      }
    }
    this.lsStaffs.shift()
    this.hhrStaffs.shift()
  },

  methods: {
    editLawyer: function () {
      console.log('clicked Edit')
    },
    deleteLawyerPop: function (obj) {
      this.lawWannaDelete = obj
    },
    deleteLawyer: function () {
      console.log(this.staffs)
      var lawyer = this.lawWannaDelete
      delete this.staffs.lawyer
      console.log(this.staffs)
    },
    hideDeleteModal () {
      this.$refs.deleteModal.hide()
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

