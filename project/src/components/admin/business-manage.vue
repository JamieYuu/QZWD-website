<template>
    <div>
        <template v-if="loggedIn">
            <br/><br/>
            <router-link to="/admin-main">管理员首页</router-link>
            <div style="text-align: center">
                <p class="headerText">业务管理</p>
            </div>

            <div id="mainBody">
                <b-container>
                    <b-row>
                        <b-col>
                            <p style="font-size: 24px">业务列表</p>
                        </b-col>
                        <b-col></b-col><b-col></b-col><b-col></b-col>
                        <b-col>
                            <b-btn @click="addNew" class="buttons" variant="success">添加业务 <i class="fa fa-pencil-square-o" aria-hidden="true"></i></b-btn>
                        </b-col>
                    </b-row>
                </b-container>
                <hr/>

                <b-container>
                    <b-row>
                        <b-col><p class="tableHeader">业务</p></b-col>
                        <b-col><p class="tableHeader">大标题</p></b-col>
                        <b-col><p class="tableHeader">种类</p></b-col>
                        <b-col><p class="tableHeader">编辑</p></b-col>
                    </b-row>
                    <template v-for="obj in articles">
                        <b-row :key="obj.key">
                            <b-col><p class="tableCell">{{obj.title}}</p></b-col>
                            <b-col><p class="tableCell tableCellTitle">{{obj.bigTitle}}</p></b-col>
                            <b-col><p class="tableCell">{{getTypes(obj.lists)}}</p></b-col>
                            <b-col><p class="tableCell">
                                       <i class="fa fa-pencil editIcon" aria-hidden="true" @click="editArt(obj.url)"></i>
                                       <i class="fa fa-trash-o editIcon" v-b-modal.modal-delete aria-hidden="true" style="color: red" @click="deleteArt = obj"></i>
                                   </p></b-col>
                        </b-row>
                    </template>
                </b-container>
            </div>

            <b-modal ref="deleteModal" id="modal-delete" centered title="删除文章">
                <p class="my-4">确定删除 {{deleteArt.title}} 吗?</p>
                <div slot="modal-footer">
                    <b-btn class="buttons" @click="deleteArticle" variant="danger">删除</b-btn>
                    <b-btn class="buttons" variant="secondary" @click="hideDeleteModal">取消</b-btn>
                </div>
            </b-modal>

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

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      articles: [],
      deleteArt: {},
      loggedIn: false
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

    this.firebaseRef.child('Business').on('value', (datasnap) => {
      var arts = datasnap.val()
      for (var obj in arts) {
        arts[obj].url = obj
        this.articles.push(arts[obj])
      }
      this.articles.reverse()
    })
  },

  methods: {
    addNew: function () {
      this.$router.push('/admin/business-manage/edit-business/:new')
    },

    editArt: function (url) {
      var editUrl = '/admin/business-manage/edit-business/:' + url
      this.$router.push(editUrl)
    },

    hideDeleteModal () {
      this.$refs.deleteModal.hide()
    },

    deleteArticle: function () {
      var deleteUrl = 'Business/' + this.deleteArt.url
      this.firebaseRef.child(deleteUrl).remove()
      window.location.reload()
    },

    getTypes: function (lists) {
      var listArray = []
      for (var obj in lists) {
        listArray.push(lists[obj].subtitle)
      }
      return listArray
    }
  }
}
</script>

<style scoped>
.editIcon:hover {
    cursor: pointer;
}

.headerText {
    font-size: 30px;
}

hr {
    border-width: 3px;
}

#mainBody {
    margin-left: 100px;
    margin-right: 100px;
}

.buttons:hover {
    cursor: pointer;
}

.tableCell {
    text-align: center;
}

.tableCellTitle {
    font-size: 12px;
}

.tableHeader {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
}
</style>

