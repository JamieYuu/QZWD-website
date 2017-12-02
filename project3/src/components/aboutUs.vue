<template>
    <div id="wholePage">
        <theHeader />
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">关于我们</p>
                </div>
            </div>

            <template v-for="list in lists">
            <div :key="list.id" id="aboutUsBody">
                <p :id="list.text" class="bodyText">{{list.text}}</p>
                <hr id="hr1">
                <div class="imgDiv">
                    <b-img id="introImg" :src="list.imgSrc" />
                </div>
                <br/>
            </div>
            </template>

        </div>

        <div id="suoyinDiv">
            <b-container>
                <b-row><b-col><p><i class="fa fa-chevron-up" aria-hidden="true"></i></p></b-col></b-row>
                <b-row><b-col><p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></p></b-col></b-row>
            <template v-for="list in lists">
                <b-row :key="list.id"><b-col>
                    <p><b-btn variant="link" :href="getHref(list.text)">{{list.text}}</b-btn></p>
                </b-col></b-row>
            </template>
                <b-row><b-col><p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></p></b-col></b-row>
                <b-row><b-col><p><i class="fa fa-chevron-down" aria-hidden="true"></i></p></b-col></b-row>
            </b-container>
        </div>

        
        <b-btn variant="outline-secondary" id="returnBtn" href="#关于我们"><i class="fa fa-angle-up" aria-hidden="true"></i></b-btn>

        <br/>
        <hr id="hr1"/>
        <theBottom />
    </div>
  
</template>

<script>
export default {
  data () {
    return {
      headerImg: require('@/assets/aboutUsImg2.jpeg'),
      lsjjImg: require('@/assets/lsjj.png'),
      lists: [
        { text: '关于我们', imgSrc: require('@/assets/lsjj.png') },
        { text: '历程', imgSrc: require('@/assets/lcImg.png') },
        { text: '明法', imgSrc: require('@/assets/mfImg.png') },
        { text: '弘毅', imgSrc: require('@/assets/hyImg.png') },
        { text: '至诚', imgSrc: require('@/assets/zcImg.png') },
        { text: '聚合', imgSrc: require('@/assets/jhImg.png') },
        { text: '尚德', imgSrc: require('@/assets/sdImg.png') },
        { text: '求索', imgSrc: require('@/assets/qsImg.png') }
      ]
    }
  },

  computed: {
  },

  methods: {
    getHref: function (name) {
      var hrefPath = '#' + name
      return hrefPath
    }
  },

  created: function () {
  }
}
</script>

<style scoped>
#returnBtn {
    font-size: 18px;
    position: fixed;
    right: 20px;
    bottom: 20px;
}

#suoyinDiv {
    text-align: center;
    position: absolute;
    top: 650px;
    left: 20px;
    z-index: 1;
}

.imgDiv {
    margin-left: 200px;
    margin-right: 200px;
}

#introImg {
    width: 100%;
    height: 100%;
}

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
    display: inline-block;
    margin-left: 200px;
}

.bodyText {
    margin-top: 10px;
    vertical-align: bottom;
    font-size: 30px;
    padding-left: 200px;
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
