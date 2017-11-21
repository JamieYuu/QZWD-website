<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">新闻与文章</p>
                </div>
            </div>

            <div id="aboutUsBody">
                <p id="bodyTitle" class="bodyText">新闻与文章</p>
                <hr id="hr1">
                <p style="font-size: 30px">文章</p>

                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">查阅我们对影响您业务的法律问题的最新见解</p>
                                <b-btn variant="outline-primary"><router-link to="/news/articles" class="links">查阅更多文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                        </b-row>
                    </b-container>
                    <br/>
                </div>

                <br/>
                <hr id="hr1">

                <p style="font-size: 30px">事务所新闻</p>
                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">最新的求正沃德新闻与发展</p>
                                <b-btn variant="outline-primary">更多新闻 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                        </b-row>
                    </b-container>
                    <br/>
                </div>

                <br/>
                <hr id="hr1">

                <p style="font-size: 30px">法规解读</p>
                <div id="articleDiv">
                    <b-container>
                        <b-row>
                            <b-col>
                                <p class="articleDes">最新的法律法规解读</p>
                                <b-btn variant="outline-primary">更多新闻 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                            </b-col>
                        </b-row>
                    </b-container>
                    <br/>
                </div>
                <br/>
                <hr id="hr1">
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
      headerImg: require('@/assets/KLDImg.jpg'),
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
.links:hover {
    color: white;
}

.articleTitle {
    color: gray;
    font-size: 20px;
}

.articleDes {
    color: gray;
    font-size: 14px;
}

.articleDate {
    color: gray;
    font-size: 12px;
    font-style: italic;
}

#threeCollapse {
    margin-left: 200px;
    margin-right: 200px;
}

#aboutUsBody {
    margin-left: 100px;
    margin-right: 100px;
}

#hr1 {
    border-width: 3px;
    margin-top: 0px;
}

#bodyTitle {
    margin-top: 10px;
    vertical-align: bottom;
    font-size: 20px;
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
