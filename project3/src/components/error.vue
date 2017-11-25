<template>
  <div>
      <div class="text">
          <b-img id="headerImg" :src="headerImg"/>
          <br/>
          <p class="theText">页面被小怪兽吃掉了!</p>
          <p class="theLink"><router-link to='/'>返回首页</router-link></p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerImg: require('@/assets/404.png')
    }
  }
}
</script>

<style scoped>
.text {
    text-align: center;
    margin-bottom: 200px;
}

.theText {
    font-size: 36px;
}

.theLink {
    font-size: 20px;
}
</style>
