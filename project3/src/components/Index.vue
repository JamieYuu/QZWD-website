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
                <p style="font-size: 30px; white-space: pre;">     新闻</p>
              </b-col>
              <b-col></b-col><b-col></b-col>
              <b-col>
                <p style="font-size: 30px; white-space: pre;">     业绩</p>
              </b-col>
              <b-col></b-col>
            </b-row>
            <b-row>
              <b-col>
                <ul style="list-style: none;">
                  <li>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                  </li>
                </ul>
              </b-col>
              <b-col>
                <ul style="list-style: none;">
                  <li>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                    <b-card title="文章标题"
                        sub-title="10/10/2017">
                      <p class="card-text">
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                      </p>
                      <router-link to="/">阅读详情 <i class="fa fa-chevron-right" aria-hidden="true"></i></router-link>
                    </b-card>
                    <br/>
                  </li>
                </ul>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-btn variant="warning" id="lookMore" class="buttons">查看更多</b-btn>
              </b-col>
            </b-row>
          </b-container>

          <div>
            
          </div>
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
#lookMore {
  border-radius: 60px;
  color: white
}

.buttons:hover {
  cursor: pointer;
}

hr {
  border-width: 3px;
  margin-left: 100px;
  margin-right: 100px;
}

#wholePage {
    height: 100%;
    background-color: rgb(240, 240, 240)
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
