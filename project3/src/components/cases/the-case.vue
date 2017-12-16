<template>
    <div id="wholePage">
        <div id="indexbody">
            <theHeader />

            <br/><br/><br/><br/><br/><br/><br/><br/>
            <p id="headerTitle">{{theCase.title}}</p>

            <div class="mianText">
                <p class="dateText">{{theCase.date}}</p>
                <b-container>
                    <b-row>
                        <b-col cols="8">
                            <div class="leftTextDiv">
                                <span v-html="theCase.information"></span>
                            </div>
                        </b-col>
                        <b-col>
                            <p class="rightTitle">承办律师: {{theCase.lawyer}}</p>
                            <p class="desText">{{theCase.lawyerDes}}</p>
                            <p class="connect">联系电话: {{theCase.lawyerPhone}}</p>
                            <p class="connect">办公邮箱: {{theCase.lawyerEmail}}</p>
                        </b-col>
                    </b-row>
                </b-container>
            </div>

            <br/>
            <hr/>

        </div>
    <theBottom />
    </div>
  
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      firebaseRef: firebase.database().ref(),
      theCase: {}
    }
  },

  watch: {
  },

  methods: {
  },

  created: function () {
    console.log('created')

    var pathName = '/Cases/' + this.$route.params.id.slice(1)
    this.firebaseRef.child(pathName).once('value', (datasnap) => {
      this.theCase = datasnap.val()
    })
  }
}
</script>

<style scoped>
.connect {
    font-size: 14px;
    line-height: 6px;
}

.rightTitle {
    font-size: 24px;
}

.mianText {
    margin-left: 100px;
    margin-right: 100px;
}

.dateText {
    color: gray;
    font-style: italic;
}

.leftTextDiv {
    border-right: thin solid gray;
    min-height: 600px;
}

#headerTitle {
    font-size: 30px;
    margin-left: 100px;
    margin-right: 100px;
}

#bodyLeftPart {
    border-right: thin solid gray;
}

hr {
    margin-left: 100px;
    margin-right: 100px;
    border-width: 3px;
    margin-top: 0px;
}

#wholePage {
    background-color: white;
    height: 100%;
}
</style>
