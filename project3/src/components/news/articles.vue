<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">文章</p>
                </div>
            </div>

            <br/>
            <div id="suoying">
                <p><router-link to="/knowledge">新闻与文章 </router-link> <i class="fa fa-angle-right" aria-hidden="true"></i> 文章</p>
            </div>
            <hr id="hr1">

            <div id="searchDiv">
                <b-form>
                <b-container>
                    <b-row>
                        <b-col cols="1"></b-col>
                        <b-col>
                            <b-form-input id="keyWordInput"
                                type="text" v-model="form.keyword"
                                placeholder="关键词">
                            </b-form-input>
                        </b-col>
                        <b-col>
                            <b-form-select id="businessSelect"
                                :options="selects"
                                v-model="form.select">
                            </b-form-select>
                        </b-col>
                        <b-col cols="1"></b-col>
                    </b-row>
                    <b-row><b-col><br/></b-col></b-row>
                    <b-row>
                        <b-col cols="1"></b-col>
                        <b-col>
                            <b-form-input id="keyWordInput"
                                type="date" v-model="form.startDate">
                            </b-form-input>
                        </b-col>
                        <b-col>
                            <b-form-input id="keyWordInput"
                                type="date" v-model="form.endDate">
                            </b-form-input>
                        </b-col>
                        <b-col cols="1"></b-col>
                    </b-row>
                </b-container>
                </b-form>
            </div>

            <br/>
            <hr id="hr1">

            <div id="articleDiv">
                <template v-for="n in 3">
                    <b-container :key="n">
                        <b-row>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary"><router-link id="linkButton" to="/news/the-article">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary"><router-link id="linkButton" to="/news/the-article">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary"><router-link id="linkButton" to="/news/the-article">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></b-btn>
                            </b-col>
                            <b-col>
                                <p class="articleTitle">文章标题1</p>
                                <p class="articleDes">文章描述文章描述文章描述文章描述文章描述文章描述文章描述</p>
                                <p class="articleDate">2017/11/11</p>
                                <b-btn variant="outline-primary"><router-link id="linkButton" to="/news/the-article">阅读文章 <i class="fa fa-angle-right" aria-hidden="true"></i></router-link></b-btn>
                            </b-col>
                        </b-row>
                        <br/>
                        <b-row><b-col><hr></b-col></b-row>
                    </b-container>
                </template>
            </div>

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
#linkButton:hover {
    color: white;
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
