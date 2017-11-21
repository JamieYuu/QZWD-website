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
                        <b-btn variant="link" id="buttons">律所文化和党建</b-btn>
                    <b-collapse id="ywlyCL">
                        <b-card id="ywlyDD">
                            <table id="ywlyDDtable">
                                <tbody>
                                <tr>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/all-business">全部</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/business/competition-trade-Supervision">竞争,贸易与监管</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons">私募股权</b-btn></td>
                                </tr>
                                <tr>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/business/intellectual-property">知识产权</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/business/real-estate">房地产</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons">争议解决与诉讼</b-btn></td>
                                </tr>
                                <tr>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/business/bank-finance">银行与融资</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons">破产重组</b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons">税务</b-btn></td>
                                </tr>
                                <tr>
                                    <td><b-btn variant="link" id="tablebuttons"><router-link id="buttons" to="/business/arbitration">仲裁</router-link></b-btn></td>
                                    <td><b-btn variant="link" id="tablebuttons">证券</b-btn></td>
                                </tr>
                                </tbody>
                            </table>
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

    <router-view></router-view>

    <div id="indexBottomInfo">
            <b-container>
                <b-row>
                    <b-col></b-col>
                    <b-col>
                        <div id="wx2wmpart">
                            <i class="fa fa-weixin fa-2x"></i>
                            <b-img id="wx2wm" :src="wxImg" />
                        </div>
                    </b-col>
                    <b-col cols="5">
                        <div id="declearation">
                            <br/>
                            <p id="decText">版权所有:江西求正沃德律师事务所</p>
                            <p id="decText">Email: qz.jz.lawfirm@163.com</p>
                            <p id="decText">技术支持:Jiazheng Yu <i class="fa fa-envelope" aria-hidden="true"></i> jzjaimeyu@gmail.com</p>
                            <p id="decText">@江西求正沃德律师事务所 2017. 赣ICP备 06003918号</p>
                        </div>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
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
      currentPage: 3,
      slide: 0,
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      wxImg: require('@/assets/wx.jpeg'),
      config: {
        apiKey: 'AIzaSyBu-mEfUAvkg2MDn2KBJ_mk1OwGIEb5PMo',
        authDomain: 'qzwdproject.firebaseapp.com',
        databaseURL: 'https://qzwdproject.firebaseio.com',
        projectId: 'qzwdproject',
        storageBucket: 'qzwdproject.appspot.com',
        messagingSenderId: '150000319769'
      }
    }
  },

  created: function () {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.config)
    }
    let ckeditor = document.createElement('script')
    let firebaseEditor = document.createElement('script')

    firebaseEditor.setAttribute('src', 'https://www.gstatic.com/firebasejs/4.6.2/firebase.js')
    ckeditor.setAttribute('src', 'https://use.fontawesome.com/c17a47c7ea.js')

    document.head.appendChild(ckeditor)
    document.head.appendChild(firebaseEditor)
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
