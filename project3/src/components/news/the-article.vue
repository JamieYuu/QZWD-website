<template>
    <div id="wholePage">
        <div id="indexbody">

            <br/><br/><br/><br/><br/><br/><br/><br/>
            <p id="headerTitle">这是标题</p>
            <div id="suoying">
                <p><router-link to="/knowledge">新闻与文章 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> <router-link to="/news/articles"> 文章</router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> 标题</p>
            </div>
            <hr id="hr1">

            <div id="mianText">
                <b-container>
                    <b-row>
                        <b-col>
                            <br/>
                            <div id="leftTextDiv">
                            <p class="authorInf">作者: xxx (合伙人)     发布时间: 2017/11/11</p>
                            <template v-for="n in 10">
                            <p :key="n" class="bodyText">内容</p>
                            </template>
                            </div>
                        </b-col>

                        <b-col cols="5">
                            <p style="font-size: 20px;"> 主要联系人</p>
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
                        </b-col>
                    </b-row>
                </b-container>
                <br/>
                <p>类别: <router-link to="/business/arbitration">仲裁</router-link> | <router-link to="/business/bank-finance">银行与融资</router-link></p>
            </div>

            <hr id="hr1">

            <div id="mianText">
                <p style="font-size: 24px">您可能感兴趣</p>
                <br/>
                <b-container>
                    <b-row>
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
                        <b-col>
                            <p class="articleTitle">文章标题1</p>
                            <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                            <p class="articleDate">2017/11/11</p>
                            <b-btn variant="outline-primary">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></b-btn>
                        </b-col>
                    </b-row>
                </b-container>
            </div>

            <br/>
            <hr id="hr1">

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
      wxImg: require('@/assets/wx.jpeg'),
      form: {
        keyword: '',
        select: null,
        startDate: null,
        endDate: null
      },
      selects: [{ text: '业务领域', value: null }, '业务1', '业务2', '业务3', '业务4', '业务5']
    }
  },

  components: {

  },

  methods: {

  }
}
</script>

<style scoped>
#leftTextDiv {
    border-right: thin solid gray;
}

.authorInf {
    font-style: italic;
    color: gray;
    font-size: 14px;
}

#mianText {
    margin-left: 100px;
    margin-right: 100px;
}

#headerTitle {
    font-size: 30px;
    margin-left: 100px;
    margin-right: 100px;
}

#articleDiv {
    margin-left: 100px;
    margin-right: 100px;
}

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
    font-size: 16px;
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
