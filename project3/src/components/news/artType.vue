<template>
    <div id="wholePage">
        <div id="indexbody">
            <theHeader/>

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">{{pageTitle}}</p>
                </div>
            </div>

            <br/>
            <div id="suoying">
                <p><router-link to="/articles-and-news">新闻与文章 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> {{pageTitle}}</p>
            </div>
            <hr id="hr1">

            <div id="searchDiv">
                <p style="font-size: 24px; margin-left: 100px">文章筛选</p>
                <b-form>
                <b-container>
                    <b-row>
                        <b-col cols="1"></b-col>
                        <b-col>
                            <b-form-input id="keyWordInput"
                                type="text" v-model="keyword"
                                placeholder="请输入关键词">
                            </b-form-input>
                        </b-col>
                        <b-col cols="1"></b-col>
                    </b-row>
                    <br/>
                    <div class="datePicker">
                    <b-row>
                        <b-col cols="1"></b-col>
                        <b-col>
                            <p>以发布时间筛选文章:</p>
                        </b-col>
                        <b-col>
                            <flat-pickr v-model="startDate" placeholder="起始日期"></flat-pickr>
                        </b-col>
                        <b-col cols="1">至</b-col>
                        <b-col>
                            <flat-pickr v-model="endDate" placeholder="终止日期"></flat-pickr>
                        </b-col>
                    </b-row>
                    </div>
                </b-container>
                </b-form>
            </div>

            <hr id="hr1">

            <div id="articleDiv">
                <b-container>
                    <b-row>
                        <template v-for="obj in this.resArts">
                            <b-col :key="obj.id">
                                <div id="single-article">
                                    <p class="articleTitle">{{obj.title}}</p>
                                    <p class="articleDes">{{obj.des}}</p>
                                    <p class="articleDate">{{obj.date}}</p>
                                    <div style="text-align: center">
                                        <router-link :to="articleUrl(obj.url)">阅读 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                                    </div>
                                    <br/>
                                </div>
                            </b-col>
                        </template>
                    </b-row>
                    <template v-if="this.resArts.length === 0">
                        <b-row>
                            <b-col>
                                <div style="text-align: center">
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    <p class="emptyArray">搜索无结果</p>
                                </div>
                            </b-col>
                        </b-row>
                    </template>
                </b-container>
            </div>

            <hr id="hr1">

        </div>
        <theBottom/>
    </div>
  
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      headerImg: require('@/assets/KLDImg.jpg'),
      pageTitle: '',
      keyword: '',
      startDate: null,
      endDate: null,
      pathName: this.$route.params.id.slice(1),
      articles: {},
      articleAry: {},
      resArts: []
    }
  },

  watch: {
    keyword: function () {
      this.searchKeyword()
      if (this.startDate !== '') {
        this.searchStartDate()
      }
      if (this.endDate !== '') {
        this.searchEndDate()
      }
    },

    startDate: function () {
      this.searchKeyword()
      if (this.startDate !== '') {
        this.searchStartDate()
      }
      if (this.endDate !== '') {
        this.searchEndDate()
      }
    },

    endDate: function () {
      this.searchKeyword()
      if (this.startDate !== '') {
        this.searchStartDate()
      }
      if (this.endDate !== '') {
        this.searchEndDate()
      }
    }
  },

  created: function () {
    console.log('created')
    switch (this.pathName) {
      case 'WZ': this.pageTitle = '文章'
        break
      case 'SWSXW': this.pageTitle = '事务所新闻'
        break
      case 'FGJD': this.pageTitle = '法规解读'
        break
    }

    this.firebaseRef.child('Ariticles').on('value', (datasnap) => {
      this.articles = datasnap.val()
      for (var obj in this.articles) {
        if (this.articles[obj].ZL === this.pathName) {
          this.articles[obj].url = obj
          this.resArts.push(this.articles[obj])
          this.articleAry[obj] = this.articles[obj]
        }
      }
    })
  },

  methods: {
    articleUrl: function (url) {
      return '/news/the-article/:' + url
    },

    searchKeyword: function () {
      this.resArts = []
      if (this.keyword !== '') {
        for (var obj in this.articleAry) {
          if (this.articleAry[obj].title.includes(this.keyword) ||
              this.articleAry[obj].des.includes(this.keyword) ||
              Object.values(this.articleAry[obj].type).indexOf(this.keyword) > -1) {
            this.resArts.push(this.articleAry[obj])
          }
        }
      } else {
        for (var theObj in this.articleAry) {
          this.resArts.push(this.articleAry[theObj])
        }
      }
    },

    searchStartDate: function () {
      var newArray = []
      for (var i = 0; i < this.resArts.length; i++) {
        if (this.resArts[i].date >= this.startDate) {
          newArray.push(this.resArts[i])
        }
      }
      this.resArts = newArray
    },

    searchEndDate: function () {
      var newArray = []
      for (var i = 0; i < this.resArts.length; i++) {
        if (this.resArts[i].date <= this.endDate) {
          newArray.push(this.resArts[i])
        }
      }
      this.resArts = newArray
    }
  }
}
</script>

<style scoped>
.emptyArray {
    font-size: 36px;
    color: rgb(210, 210, 210);
    font-style: italic;
}

.datePicker {
    font-size: 18px;
}

#single-article {
    width: 300px;
}

.articleTitle {
    font-weight: 600;
    font-size: 16px;
}

.articleDes {
    font-size: 14px;
}

.articleDate {
    font-style: italic;
    font-size: 12px;
}

#linkButton:hover {
    color: white;
}

#articleDiv {
    margin-left: 100px;
    margin-right: 100px;
    min-height: 550px;
}

#publishTime {
    font-size: 10px;
    font-style: italic;
}

.lawyerDescription {
    font-size: 14px;
}

#bodyLeftPart {
    border-right: thin solid gray;
}

.mainBodyTextInf {
    color: gray;
}

.mainBodyTextTitle {
    font-size: 28px;
}

#mainBodyText {
    margin-left: 100px;
    margin-right: 100px;
}

#suoying {
    font-size: 24px;
    margin-left: 100px;
}

#aboutUsBody {

}

#hr3 {
    border-width: 3px;
    margin-top: 0px;
}

#hr1 {
    margin-left: 100px;
    margin-right: 100px;
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
