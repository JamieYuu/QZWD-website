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
                <p><router-link to="/all-business">业务领域 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> {{theBusiness.title}}</p>
            </div>
            <hr id="hr1">

            <div id="mainBodyText">
                <div id="bodyLeftPart">
                    <div style="text-align: center;">
                        <p class="mainBodyTextTitle">{{theBusiness.bigTitle}}</p>
                    </div>
                    <p class="mainBodyTextInf">{{theBusiness.mainBody}}</p>
                </div>

                <div>
                    <hr id="hr3">
                    <div class="teamDiv">
                        <p class="mainBodyTextTitle">我们的团队</p>
                        <div class="teamDesText">
                            <p>{{theBusiness.teamDes}}</p>
                        </div>
                    </div>
                </div>

                <hr id="hr3">

                <p class="interestTitle">更多细节</p>
                <b-tabs card>
                    <template v-for="list in theBusiness.lists">
                        <b-tab :key="list.id" :title="list.subtitle" active>
                            <br>
                            <div class="tabsDesDiv">
                                <p>{{list.description}}</p>
                            </div>
                        </b-tab>
                    </template>
                </b-tabs>

                <br/>
                <hr id="hr3">
                <p class="interestTitle">您可能想要了解</p>
                <br/>

                <b-container>
                    <b-row>
                        <template v-for="obj in relArticles">
                        <b-col :key="obj.id">
                            <div>
                                <b-card>
                                    <p style="font-weight: 500; font-size: 16px">{{obj.title}}</p>
                                    <div class="relArtDesDiv">
                                    <p style="font-size: 14px" class="card-text">
                                        {{obj.des}}
                                    </p>
                                    </div>
                                    <br/>
                                    <p id="publishTime">{{obj.date}}</p>
                                    <router-link :to="relArtUrl(obj.url)">详细内容 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                                </b-card>
                            </div>
                        </b-col>
                        </template>
                    </b-row>
                </b-container>

                <br/>
                <br/>
                <hr id="hr3">
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
        }
      }
      this.relArticles.reverse()
      this.relArticles.splice(4)
    })

    var imgPathName = 'Business/' + pathName + '.jpg'
    this.fireStorageRef.child(imgPathName).getDownloadURL().then((url) => {
      this.headerImgUrl = url
    })
  }
}
</script>

<style scoped>
.tabsDesDiv {
    min-height: 100px;
}

.teamDiv {
    min-height: 200px;
}

.teamDesText {
    width: 100px;
    margin-right: 100px;
}

.interestTitle {
    font-size: 24px;
}

.relArtDesDiv {
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
}

#publishTime {
    font-size: 10px;
    font-style: italic;
}

.lawyerDescription {
    font-size: 14px;
}

#bodyLeftPart {
    min-height: 600px;
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
