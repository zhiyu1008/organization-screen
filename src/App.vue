<template>
  <dv-full-screen-container>
    <div class="dv_box">
      <div class="tabs_box" v-if="$route.path!='/'">
        <ul class="tabs">
          <li v-for="item,index in tabsList" :class="selectId==index?'select':''" :key="index" @click="handleTap(index)">{{item}}</li>
        </ul>
        <el-tooltip class="item" effect="dark" content="页面待建设" placement="right">
          <p class="inner"></p>
        </el-tooltip>
      </div>
      <router-view/>
    </div>
  </dv-full-screen-container>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      selectId:0,
      tabsList:['总体概述','入口情况','部门分析','考核评价','个性模块']
    }
  },
  created () {
  },
  mounted () { },
  methods: {
    // 点击跳转对应页面
    handleTap(index){
      if(index!=4){
        this.selectId=index
      }
      switch(index){
        case 0:
          this.$router.push('/home/total')
          break;
        case 1:
          this.$router.push('/home/enter')
          break;
        case 2:
          this.$router.push('/home/department')
          break;
        case 3:
          this.$router.push('/home/test')
          break;
        case 4:
          alert("等待构建")
          break;
      }
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  font-size:14px;
}
li{
  list-style: none
}
.box_title{
      font-size: 16px;
      font-weight: 600;
    }
.en_desc{
  font-size: 8px;
  color:#919294;
  margin-bottom: 5px;
}
.select{
  color:#fff !important;
  background: #1a3769 !important;
}
.dv_box{
  width: 100%;
  height: 100%;
  color: #fff;
  background-image: url(@/assets/images/bg.png);
  background-size: 100% 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  .tabs_box{
    width: 425px;
    height: 30px;
    z-index: 999;
    position: absolute;
    top: 130px;
    left: 565px;
    .tabs{
    display: flex;
    align-items: center;
    li{
      padding:3px 8px;
      background: #0a1934;
      border-radius: 10px;
      margin-right: 5px;
      color: #ccc;
    }
  }
  }

}
.inner{
  position: relative;
  left: 310px;
  bottom: 30px;
  width: 80px;
  height: 30px;
}
  // animation: d1 2s ease-in-out infinite;
</style>