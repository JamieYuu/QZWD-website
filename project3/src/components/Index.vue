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

        <br/>

        <b-container style="text-align: center">
            <b-row>
              <b-col></b-col>
              <b-col>
                <p style="font-size: 30px">新闻</p>
              </b-col>
              <b-col>
                <p style="font-size: 30px">业绩</p>
              </b-col>
              <b-col></b-col>
            </b-row>
          </b-container>
    <br/>
    <hr/>
    <theBottom />
    </div>
  
</template>

<script>
export default {
  data () {
    return {
      currentPage: 3,
      slide: 0,
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      indexImg1: require('@/assets/indexImg1.png'),
      indexImg2: require('@/assets/indexImg2.jpg'),
      indexImg3: require('@/assets/indexImg3.jpg'),
      wxImg: require('@/assets/wx.jpeg')
    }
  },

  components: {

  },

  methods: {

  }
}
</script>

<style scoped>
hr {
  border-width: 3px;
  margin-left: 100px;
  margin-right: 100px;
}

#wholePage {
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
