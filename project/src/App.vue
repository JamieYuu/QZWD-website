<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

export default {
  data () {
    return {
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
