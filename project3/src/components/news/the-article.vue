<template>
    <div id="wholePage">
        <div id="indexbody">
            <theHeader />

            <br/><br/><br/><br/><br/><br/><br/><br/>
            <p id="headerTitle">{{theArticle.title}}</p>
            <div id="suoying">
                <p><router-link to="/articles-and-news">新闻与文章 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> <router-link :to="toArtType(theArticle.ZL)"> {{articleTyle(theArticle.ZL)}}</router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> {{theArticle.title}}</p>
            </div>
            <hr id="hr1">

            <div id="mianText">
                <b-container>
                    <b-row>
                        <b-col>
                            <br/>
                            <div id="leftTextDiv">
                            <p class="authorInf">作者: {{theArticle.author}}律师     发布时间: {{theArticle.date}}</p>
                            <p class="bodyText">{{theArticle.information}}</p>
                            </div>
                        </b-col>

                        <b-col cols="5">
                            <p style="font-size: 20px;"> 作者介绍: {{theArticle.author}} 律师</p>
                            <p>联系方式: {{theArticle.authorPhone}} | {{theArticle.authorEmail}}</p>
                            <p>{{theArticle.authorDes}}</p>
                        </b-col>
                    </b-row>
                </b-container>
                <br/>
                <p>类别: 
                    <template v-for="ele in theArticle.type">
                        | 
                        <router-link :key="ele.id" :to="typeUrl(ele)">{{ele}}</router-link>
                         |
                    </template>
                </p>
            </div>

            <hr id="hr1">

            <div id="mianText">
                <p style="font-size: 24px">您可能感兴趣</p>
                <br/>
                <b-container>
                    <b-row>
                        <template v-for="ele in relArticles">
                        <b-col :key="ele.id">
                            <p class="articleTitle">{{ele.title}}</p>
                            <p class="articleDes">{{ele.des}}</p>
                            <p class="articleDate">{{ele.date}}</p>
                            <router-link :to="getRelUrl(ele.url)">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                        </b-col>
                        </template>
                    </b-row>
                </b-container>
            </div>

            <br/>
            <hr id="hr1">

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
      form: {
        keyword: '',
        select: null,
        startDate: null,
        endDate: null
      },
      theArticle: {},
      articles: {},
      relArticles: [],
      types: {},
      urlID: ''
    }
  },

  components: {

  },

  watch: {
    '$route.params.id': function () {
      location.reload()
    }
  },

  methods: {
    articleTyle: function (theType) {
      var type = ''
      switch (theType) {
        case 'WZ' : type = '文章'
          break
        case 'FGJD' : type = '法规解读'
          break
        case 'SWSXW' : type = '事务所新闻'
          break
      }
      return type
    },

    toArtType: function (theType) {
      return '/news/article-type/:' + theType
    },

    typeUrl (theType) {
      return '/the-business/:' + theType
    },

    getRelUrl (theUrl) {
      return '/news/the-article/:' + theUrl
    }
  },

  created: function () {
    console.log('created')

    var pathName = 'Ariticles/' + this.$route.params.id.slice(1)
    this.urlID = this.$route.params.id.slice(1)

    this.firebaseRef.child(pathName).on('value', (datasnap) => {
      this.theArticle = datasnap.val()
      this.types = this.theArticle.type

      this.firebaseRef.child('Ariticles').on('value', (datasnap) => {
        this.articles = datasnap.val()

        for (var theType in this.types) {
          for (var theArt in this.articles) {
            if (Object.values(this.articles[theArt].type).indexOf(this.types[theType]) > -1) {
              this.articles[theArt].url = theArt
              this.relArticles.push(this.articles[theArt])
              delete this.articles[theArt]
              if (this.relArticles.length >= 4) {
                break
              }
            }
          }
        }

        for (var i = 0; i < this.relArticles.length; i++) {
          if (this.relArticles[i].title === this.theArticle.title) {
            this.relArticles.splice(i, 1)
            break
          }
        }
      })
    })
  }
}
</script>

<style scoped>
#leftTextDiv {
    border-right: thin solid gray;
}

.authorInf {
    font-style: italic;
    color: gray;
    font-size: 14px;
}

#mianText {
    margin-left: 100px;
    margin-right: 100px;
}

#headerTitle {
    font-size: 30px;
    margin-left: 100px;
    margin-right: 100px;
}

#articleDiv {
    margin-left: 100px;
    margin-right: 100px;
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
    font-size: 16px;
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
