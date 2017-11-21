<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">银行与融资</p>
                </div>
            </div>

            <br/>
            <div id="suoying">
                <p><router-link to="/allBusiness">业务领域 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> 银行与融资</p>
            </div>
            <hr id="hr1">

            <div id="mainBodyText">
                <b-container>
                    <b-row>
                        <b-col>
                            <div id="bodyLeftPart">
                            <p class="mainBodyTextTitle">这是大标题</p>
                            <template v-for="n in 9">
                                <p class="mainBodyTextInf" :key="n">保护您的知识产权投资保护您的知识产权投资保护您的知识产权投资保护您的知识产权投资保护您的知识产权投资保护您的知识产权投资保护您的知识产权投资</p>
                            </template>
                            </div>
                        </b-col>

                        <b-col cols="5">
                            <p class="mainBodyTextTitle">我们的团队</p>
                            <div>
                                <template v-for="n in 3">
                                <div :key="n">
                                <b-card>
                                    <b-media no-body>
                                        <b-media-aside vertical-align="center">
                                            <b-img blank blank-color="#ccc" width="128" height="128" alt="placeholder" />
                                        </b-media-aside>

                                        <b-media-body class="ml-3">
                                        <h6 class="mt-0">律师名字</h6>
                                        <p class="lawyerDescription">律师职位</p>
                                        <p class="lawyerDescription">律师介绍</p>
                                        <p class="lawyerDescription">电话 12345678</p>
                                        </b-media-body>
                                    </b-media>
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
                            <b-tabs>
                                <b-tab title="细则1" active>
                                    <br>
                                    <template v-for="n in 5">
                                    <p :key="n">一些描述1</p>
                                    </template>
                                </b-tab>
                                <b-tab title="细则2" active>
                                    <br>
                                    <template v-for="n in 3">
                                    <p :key="n">一些描述2</p>
                                    </template>
                                </b-tab>
                                <b-tab title="细则3" active>
                                    <br>
                                    <template v-for="n in 6">
                                    <p :key="n">一些描述3</p>
                                    </template>
                                </b-tab>
                                <b-tab title="细则4" active>
                                    <br>
                                    <template v-for="n in 5">
                                    <p :key="n">一些描述4</p>
                                    </template>
                                </b-tab>
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
                        <template v-for="n in 4">
                        <b-col :key="n">
                            <div>
                                <b-card title="文章">
                                    <p style="font-size: 14px" class="card-text">
                                        文章的简单描述
                                    </p>
                                    <p id="publishTime">2017/11/12</p>
                                    <b-btn variant="outline-primary" class="card-link">详细内容 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
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

    </div>
  
</template>

<script>
export default {
  data () {
    return {
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      headerImg: require('@/assets/BFImg.jpg'),
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
