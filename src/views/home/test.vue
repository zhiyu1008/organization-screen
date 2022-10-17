<template>
  <div class="container">
    <div class="title_box">
      <img src="@/assets/images/title_icon.png" alt="" />
      <div class="left_title">提高公职人员入口质量关应用场景</div>
      <div class="en_desc">Federation of trade union member data monitoring screen</div>
    </div>
    <div class="right_title">{{time}}</div>
    <div class="box">
      <div class="left_box" v-if="!echartsStatus"></div>
      <div class="left_echarts_box" v-else>

      </div>
      <div class="con_box">
        <div class="title">公职人员部门分析数据</div>
        <div class="nav_svg_box">
          <div class="nav_svg" >
            <dv-decoration-5 style="width:400px;height:40px;" />
          </div>
        </div>
        <ul class="con_con_box" v-if="!echartsStatus">
          <li v-for="item in listData">
            <p>{{item}}</p>
            <p>
              <span @click="handleRed(item,0)"></span>
              <span @click="handleYellow(item,1)"></span>
              <span @click="handleGreen(item,2)"></span>
            </p>
          </li>
        </ul>
        <div class="con_echarts_box" v-else>
          <i class="el-icon-back" style="font-size:30px" @click="handleReturn"></i>
          <echartsCroBar :chartData="chartData1"></echartsCroBar>
        </div>
      </div>
      <div class="right_box" v-if="!echartsStatus"></div>
      <div class="right_echarts_box" v-else>

      </div>
    </div>
  </div>
</template>

<script>
import echartsCroBar from '@/components/echartsCroBar.vue'
export default {
  components: {
    echartsCroBar
  },
  data () {
    return {
      listData:['质量指数','效率指数','质量指数'],
      echartsStatus:false,
      chartData1:{
        left:'30%',
        barColor:'red',
        barWidth:15,
        itemName:'紧急专业招录人数',
        nameData:[
                  '法学',
                  '计算机科学与技术',
                  '数据科技与大数据技术',
                  '法学',
                  '计算机科学与技术',
                  '数据科技与大数据技术'
                ],
        valueData:[11,45,33,24,11,45]
      },
    }
  },
  created () {
    // 获取当前时间
    this.handleTime();
  },
  mounted () {

  },
  methods: {
    handleRed(item,index){
      console.log(item,index)
      this.echartsStatus=true
      this.chartData1.barColor='red'
    },
    handleYellow(item,index){
      console.log(item,index)
      this.echartsStatus=true
      this.chartData1.barColor='yellow'
    },
    handleGreen(item,index){
      console.log(item,index)
      this.echartsStatus=true
      this.chartData1.barColor='#adff2f'
    },
    handleReturn(){
      this.echartsStatus=false
    }
  }
}
</script>
<style scoped lang='scss'>
@import url(@/common/index.scss);
.left_box{
  border:1px solid #0b4989 !important;
  background: #101b2c;
}
.left_echarts_box{
  border:1px solid #0b4989 !important;
  background: #101b2c;
  width: 250px;
  height: 90%;
  margin:20px 0 0 20px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px 5px;
}
.con_con_box{
  position: relative;
  top: 20px;
  width: 100%;
  height: 80%;
  background: #0b162d;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li{
    width: 30%;
    height: 90%;
    border:2px solid #fff;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 50px;
    p{
      width: 100%;
      font-size: 25px;
      letter-spacing: 10px;
      span{
        animation: d1 2s ease-in-out infinite;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin:100px 30px;
        border-radius: 50%
      }
    }
    p span:first-child{
      background: red
    }
    p span:nth-child(2){
      background: yellow
    }
    p span:nth-child(3){
      background: greenyellow
    }
  }
}
.con_echarts_box{
  width: 920px;
  height: 80%;
  position: relative;
  top: 20px;
  border:1px solid #053160;
  border-radius:10px;
  box-sizing: border-box;
  padding: 5px 10px;
  i{
    margin:20px 0 0 50px;
    animation: d1 2s ease-in-out infinite;
  }
}
.right_box{
  border:1px solid #0b4989 !important;
  background: #0a0e17;
}
.right_echarts_box{
  border:1px solid #0b4989 !important;
  background: #0a0e17;
  border-radius: 15px;
  width: 250px;
  height: 90%;
  margin:20px 20px 0 0;
  box-sizing: border-box;
  padding: 5px 10px;
}
</style>