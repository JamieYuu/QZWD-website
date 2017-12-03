<template>
  <div>
    <div id="indexheader">
                <div id="indexheaderbg"></div>
                <div id="headerButtons">
                        <b-btn variant="link" id="buttons"><router-link id="buttons" to="/">首页 <i class="fa fa-home"></i></router-link></b-btn>
                        <b-btn variant="link" id="buttons"><router-link id="buttons" to="/about-us">关于我们</router-link></b-btn>
                        <b-btn variant="link" id="buttons" v-b-toggle.ywlyCL class="m-1">业务领域 <i class="fa fa-caret-down" aria-hidden="true"></i></b-btn>
                        <b-btn variant="link" id="buttons"><router-link id="buttons" to="/staffs">律师团队</router-link></b-btn>
                        <b-btn variant="link" id="buttons">成功案例</b-btn>
                        <b-btn variant="link" id="buttons" v-b-toggle.newsCL><router-link id="buttons" to="/articles-and-news">新闻与文章</router-link></b-btn>
                    <b-collapse id="ywlyCL">
                        <b-card id="ywlyDD">
                            <b-container id="ywlyDDtable">
                                <b-row>
                                <b-col>
                                    <b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/all-business">全部</router-link></b-btn>
                                </b-col>
                                <template v-for="list in lists">
                                    <b-col :key="list.id">
                                        <b-btn variant="link" id="tablebuttons"><router-link id="buttons" :to="list.path">{{list.title}}</router-link></b-btn></b-col>
                                    </b-col>
                                </template>
                                </b-row>
                            </b-container>
                        </b-card>
                    </b-collapse>
                </div>
                <div id="headerNameText">
                    <p id="topText"> 全    国    优    秀    律    师    事    务    所</p>
                    <h1 id="midText">江西求正沃德律师事务所</h1>
                    <p id="botText">{{infoP}}</p>
                </div>
                <router-link to="/" tag="div" id="indexheaderlogo">
                    <b-img id="logoimg" :src="logoURL" />
                </router-link>
            </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      business: {},
      lists: []
    }
  },

  created: function () {
    this.firebaseRef.child('Business').on('value', (datasnap) => {
      this.business = datasnap.val()
      for (var ele in this.business) {
        this.lists.push(
          { title: this.business[ele].title, path: '/the-business/:' + this.business[ele].title }
        )
      }
    })
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style>
#tablebuttons {
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
}

#tablebuttons:hover {
    color: rgb(6, 132, 228);
}

#ywlyDD {
    z-index: 3;
    background-color: black;
    width: 400px;
    height: 180px;
    left: 40px;
}

#newsDD {
    z-index: 3;
    background-color: black;
    width: 320px;
    height: 60px;
    left: 370px;
}

#logoimg {
    width: 120px;
    height: 120px;
}

#indexheaderlogo {
    position: absolute;
    z-index: 3;
    top: 121px;
    right: 55px;
    width: 120px;
    height: 120px;
    box-shadow: 3px 3px 2px black;
}

#buttons:hover {
    color: rgb(6, 132, 228);
}

#indexheaderbg {
    background-color: black;
    opacity: 0.7;
    top: 20px;
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 2;
}

#wx2wmpart {
    display: table-cell;
}

#wx2wm {
    width: 120px;
    height: 120px;
    line-height: 0px;
}

#declearation {
    display: table-cell;
    font-size: 14px;
    z-index: 3;
}

#decText {
    line-height: 5px;
}

#indexBottomInfo {
    width: 100%;
    height: 12  0px;
    z-index: 3;
    background-color: white;
}

#topText {
    color: red;
    font-style: italic;
    white-space: pre;
}

#midText {
    font-size: 30px;
    line-height: 5px;
}

#botText {
    white-space: pre;
}

#headerNameText {
    position: absolute;
    top: 30px;
    right: 50px;
    color: white;
    z-index: 3;
}

#buttons {
    color: white;
    cursor: pointer;
    text-decoration: none;
}

#headerButtons {
    color: white;
    z-index: 3;
    position: absolute;
    left: 0px;
    top: 70px;
}

#indexheaderlogotext {
    color: white;
    font-size: 20px;
    text-align: center;
}

#testText {
  z-index: 5;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
