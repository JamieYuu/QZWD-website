<template>
    <div id="wholePage">
        <theHeader />
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">律师团队</p>
                </div>
            </div>

            <br/>
            <p id="lableText">专业人员</p>
            <hr id="hr1">

            <div id="mainBodyDiv">

                <p style="font-size: 20px">合伙人</p>
                <b-container>
                    <b-row>
                        <template v-for="ele in hhrStaffs">
                            <div :key="ele.id">
                                <b-col>
                                <div>
                                <b-card :title="ele.name"
                                :img-src="logoURL"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="width: 16rem;"
                                class="mb-2">
                                <div class="cardInfo">
                                <p class="card-text">{{ele.position}}</p>
                                <p class="card-text">电话 {{ele.phone}}</p>
                                <p class="card-text">邮箱 {{ele.email}}</p>
                                <div style="text-align: center">
                                <b-btn v-on:click="getTarget(ele)" v-b-modal.modal1 variant="outline-primary">详细资料</b-btn>
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
                        </b-form-group>
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
                    <b-img slot="aside" blank width="200" blank-color="#ccc"/>
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
                    <li :key="pros.id">{{pros}}</li>
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
      logoURL: require('@/assets/logo.jpg'),
      headerImg: require('@/assets/STFImg.jpg'),
      wxImg: require('@/assets/wx.jpeg'),
      filter: null,
      form: {
        name: '',
        professional: null
      },
      possitions: [
        { text: '全部', value: null }, '高级合伙人', '二级合伙人', '专业律师'
      ],
      professionals: [
        { text: '全部', value: null }, '仲裁', '啦啦啦', '嘿', '业务4'
      ],
      staffs: {
        staff: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      },
      target: {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}},
      hhrStaffs: [
        {oPhone: '', desc: '', email: '', name: '', phone: '', position: '', profession: {}}
      ],
      lsStaffs: [
        {姓名: '', 邮箱: '', 联系电话: '', 专业领域: []}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    }
  },

  components: {

  },

  methods: {
    getTarget: function (selectLawyer) {
      this.target = selectLawyer
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = Math.ceil(filteredItems.length / this.perPage)
      this.currentPage = 1
    }
  },

  created: function () {
    this.firebaseRef.child('Staffs').on('value', (datasnap) => {
      var some = datasnap.val()
      this.staffs = some
    })
    for (var theStaff in this.staffs) {
      var staffObj = this.staffs[theStaff]
      if (staffObj.position === '律师') {
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
        this.hhrStaffs.push(staffObj)
      }
    }
    this.hhrStaffs.shift()
    this.lsStaffs.shift()
    this.totalRows = Math.ceil(this.lsStaffs.length / this.perPage)
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
    font-size: 30px;
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
}
</style>
