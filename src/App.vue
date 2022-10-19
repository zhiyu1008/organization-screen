<template>
  <dv-full-screen-container>
    <div class="dv_box">
      <!-- <div class="tabs_box" v-if="$route.path!='/'">
        <ul class="tabs">
          <li v-for="item,index in tabsList" :class="selectId==index?'select':''" :key="index" @click="handleTap(index)">{{item}}</li>
        </ul>
        <el-tooltip class="item" effect="dark" content="页面待建设" placement="right-start">
          <p class="inner"></p>
        </el-tooltip>
      </div> -->
      <router-view/>
    </div>
  </dv-full-screen-container>
</template>
<script>
import indexApi from '@/api/index'
export default {
  components: {},
  data () {
    return {
      // selectId:0,
      // tabsList:['总体概述','入口情况','部门分析','考核评价','个性模块'],
    }
  },
  created () {
    this.getList()
  },
  mounted () {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    // window.onbeforeunload = function (e) {
    //   const storage = window.localStorage
    //   storage.clear()
    // }
  },
  methods: {
    async getList(){
      const res=await indexApi.getIndexList()
      console.log(res)
    },
    // 点击跳转对应页面
    // handleTap(index){
    //   if(index!=4){
    //     this.selectId=index
    //   }
    //   switch(index){
    //     case 0:
    //       this.$router.push('/home/total')
    //       break;
    //     case 1:
    //       this.$router.push('/home/enter')
    //       break;
    //     case 2:
    //       this.$router.push('/home/department')
    //       break;
    //     case 3:
    //       this.$router.push('/home/test')
    //       break;
    //     case 4:
    //       alert("等待构建")
    //       break;
    //   }
    // }
  }
}
</script>
<style lang="scss">
// border:1px solid #0b4989;/*主题边框 */
// cursor:pointer;/*鼠标变小手*/

// animation: d1 2s ease-in-out infinite;/*开启缩放动画 */
// animation: move 6s linear infinite;/*开启平移动画 */
// animation-play-state: paused;/*停止平移动画 */
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

}
.inner{
  position: relative;
  left: 310px;
  bottom: 30px;
  width: 80px;
  height: 30px;
}


</style>