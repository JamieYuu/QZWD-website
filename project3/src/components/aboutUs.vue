<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">关于我们</p>
                </div>
            </div>

            <div id="aboutUsBody">
                <p id="bodyTitle" class="bodyText">关于我们</p>
                <hr id="hr1">
                <div id="introText">
                    <p class="bodyText">{{aboutUsText}}</p>
                </div>
                <br/>
                <hr id="hr1">
                <br/>
            </div>

            <div id="threeCollapse" role="tablist">
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion1 variant="info">视野与价值</b-btn>
                </b-card-header>
                <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <p class="card-text">
                        {{ viewText }}
                    </p>
                    </b-card-body>
                </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-btn block href="#" v-b-toggle.accordion2 variant="info">荣誉奖项</b-btn>
                </b-card-header>
                <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <p class="card-text">
                        {{ honerText }}
                    </p>
                    </b-card-body>
                </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion3 variant="info">求正沃德历史</b-btn>
                </b-card-header>
                <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                    <p class="card-text">
                        {{ historyText }}
                    </p>
                    </b-card-body>
                </b-collapse>
                </b-card>
            </div>

            <br/>
            <br/>
            <hr id="hr1">
            <br/>

        </div>

    </div>
  
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      indexImg1: require('@/assets/indexImg1.jpg'),
      indexImg2: require('@/assets/indexImg2.jpg'),
      indexImg3: require('@/assets/indexImg3.jpg'),
      headerImg: require('@/assets/aboutUsImg2.jpeg'),
      wxImg: require('@/assets/wx.jpeg'),
      aboutUsText: '',
      viewText: '',
      honerText: '',
      historyText: '',
      text: '江西求正沃德律师事务所江西求正沃德律师事务所江西求正沃德律师事务所江西求正沃德律师事务所'
    }
  },

  computed: {
  },

  methods: {

  },

  created: function () {
    this.firebaseRef.child('AboutUs/mainText').on('value', (datasnap) => {
      this.aboutUsText = datasnap.val()
    })
    this.firebaseRef.child('AboutUs/view').on('value', (datasnap) => {
      this.viewText = datasnap.val()
    })
    this.firebaseRef.child('AboutUs/honer').on('value', (datasnap) => {
      this.honerText = datasnap.val()
    })
    this.firebaseRef.child('AboutUs/history').on('value', (datasnap) => {
      this.historyText = datasnap.val()
    })
  }
}
</script>

<style scoped>
#threeCollapse {
    margin-left: 200px;
    margin-right: 200px;
}

#hr1 {
    margin-left: 200px;
    margin-right: 200px;
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
