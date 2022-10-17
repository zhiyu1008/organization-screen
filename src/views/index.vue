<template>
  <div class="container">
    <div class="box1" @click="handleToHome"></div>
    <div class="box2" @click="handleToHome"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  created () {
   },
  mounted () { },
  methods: {
    handleToHome(){
      this.$router.push('/home/total');
    }
  }
}
</script>
<style scoped lang='scss'>
.container{
  background-image: url(@/assets/images/index_bg.png);
  background-size: 100% 100%;
  .box1{
    width: 300px;
    height: 80px;
    background: rgba(255, 255, 255, 0);
    position: absolute;
    top: 400px;
    left: 80px;
  }
  .box2{
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0);
    position: absolute;
    top: 150px;
    right: 450px;
  }
  
}
</style>
