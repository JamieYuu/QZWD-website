<template>
    <div id="wholePage">
        <theHeader />
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <b-btn variant="primary" id="aboutUsTextDiv" class="md-elevation-7">律师团队</b-btn>
            </div>

            <br/>
            <p id="lableText">专业人员</p>
            <hr id="hr1">

            <div id="mainBodyDiv">

                <p style="font-size: 20px">高级合伙人</p>
                <b-container>
                    <b-row>
                        <template v-for="ele in hhrStaffs">
                            <div :key="ele.id">
                                <b-col>
                                <div>
                                <b-card :title="ele.name"
                                :img-src="wxImg"
                                tag="article"
                                style="width: 16rem;"
                                class="mb-2">
                                <div class="cardInfo">
                                <p class="card-text">{{ele.position}}</p>
                                <p class="card-text">电话 {{ele.phone}}</p>
                                <p class="card-text">邮箱 {{ele.email}}</p>
                                <div style="text-align: center">
                                <b-btn v-on:click="getTarget(ele)" id="detailBtn" v-b-modal.modal1 variant="outline-primary">详细资料</b-btn>
                                </div>
                                </div>
                                </b-card>
                                </div>
                                </b-col>
                            </div>
                        </template>
                    </b-row>
                    <br/>
                </b-container>

                <hr style="border-width: 3px">

                <p style="font-size: 20px">二级合伙人</p>
                <b-container>
                    <b-row>
                        <template v-for="ele in ejStaffs">
                            <div :key="ele.id">
                                <b-col>
                                <div>
                                <b-card :title="ele.name"
                                tag="article"
                                style="width: 16rem;"
                                class="mb-2">
                                <div class="cardInfo">
                                <p class="card-text">{{ele.position}}</p>
                                <p class="card-text">电话 {{ele.phone}}</p>
                                <p class="card-text">邮箱 {{ele.email}}</p>
                                <div style="text-align: center">
                                <b-btn v-on:click="getTarget(ele)" id="detailBtn" v-b-modal.modal1 variant="outline-primary">详细资料</b-btn>
                                </div>
                                </div>
                                </b-card>
                                </div>
                                </b-col>
                            </div>
                        </template>
                    </b-row>
                    <br/>
                </b-container>

                <hr style="border-width: 3px">

                <p style="font-size: 20px">律师团队</p>
                <p class="bodyText">使用搜索引擎查找适合的专家</p>
                <b-form>
                        <b-form-input id="formGroupNameInput"
                            type="text" v-model="filter"
                            placeholder="输入关键字(eg: 姓名,职业领域, etc.)">
                        </b-form-input>
                </b-form>
                <br/>

                <template>
                    <div style="text-align: center">
                    <b-table hover 
                        :items="lsStaffs"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        @filtered="onFiltered"
                        ></b-table>
                <b-container><b-row><b-col></b-col>
                <b-col>
                    <b-pagination-nav base-url="#" :number-of-pages="totalRows" v-model="currentPage" />
                </b-col>
                <b-col></b-col></b-row></b-container>
                </div>
                </template>
            </div>
            
            <br/>
            <hr id="hr1">

            <b-modal size="lg" 
                hide-footer 
                id="modal1" 
                :title="target.name"
                header-bg-variant="primary"
                header-text-variant="light">

                <b-media right-align vertical-align="center">
                    <b-img slot="aside" :src="target.iSrc" width="200"/>
                    <h5 class="mt-0 mb-1">{{target.position}}</h5>
                    <div style="line-height: 6px">
                        <br/><br/><br/>
                    <p class="bodyText">电话 {{target.phone}}</p>
                    <p class="bodyText">邮箱 {{target.email}}</p>
                    <p class="bodyText">其他什么联系方式 {{target.oPhone}}</p>
                    </div>
                </b-media>
                <h6 style="font-size: 20px;" class="my-4">律师介绍</h6>
                <p class="bodyText">{{target.desc}}</p>
                <h6 style="font-size: 20px;" class="my-4">专业领域</h6>
                <ul>
                    <template v-for="pros in target.profession">
                    <li :key="pros.id"><router-link :to="getBusUrl(pros)">{{pros}}</router-link></li>
                    </template>
                </ul>
            </b-modal>

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
      fireStorageRef: firebase.storage().ref(),
      headerImg: require('@/assets/STFImg.jpg'),
      filter: null,
      thePicSrc: null,
      staffs: {},
      target: {},
      hhrStaffs: [],
      ejStaffs: [],
      lsStaffs: [],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    }
  },

  components: {

  },

  computed: {
  },

  methods: {
    getTarget: function (selectLawyer) {
      this.target = selectLawyer
      var pathName = 'Staffs/' + this.target.name
      this.fireStorageRef.child(pathName).getDownloadURL().then((url) => {
        this.target.iSrc = url
      })
      console.log(this.target)
    },

    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = Math.ceil(filteredItems.length / this.perPage)
      this.currentPage = 1
    },

    getBusUrl: function (url) {
      return '/the-business/:' + url
    }
  },

  created: function () {
    console.log('created')
    window.scrollTo(0, 0)

    this.firebaseRef.child('Staffs').on('value', (datasnap) => {
      this.staffs = datasnap.val()

      for (var theStaff in this.staffs) {
        var staffObj = this.staffs[theStaff]
        if (staffObj.position === '高级合伙人') {
          this.hhrStaffs.push(staffObj)
        } else if (staffObj.position === '律师') {
          var profe = []
          for (var profObj in staffObj.profession) {
            profe.push(staffObj.profession[profObj])
          }
          var addStaff = {
            姓名: staffObj.name,
            邮箱: staffObj.email,
            联系电话: staffObj.phone,
            专业领域: profe
          }
          this.lsStaffs.push(addStaff)
        } else {
          this.ejStaffs.push(staffObj)
        }
      }
      this.totalRows = Math.ceil(this.lsStaffs.length / this.perPage)
    })
  }
}
</script>

<style scoped>
.cardInfo {
    line-height: 6px;
}

#searchDiv {
    text-align: right;
}

#searchBtn:hover {
    cursor: pointer;
}

#mainBodyDiv {
    margin-left: 200px;
    margin-right: 200px;
}

#lableText {
    margin-left: 200px;
    margin-right: 200px;
    color: gray;
    font-size: 20px;
}

#hr1 {
    margin-left: 200px;
    margin-right: 200px;
    border-width: 3px;
    margin-top: 0px;
}

#bodyTitle {
    margin-top: 10px;
    vertical-align: bottom;
    font-size: 30px;
    padding-left: 200px;
}

#introText {
    margin-left: 200px;
}

.bodyText {
    color: gray;
}

#aboutUsTextDiv {
    font-size: 24px;
    font-weight: 600;
    color: white;
    background-color: rgb(37, 146, 221);
    z-index: 2;
    position: absolute;
    top: 350px;
    left: 150px;
    width: 160px;
    text-align: center;
    height: 50px;
    box-shadow: 8px 8px 5px rgb(60, 68, 80);
}

#headerImg {
    width:100%;
}

#wholePage {
    background-color: white;
    height: 100%;
}

#buttons {
    color: white;
    cursor: pointer;
    text-decoration: none;
}

#buttons:hover {
    color: rgb(6, 132, 228);
    cursor: pointer;
}

#detailBtn:hover {
    cursor: pointer;
}
</style>
