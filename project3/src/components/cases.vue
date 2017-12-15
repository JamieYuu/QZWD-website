<template>
    <div id="wholePage">
        <theHeader />
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <b-btn variant="primary" id="aboutUsTextDiv" class="md-elevation-7">案例与业绩</b-btn>
            </div>

            <div id="aboutUsBody">
                <p id="bodyTitle" class="bodyText">案例与业绩</p>
                <hr id="hr1">
                
                <p style="font-size: 20px">使用搜索引擎查找案例</p>

                <b-container style="text-align: center">
                    <b-row>
                        <b-col>
                            <b-form-input v-model="keyword" 
                                type="text"
                                placeholder="输入关键字"></b-form-input>
                        </b-col>
                        <b-col>
                            <b-form-radio-group id="btnradios1"
                                buttons
                                button-variant="outline-primary"
                                v-model="selected"
                                :options="options"
                                name="radiosBtnDefault" />
                        </b-col>
                    </b-row>
                </b-container>

                <br/>
                <div id="cardsDiv">
                    <template v-for="obj in dummyList">
                        <div :key="obj.id">
                            <div class="singleCardDiv">
                                <b-container>
                                    <b-row>
                                        <b-col cols="1">
                                            <div class="leftDate">
                                                <p class="monthText">{{getMonth(obj.date)}}</p>
                                                <p class="yearText">{{getYear(obj.date)}}</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="1">
                                            <div style="border-right:2px solid gray;height:70px;margin-top:15px"></div>
                                        </b-col>
                                        <b-col>
                                            <div class="rightTitle">
                                                <p class="cardTitleText">{{obj.title}}</p>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </div>
                            <br/><br/>
                        </div>
                    </template>
                </div>
            </div>
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
      headerImg: require('@/assets/caseImg.jpg'),
      keyword: '',
      selected: '',
      options: [
        {text: '2018', value: '2018'},
        {text: '2017', value: '2017'},
        {text: '2016', value: '2016'},
        {text: '更早年份', value: '更早年份'}
      ],
      dummyList: [],
      oriDummyList: [
        {date: '2017-10-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊1'},
        {date: '2017-10-3', title: '好长的一串2017年业绩的标题啊啊啊啊啊2'},
        {date: '2016-09-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊3'},
        {date: '2016-08-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊4'},
        {date: '2018-12-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊5'},
        {date: '2018-10-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊6'},
        {date: '2013-10-2', title: '好长的一串2017年业绩的标题啊啊啊啊啊7'}
      ]
    }
  },

  created: function () {
    // window.scrollTo(0, 0)
    this.selected = '2018'
  },

  watch: {
    selected: function () {
      this.dummyList = []
      for (var i = 0; i < this.oriDummyList.length; i++) {
        var subDate = this.oriDummyList[i].date.substring(0, this.oriDummyList[i].date.indexOf('-'))
        if (this.selected !== '更早年份') {
          if (subDate === this.selected) {
            this.dummyList.push(this.oriDummyList[i])
          }
        } else {
          if (subDate < '2016') {
            this.dummyList.push(this.oriDummyList[i])
          }
        }
      }
    }
  },

  computed: {
    btnStates () {
      return this.buttons.map(btn => btn.state)
    }
  },

  methods: {
    getYear: function (theDate) {
      return theDate.substring(0, theDate.indexOf('-'))
    },

    getMonth: function (theDate) {
      var delYear = theDate.substring(theDate.indexOf('-'), theDate.length)
      return delYear.substring(1, theDate.indexOf('-') - 1)
    }
  }
}
</script>

<style scoped>
.cardTitleText {
    font-size: 24px;
    margin-top: 30px;
}

.monthText {
    font-size: 40px;
    line-height: 10px;
}

.yearText {
    font-size: 20px;
    line-height: 15px;
}

.leftDate {
    margin-top: 35px;
    margin-left: 40px;
    height: 100px;
    width: 100px;
}

.rightTitle {
    height: 100px;
}

.singleCardDiv {
    margin: auto;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    border-color: rgb(34, 153, 250);
    color: rgb(34, 153, 250);
    margin-left: 20px;
    margin-right: 20px;
    height: 100px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
}

.singleCardDiv:hover {
    cursor: pointer;
    background-color: rgb(34, 153, 250);
    color: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3); 
}

#aboutUsBody {
    margin-left: 100px;
    margin-right: 100px;
}

#hr1 {
    border-width: 3px;
    margin-top: 0px;
}

#bodyTitle {
    margin-top: 10px;
    vertical-align: bottom;
    font-size: 20px;
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

#buttons {
    color: white;
    cursor: pointer;
    text-decoration: none;
}
.buttons:hover {
    cursor: pointer;
}
</style>
