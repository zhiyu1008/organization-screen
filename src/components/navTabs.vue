<template>
<div id='app'>
  <div class="tabs_box">
        <ul class="tabs">
          <li v-for="item,index in tabsList" :class="selectId==index?'select':''" :key="index" @click="handleTap(index)">{{item}}</li>
        </ul>
        <el-tooltip class="item" effect="dark" content="页面待建设" placement="right-start">
          <p class="inner"></p>
        </el-tooltip>
      </div>
</div>
</template>

<script>
export default {
  components: {},
  props:{
    'selectId':{
      type:Number,
      default:0
    }
  },
  data () {
    return {
      tabsList:['总体概述','入口情况','部门分析','考核评价','个性模块'],
    }
  },
  created () { },
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
<style scoped lang='scss'>
.tabs_box{
    width: 425px;
    height: 30px;
    z-index: 999;
    position: absolute;
    top: 110px;
    left: 565px;
    .tabs{
    display: flex;
    align-items: center;
    li{
      cursor:pointer;/*鼠标变小手*/
      padding:3px 8px;
      background: #0a1934;
      border:1px solid #0b4989;
      border-radius: 10px;
      margin-right: 5px;
      color: #ccc;
    }
  }
  }
</style>
