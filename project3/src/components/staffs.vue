<template>
    <div id="wholePage">
        <div id="indexbody">

            <div id="headerImgPart">
                <b-img id="headerImg" :src="headerImg"/>
                <div id="aboutUsTextDiv">
                    <p id="aboutUsText">律师团队</p>
                </div>
            </div>

            <br/>
            <p id="lableText">专业人员</p>
            <hr id="hr1">

            <div id="mainBodyDiv">
                <p style="font-size: 20px">查找适合的专家</p>
                <p class="bodyText">使用搜索引擎查找适合的专家</p>

                <b-form>
                        <b-form-group id="formGroupName"
                            label="姓名"
                            label-for="formGroupNameInput">
                        <b-form-input id="formGroupNameInput"
                            type="text" v-model="form.name"
                            placeholder="输入姓名(非必须)">
                        </b-form-input>
                        </b-form-group>

                        <b-form-group id="formGroupPossition"
                            label="职位"
                            label-for="formGroupPossitionSelect">
                        <b-form-select id="formGroupPossitionSelect"
                            :options="possitions"
                            v-model="form.possition">
                        </b-form-select>
                        </b-form-group>

                        <b-form-group id="formGroupProfessional"
                            label="专业领域"
                            label-for="formGroupProfessionalSelect">
                        <b-form-select id="formGroupProfessionalSelect"
                            :options="professionals"
                            v-model="form.professional">
                        </b-form-select>
                        </b-form-group>

                        <div id="searchDiv">
                            <b-btn id="searchBtn" variant="outline-primary" type="submit"> 搜索 <i class="fa fa-search" aria-hidden="true"></i></b-btn>
                        </div>
                </b-form>

                <hr style="border-width: 3px">

                <p style="font-size: 20px">合伙人律师</p>
                <b-container>
                    <template v-for="n in 2">
                        <div :key="n">
                    <b-row>
                        <template v-for="n in 3">
                        <b-col :key="n">
                            <div>
                                <b-card title="律师姓名"
                                :img-src="logoURL"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="width: 16rem;"
                                class="mb-2">
                                <div class="cardInfo">
                                <p class="card-text">一级合伙人</p>
                                <p class="card-text">电话 123456</p>
                                <p class="card-text">邮箱 12345@123.com</p>
                                <div style="text-align: center">
                                <b-btn v-b-modal.modal1 variant="outline-primary">详细资料</b-btn>
                                </div>
                                </div>
                                </b-card>
                            </div>
                        </b-col>
                        </template>
                    </b-row>
                    <br/>
                        </div>
                    </template>
                </b-container>
            </div>

            <br/>
            <hr id="hr1">

            <b-modal size="lg" 
                hide-footer 
                id="modal1" 
                title="律师姓名"
                header-bg-variant="primary"
                header-text-variant="light">

                <b-media right-align vertical-align="center">
                    <b-img slot="aside" blank width="200" blank-color="#ccc"/>
                    <h5 class="mt-0 mb-1">一级合伙人</h5>
                    <div style="line-height: 6px">
                        <br/><br/><br/>
                    <p class="bodyText">电话 123456</p>
                    <p class="bodyText">邮箱 123456@123.com</p>
                    <p class="bodyText">传真 123456@123.com</p>
                    <p class="bodyText">其他什么联系方式 123456@123.com</p>
                    </div>
                </b-media>
                <h6 style="font-size: 20px;" class="my-4">律师介绍</h6>
                <p class="bodyText">这里是律师介绍</p>
                <h6 style="font-size: 20px;" class="my-4">专业领域</h6>
                <ul>
                    <li>专业领域1</li>
                    <li>专业领域2</li>
                    <li>专业领域3</li>
                    <li>专业领域4</li>
                </ul>
                <h6 style="font-size: 20px;" class="my-4">案例与文章</h6>
                <ul>
                    <li><router-link to="/">案例1</router-link></li>
                    <li><router-link to="/">案例2</router-link></li>
                    <li><router-link to="/">文章1</router-link></li>
                    <li><router-link to="/">文章2</router-link></li>
                </ul>
            </b-modal>

        </div>

    </div>
  
</template>

<script>
export default {
  data () {
    return {
      infoP: '  Q Z  & W D (JIANG XI)   L A W    F I R M',
      logoURL: require('@/assets/logo.jpg'),
      headerImg: require('@/assets/STFImg.jpg'),
      wxImg: require('@/assets/wx.jpeg'),
      form: {
        name: '',
        possition: null,
        professional: null
      },
      possitions: [
        { text: '全部', value: null }, '高级合伙人', '二级合伙人', '专业律师'
      ],
      professionals: [
        { text: '全部', value: null }, '业务1', '业务2', '业务3', '业务4'
      ]
    }
  },

  components: {

  },

  methods: {

  }
}
</script>

<style scoped>
.cardInfo {
    line-height: 6px;
}

#searchDiv {
    text-align: right;
}

#searchBtn:hover {
    cursor: pointer;
}

#mainBodyDiv {
    margin-left: 200px;
    margin-right: 200px;
}

#lableText {
    margin-left: 200px;
    margin-right: 200px;
    color: gray;
    font-size: 20px;
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
