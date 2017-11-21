<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="carousel">
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
        >
        <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg1">
          <div id="imgCards">
            <b-card>
                    <h3 class="card-text-header">这是大标题</h3>
                    <p class="card-text-description">这是描述内容</p>
                    <b-button variant="primary">
                      点击跳转
                    </b-button>
            </b-card>
          </div>
        </b-carousel-slide>
      
        <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg2">
          <div id="imgCards">
            <b-card>
                    <h3 class="card-text-header">这是大标题</h3>
                    <p class="card-text-description">这是小标题</p>
                    <b-button variant="primary">
                      点击跳转
                    </b-button>
            </b-card>
          </div>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide caption=""
                        text=""
                        :img-src="indexImg3">
          <div id="imgCards">
            <b-card>
                    <h3 class="card-text-header">这是大标题</h3>
                    <p class="card-text-description">这是小标题</p>
                    <b-button variant="primary">
                      点击跳转
                    </b-button>
            </b-card>
          </div>
        </b-carousel-slide>
        </b-carousel>
      </div>
      
        </div>

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
      indexImg1: require('@/assets/indexImg1.jpg'),
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
#wholePage {
    background-color: gray;
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

.card-text-header {
  color: black; 
}

.card-text-description {
  color: black; 
}

#imgCards {
    text-align: left;
    opacity: 0.8;
    position: fixed;
    left: 0px;
    top: 500px;
    z-index: 3;
    width: 500px;
}
</style>
