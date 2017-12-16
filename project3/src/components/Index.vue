<template>
    <div id="wholePage">
      <theHeader />
        <div id="indexbody">

          <div id="carousel">
            <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="3000"
                v-model="slide"
            >
            <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg1">
            </b-carousel-slide>
      
            <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg2">
            </b-carousel-slide>

            <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg3">
            </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
        <hr/>

        <div class="newsAndBus">
        <b-container style="text-align: center">
            <b-row>
              <b-col>
                <p style="font-size: 30px; white-space: pre;">    新闻</p>
              </b-col>
              <b-col>
                <p style="font-size: 30px; white-space: pre;">    业绩</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <ul style="list-style: none;">
                  <li>
                    <template v-for="obj in articles">
                    <div :key="obj.id">
                    <b-card :title="obj.title"
                        title-tag = "h6"
                        :sub-title="obj.date">
                      <div class="desDiv">
                      <p class="card-text">
                        {{obj.des}}
                      </p>
                      </div>
                      <router-link :to="getArtUrl(obj.url)">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    </div>
                    </template>
                  </li>
                </ul>
              </b-col>
              <b-col>
                <ul style="list-style: none;">
                  <li>
                    <template v-for="obj in cases">
                    <div :key="obj.id">
                    <b-card :title="obj.title"
                        title-tag = "h6"
                        :sub-title="obj.date">
                      <div class="desDiv">
                      <p class="card-text">承办律师: {{obj.lawyer}}</p>
                      <p class="card-text">联系方式: {{obj.lawyerPhone}} | {{obj.lawyerEmail}}</p>
                      </div>
                      <router-link :to="getCaseUrl(obj.url)">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    </div>
                    </template>
                  </li>
                </ul>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-btn variant="warning" id="lookMore" class="buttons md-elevation-3" @click="lookMore">查看更多</b-btn>
              </b-col>
            </b-row>
          </b-container>
          </div>
          
          <br/><br/>

          <div class="workPlace">
            <br/>
            <p style="font-size: 28px">办公地点</p>
            <div class="workPlaceDiv">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion1 variant="info">南昌市红谷滩总部</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="map-text">江西省南昌市红谷滩碟子湖大道555号时间广场B座7楼</p>
                    <p class="map-text">联系电话: 0791-8620098 | 邮箱: qz.jz.lawfirm@163.com</p>
                    <div style="text-align: center">
                      <img width="800px" :src="pos1Img"/>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-btn block href="#" v-b-toggle.accordion2 variant="info">南昌市新建县分所</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <p class="map-text">江西省南昌市红谷滩碟子湖大道555号时间广场B座7楼</p>
                    <p class="map-text">联系电话: 0791-8620098 | 邮箱: qz.jz.lawfirm@163.com</p>
                    <div style="text-align: center">
                      <img width="800px" :src="pos1Img"/>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
          <br/>
    <theBottom />
    </div>
  
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      indexImg1: require('@/assets/indexImg1.png'),
      indexImg2: require('@/assets/indexImg2.jpg'),
      indexImg3: require('@/assets/indexImg3.jpg'),
      pos1Img: require('@/assets/pos1.png'),
      currentPage: 3,
      slide: 0,
      articles: [],
      cases: []
    }
  },

  created: function () {
    console.log('created')
    this.firebaseRef.child('Ariticles').once('value', (datasnap) => {
      var artObj = datasnap.val()
      for (var obj in artObj) {
        artObj[obj].url = obj
        this.articles.push(artObj[obj])
      }
      this.articles.reverse()
      this.articles.splice(3)
    })

    this.firebaseRef.child('Cases').once('value', (datasnap) => {
      var artObj = datasnap.val()
      for (var obj in artObj) {
        artObj[obj].url = obj
        this.cases.push(artObj[obj])
      }
      this.cases.reverse()
      this.cases.splice(3)
    })
  },

  components: {

  },

  methods: {
    getArtUrl: function (url) {
      return '/news/the-article/:' + url
    },

    getCaseUrl: function (url) {
      return '/cases/the-case/:' + url
    },

    lookMore: function () {
      this.$router.push('/articles-and-news')
    }
  }
}
</script>

<style scoped>
.map-text {
  line-height: 6px;
}

.workPlaceDiv {
  margin: auto;
  background-color: white;
  width: 1000px;
}

.workPlace {
  text-align: center;
  width: 100%;
  height: 800px;
  background-color: rgb(230, 230, 230);
}

.desDiv {
  width: 100%;
  height: 75px;
  overflow: hidden;
  text-overflow: clip;
}

#lookMore {
  border-radius: 60px;
  color: white
}

.buttons:hover {
  cursor: pointer;
}

hr {
  border-width: 3px;
  margin-left: 100px;
  margin-right: 100px;
}

#wholePage {
    height: 100%;
    /* background-color: rgb(240, 240, 240) */
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
