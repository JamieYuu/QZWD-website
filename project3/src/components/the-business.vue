<template>
    <div id="wholePage">
        <theHeader/>

        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImgUrl"/>
                <b-btn variant="primary" id="aboutUsTextDiv" class="md-elevation-7">{{theBusiness.title}}</b-btn>
            </div>

            <br/>
            <div id="suoying">
                <p><router-link to="/allBusiness">业务领域 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> {{theBusiness.title}}</p>
            </div>
            <hr id="hr1">

            <div id="mainBodyText">
                <b-container>
                    <b-row>
                        <b-col>
                            <div id="bodyLeftPart">
                            <p class="mainBodyTextTitle">{{theBusiness.bigTitle}}</p>
                            <template v-for="n in 9">
                                <p class="mainBodyTextInf" :key="n">{{theBusiness.mainBody}}</p>
                            </template>
                            </div>
                        </b-col>

                        <b-col cols="5">
                            <p class="mainBodyTextTitle">我们的团队</p>
                            <div>
                                <template v-for="n in 3">
                                <div :key="n">
                                    <b-card title="律师姓名" 
                                            sub-title="律师职位">
                                        <p>邮箱: aaa@gmail.com</p>
                                        <p>电话: 1243125315125</p>
                                    </b-card>
                                <br/>
                                </div>
                                </template>
                            </div>

                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <hr id="hr3">
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <b-tabs card>
                                <template v-for="list in theBusiness.lists">
                                <b-tab :key="list.id" :title="list.subtitle" active>
                                    <br>
                                    <p>{{list.description}}</p>
                                </b-tab>
                                </template>
                            </b-tabs>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col>
                            <br/>
                            <hr id="hr3">
                            <br/>
                        </b-col>
                    </b-row>

                    <b-row>
                        <template v-for="obj in relArticles">
                        <b-col :key="obj.id">
                            <div>
                                <b-card :title="obj.title">
                                    <p style="font-size: 14px" class="card-text">
                                        {{obj.des}}
                                    </p>
                                    <p id="publishTime">{{obj.date}}</p>
                                    <router-link :to="relArtUrl(obj.url)">详细内容 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                                </b-card>
                            </div>
                        </b-col>
                        </template>
                    </b-row>

                    <b-row>
                        <b-col>
                            <br/>
                            <br/>
                            <hr id="hr3">
                        </b-col>
                    </b-row>
                </b-container>
            </div>

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
      fireStorageRef: firebase.storage().ref(),
      theBusiness: {},
      businesses: {},
      relArticles: [],
      headerImgUrl: null
    }
  },

  components: {

  },

  methods: {
    relArtUrl: function (url) {
      return '/news/the-article/:' + url
    }
  },

  watch: {
    '$route.params.id': function () {
      location.reload()
    }
  },

  created: function () {
    console.log('created')
    var pathName = this.$route.params.id.slice(1)

    this.firebaseRef.child('Business').on('value', (datasnap) => {
      this.businesses = datasnap.val()

      for (var ele in this.businesses) {
        if (this.businesses[ele].title === pathName) {
          this.theBusiness = this.businesses[ele]
          break
        }
      }
    })

    this.firebaseRef.child('Ariticles').on('value', (datasnap) => {
      var articles = datasnap.val()
      for (var articleObj in articles) {
        if (Object.values(articles[articleObj].type).indexOf(pathName) > -1) {
          articles[articleObj].url = articleObj
          this.relArticles.push(articles[articleObj])
          if (this.relArticles.length >= 4) {
            break
          }
        }
      }
    })

    var imgPathName = 'Business/' + pathName + '.jpg'
    this.fireStorageRef.child(imgPathName).getDownloadURL().then((url) => {
      this.headerImgUrl = url
    })
  }
}
</script>

<style scoped>
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
    font-size: 26px;
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
