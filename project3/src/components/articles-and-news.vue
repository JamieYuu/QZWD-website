<template>
    <div id="wholePage">
        <theHeader />
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <b-btn variant="primary" id="aboutUsTextDiv" class="md-elevation-7">新闻与文章</b-btn>
            </div>

            <div id="aboutUsBody">
                <p id="bodyTitle" class="bodyText">新闻与文章</p>
                <hr id="hr1">
                <p style="font-size: 30px">文章</p>

                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">查阅我们对影响您业务的法律问题的最新见解</p>
                                <b-btn variant="outline-primary" class="buttons" @click="toWZurl">查阅更多文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <template v-for="obj in wzArticles">
                            <b-col :key="obj.id">
                                <p class="articleTitle">{{obj.title}}</p>
                                <p class="articleDate">{{obj.date}}</p>
                                <p class="articleDes">{{obj.des}}</p>
                                <router-link :to="theUrl(obj.url)">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                            </b-col>
                            </template>
                        </b-row>
                    </b-container>
                    <br/>
                </div>

                <br/>
                <hr id="hr1">

                <p style="font-size: 30px">事务所新闻</p>
                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">最新的求正沃德新闻与发展</p>
                                <b-btn variant="outline-primary" class="buttons" @click="toSWSXWurl">查阅更多新闻 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <template v-for="obj in swsxwArticles">
                            <b-col :key="obj.id">
                                <p class="articleTitle">{{obj.title}}</p>
                                <p class="articleDes">{{obj.des}}</p>
                                <p class="articleDate">{{obj.date}}</p>
                                <router-link :to="theUrl(obj.url)">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                            </b-col>
                            </template>
                        </b-row>
                    </b-container>
                    <br/>
                </div>

                <br/>
                <hr id="hr1">

                <p style="font-size: 30px">法规解读</p>
                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">最新的法律法规解读</p>
                                <b-btn variant="outline-primary" class="buttons" @click="toFGJDurl">更多法规解读 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <template v-for="obj in fgjdArticles">
                            <b-col :key="obj.id">
                                <p class="articleTitle">{{obj.title}}</p>
                                <p class="articleDes">{{obj.des}}</p>
                                <p class="articleDate">{{obj.date}}</p>
                                <router-link :to="theUrl(obj.url)">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                            </b-col>
                            </template>
                        </b-row>
                    </b-container>
                    <br/>
                </div>
                <br/>
                <hr id="hr1">
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
      headerImg: require('@/assets/KLDImg.jpg'),
      articles: {},
      wzArticles: [],
      swsxwArticles: [],
      fgjdArticles: []
    }
  },

  components: {

  },

  computed: {

  },

  created: function () {
    window.scrollTo(0, 0)

    this.firebaseRef.child('Ariticles').on('value', (datasnap) => {
      var some = datasnap.val()
      this.articles = some
      for (var obj in this.articles) {
        var objArt = this.articles[obj]
        if (objArt.ZL === 'WZ') {
          objArt.url = obj
          this.wzArticles.push(objArt)
        }
        if (objArt.ZL === 'SWSXW') {
          objArt.url = obj
          this.swsxwArticles.push(objArt)
        }
        if (objArt.ZL === 'FGJD') {
          objArt.url = obj
          this.fgjdArticles.push(objArt)
        }
      }
      this.wzArticles.reverse()
      this.wzArticles.splice(4)
      this.swsxwArticles.reverse()
      this.swsxwArticles.splice(4)
      this.fgjdArticles.reverse()
      this.fgjdArticles.splice(4)
    })
  },

  methods: {
    theUrl: function (obj) {
      var url = '/news/the-article/:' + obj
      return url
    },

    toWZurl: function () {
      this.$router.push('/news/article-type/:WZ')
    },

    toSWSXWurl: function () {
      this.$router.push('/news/article-type/:SWSXW')
    },

    toFGJDurl: function () {
      this.$router.push('/news/article-type/:FGJD')
    }
  }
}
</script>

<style scoped>
.links:hover {
    color: white;
}

.articleTitle {
    color: gray;
    font-size: 20px;
}

.articleDes {
    color: gray;
    font-size: 14px;
}

.articleDate {
    color: gray;
    font-size: 12px;
    font-style: italic;
}

#threeCollapse {
    margin-left: 200px;
    margin-right: 200px;
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
}

.buttons:hover {
    cursor: pointer;
}
</style>
