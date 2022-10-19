<template>
  <div class="container">
    <navTabs :selectId="selectId"></navTabs>
    <div class="title_box">
      <img src="@/assets/images/title_icon.png" alt="" />
      <div class="left_title">提高公职人员入口质量关应用场景</div>
      <div class="en_desc">Federation of trade union member data monitoring screen</div>
    </div>
    <div class="right_title">{{time}}</div>
    <div class="box">
      <div class="left_box">
        <div class="first_floor">
          <div class="chart">
            <div class="box_title">性别分布</div>
            <echartsBest :chartData="bestData1"></echartsBest>
            <ul class="datalist">
              <li>0%</li>
              <li>25%</li>
              <li>50%</li>
              <li>75%</li>
              <li>100%</li>
            </ul>
            <div class="value">
              <p>男性:<span>4356</span></p>
              <p>女性:<span>5983</span></p>
            </div>
          </div>
        </div>
        <div class="second_floor">
          <div class="chart">
            <div class="box_title">公职人员政治面貌</div>
            <echartsBest :chartData="bestData2"></echartsBest>
            <ul class="datalist">
              <li>0%</li>
              <li>25%</li>
              <li>50%</li>
              <li>75%</li>
              <li>100%</li>
            </ul>
            <div class="value">
              <p>党员：<span>4997</span></p>
            </div>
          </div>
        </div>
        <div class="third_floor">
          <div class="chart">
            <dv-active-ring-chart :config="config1" style="width:140px;height:140px" />
          </div>
        </div>
        <div class="fourth_floor">
          <div class="chart">
            <div class="box_title">公职人员年龄趋势</div>
            <div class="en_desc">Proportion of political status</div>
            <echartsCircle :data="circleData1"></echartsCircle>
          </div>
        </div>
        <div class="five_floor">
          <div class="chart" ref="leftFiveChart"></div>
        </div>
      </div>
      <div class="con_box">
        <div class="title">公职人员数据展示</div>
        <div class="nav_svg_box">
          <div class="nav_svg" >
            <dv-decoration-5 style="width:400px;height:40px;" />
          </div>
        </div>
        <div class="con_nav">
          <div class="left">
            <p class="title">10339</p>
            <p>公职人员总数</p>
          </div>
          <img src="@/assets/images/right.png" alt="">
          <div class="con">
            <div class="con_li" @click="handleTap(1)">
              <span>公务员</span><span class="num num_1">2310</span>
            </div>
            <div class="con_li" @click="handleTap(2)">
              <span>事业人员</span><span class="num num_2">7450</span>
            </div>
            <div class="con_li" @click="handleTap(3)">
              <span>国企人员</span><span class="num num_3">487</span>
            </div>
            <div class="con_li" @click="handleTap(4)">
              <span>专职社工</span><span class="num num_4">96</span>
            </div>
          </div>
          <img src="@/assets/images/right.png" alt="">
          <div class="right">
            <dv-active-ring-chart :config="config2" style="width:150px;height:150px" />
          </div>
        </div>
        <div class="con_con_box">
          <div class="con_left_box">
          <div class="box_title">公职人员学历/学位情况</div>
          <p class="en_desc">Courty/District Labor Union statistics</p>
          <div class="box">
            <div class="left">
              <div class="left-title_box" @click="handleSelectEdu">
                <img src="@/assets/images/icon4.png" alt="">
                <p>{{selectedValue}}</p>
                <i v-if="!eduStatus" class="el-icon-arrow-down" style="color:#2b4e81"></i>
                <i v-else class="el-icon-arrow-up" style="color:#2b4e81"></i>
              </div>
              <div class="chart" v-if="!eduStatus">
                <echartsCircle :data="circleData2"></echartsCircle>
              </div>
              <div class="selectEduBox" v-else>
                <p v-for="item,index in eduData" @click="handleSelected(item,index)">{{item}}</p>
              </div>
            </div>
            <div class="right">
              <div class="right-title_box">
                <img src="@/assets/images/icon4.png" alt="" />
                <p>学位</p>
              </div>
              <div class="chart">
                <echartsBar :data="barData1"></echartsBar>
              </div>
            </div>
          </div>
        </div>
        <div class="con_right_box">
          <div class="box_title">公职人员性别目标</div>
          <div class="chart1">
            <echartsBest :chartData="bestData3"></echartsBest>
            <ul class="datalist">
              <li>0%</li>
              <li>25%</li>
              <li>50%</li>
              <li>75%</li>
              <li>100%</li>
            </ul>
          </div>
          <div class="chart2">
            <echartsBar :data="barData2"></echartsBar>
          </div>
        </div>
        </div>
        <div class="con_fot_box">
          <div class="left">
            <div class="box_title">专业结构分析</div>
            <div class="en_desc">Trade Union statistics of market value industry</div>
            <echartsCroBar :chartData="chartData1"></echartsCroBar>
          </div>
          <div class="right">
            <div class="box_title">紧急专业缺口</div>
            <div class="en_desc">Trade Union statistics of market value industry</div>
            <echartsCroBar :chartData="chartData2"></echartsCroBar>
          </div>
        </div>
      </div>
      <div class="right_box">
        <div class="charts1">
          <div class="box_title">平均年龄目标</div>
          <div class="en_desc">Proportion of political status</div>
          <div class="chart">
            <echartsBar :data="barData3"></echartsBar>
          </div>
        </div>
        <div class="charts2">
          <div class="box_title">预警信息</div>
          <div class="en_desc">Trade Union statistics of market value industry</div>
          <div class="text_box" v-for="item,index in dataList" :key="index">
            <img src="@/assets/images/z_icon.png" alt="">
            <p class="active">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navTabs from '@/components/navTabs.vue'
import echartsBest from '@/components/echartsBest.vue'
import echartsCircle from '@/components/echartsCircle.vue'
import echartsLine from '@/components/echartsLine.vue'
import echartsBar from '@/components/echartsBar.vue'
import echartsCroBar from '@/components/echartsCroBar.vue'
export default {
  components: {navTabs,echartsBest,echartsCircle,echartsBar,echartsCroBar,echartsLine},
  data () {
    return {
      time:'',
      selectId:0,
      config1:{
        radius: '45%',
        activeRadius: '55%',
        color:['#0083eb','#021e4b'],
        lineWidth: 15,
        radius: '50%',
        digitalFlopStyle: {
            fontSize: 12,
            fill: '#fff'
          },
        data: [
          {
            name: '中共党员',
            value: 48
          },
          {
            name: '其它',
            value: 52
          }
        ]
      },
      config2:{
        color:['#49cbc4','#43acff','#0e4a5a','#01437d'],
        lineWidth: 15,
        radius: '50%',
        digitalFlopStyle: {
            fontSize: 14,
            fill: '#fff'
          },
        data: [
          {
            name: '录用',
            value: 55
          },
          {
            name: '调任',
            value: 120
          },
          {
            name: '军转',
            value: 78
          },
          {
            name: '公选选举',
            value: 66
          }
        ]
      },
      bestData1:{
        color:['#1ff2e6', '#1ba5da'],
        value:[ '女性', '男性' ],
        data: [
          {
            type: 'bar', // 系列类型
            name: '女性', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'red',
              position: 'inside'
            },
            data: [58] // 系列中的数据内容数组
          },
          {
            type: 'bar', // 系列类型
            name: '男性', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'red',
              position: 'inside'
            },
            data: [42] // 系列中的数据内容数组
          }
        ]
      },
      bestData2:{
        color:['#027ada', '#031c45'],
        value:[ '党员', '其它' ],
        data: [
          {
            type: 'bar', // 系列类型
            name: '党员', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'#d8a71f',
              position: 'inside'
            },
            data: [48] // 系列中的数据内容数组
          },
          {
            type: 'bar', // 系列类型
            name: '其它', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'#d8a71f',
              position: 'inside'
            },
            data: [52] // 系列中的数据内容数组
          }
        ]
      },
      bestData3:{
        color:['#8cb5d5', '#1e5f99'],
        value:[ '女性', '男性' ],
        data: [
          {
            type: 'bar', // 系列类型
            name: '女性', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'red',
              position: 'inside'
            },
            data: [17] // 系列中的数据内容数组
          },
          {
            type: 'bar', // 系列类型
            name: '男性', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'red',
              position: 'inside'
            },
            data: [83] // 系列中的数据内容数组
          }
        ]
      },
      circleData1:{
        color: ['#bae7ff', '#69c0ff', '#1890ff','#0050b3'],
        datas:[
          {
            name: '35及以下',
            value: 4133,
          },
          {
            name: '35-45',
            value: 2321,
          },
          {
            name: '45-55',
            value: 2703,
          },
          {
            name: '55及以上',
            value: 1182,
          }
        ]
      },
      circleData2:{
        color: ['#021e4b', '#0083eb', '#42e5ff'],
        datas:[
          {
            name: '本科生',
            value: 7224,
          },
          {
            name: '研究生',
            value: 1902,
          },
          {
            name: '大专及以下',
            value: 2927,
          }
        ]
      },
      barData1:{
        color:['#1a7eed','#42e5ff'],
        typeData:['硕士', '学士'],
        xData:['硕士','学士'],
        data:[{
            name: '硕士',
            barWidth: 20,
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [1902,7224]
          },{
            name: '学士',
            barWidth: 20,
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [2300,7500]
          }]
      },
      barData2:{
        color:['#1e5f97','#8db7d6'],
        typeData:['男性', '女性'],
        xData:['男性    女性'],
        data:[{
            name: '男性',
            barWidth: 20,
            // barGap:'300%',
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [200]
          },{
            name: '女性',
            barWidth: 20,
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [125]
          }]
      },
      barData3:{
        color:['#0032eb','#8fbbfa'],
        typeData:['双招', '目标'],
        xData:['23.6岁','27.2岁','36.5岁'],
        data:[{
            name: '双招',
            barWidth: 15,
            barGap:'30%',/*多个并排柱子设置柱子之间的间距*/
            barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [39,59,6]
          },{
            name: '目标',
            barWidth: 15,
            barCategoryGap:'50%',
            type: 'bar',
            label:  {
              show: true,
              color:'#fff',
              position: "top",
              align: 'center',
              verticalAlign: 'middle',
              formatter: '{c}',
              fontSize: 8
            },
            data: [100,65,50]
          }]
      },
      chartData1:{
        left:'10%',
        barColor:'#2b4e81',
        barWidth:12,
        itemName:'专业录用人数',
        nameData:['工学','法学','管理学','文学','经济学','理学','农学','教育学'],
        valueData:[51, 39, 35, 21, 15, 9,6,3]
      },
      chartData2:{
        left:'10%',
        barColor:'#2c6f84',
        barWidth:12,
        itemName:'紧急专业录用人数',
        nameData:['工学','法学','管理学','文学','经济学','理学','农学','教育学'],
        valueData:[51, 39, 35, 21, 15, 9,6,3]
      },
      dataList:[
        '科协连续5年未招录行政事业人员',
        '科协连续5年未招录行政事业人员',
        '科协连续5年未招录行政事业人员',
        '科协连续5年未招录行政事业人员',
        '科协连续5年未招录行政事业人员'
      ],
      selectedValue:'全日制学历',
      eduData:['全日制学历','最高学位'],
      eduStatus:false,// 学历下拉菜单
    }
  },
  created () {
    // 获取当前时间
    this.handleTime();
  },
  mounted () {
    this.handleSetLeftFiveEchart()
  },
  methods: {
    handleSetLeftFiveEchart(){
      const chart = this.$refs.leftFiveChart
      const myChart = this.$echarts.init(chart)
      let xLabel = ['35及以下', '35-45', '45-55', '55以上']
      // let xLabel = ['0', '3', '4', '5']
      let goToSchool = ["40", "30", "32", "27"]
      myChart.setOption({
    tooltip: {
         trigger: 'axis',
         backgroundColor:'transparent',
         borderColor:'#fff'
     },
     grid: {
         top: '20%',
         left: '10%',
         right: '10%',
         bottom: '15%',
         containLabel: true
     },
     xAxis: [{

         type: 'category',
         boundaryGap: false,
         axisLine: { //坐标轴轴线相关设置。数学上的x轴
             show: false
         },
         axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#fff',
                fontSize:8
             }
         },
         splitLine: {
             show: false,
         },
         axisTick: {
             show: false,
         },
         data: xLabel
     }],
     yAxis: [{
         min: 0,
         splitLine: {
             show: true,
             lineStyle: {
                color: '#05111a'
             },
         },
         axisLine: {
             show: false,
         },
         axisLabel: {
             show: false
         },
         axisTick: {
             show: false,
         },
     }],
     series: [{
         name: '公职人员人数',
         type: 'line',
         symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
         showAllSymbol: true,
         symbolSize: 10,
         smooth: false,
         lineStyle: {
             normal: {
                 width: 2,
                 color: "#89bddb", // 线条颜色
             },
             borderColor: 'rgba(0,0,0,.4)',
         },
         itemStyle: {
             color: "rgba(25,163,223,1)",
             borderWidth: 2

         },
         areaStyle: { //区域填充样式
             normal: {
                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0,
                         color: "rgba(25,163,223,.3)"
                     },
                     {
                         offset: 1,
                         color: "rgba(25,163,223, 0)"
                     }
                 ], false),
                 shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                 shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
             }
         },
         data: goToSchool
     }]
 })
    },
    // 下拉选择学历渠道
    handleSelectEdu(){
      this.eduStatus=!this.eduStatus
    },
    // 下拉选中事件
    handleSelected(item,index){
      console.log(item,index)
      this.eduStatus=!this.eduStatus
      this.selectedValue=item
      switch(index){
        case 0:
        this.circleData2={
        color: ['#021e4b', '#0083eb', '#42e5ff'],
        datas:[
            {
              name: '本科生',
              value: 7224,
            },
            {
              name: '研究生',
              value: 1902,
            },
            {
              name: '大专及以下',
              value: 2927,
            }
          ]
        }
        break;
        case 1:
        this.circleData2={
        color: ['#021e4b', '#0083eb', '#42e5ff'],
        datas:[
            {
              name: '本科生',
              value: 5224,
            },
            {
              name: '研究生',
              value: 6902,
            },
            {
              name: '大专及以下',
              value: 2927,
            }
          ]
        }
        break;
      }

    },
    // 切换不同职员数据
    handleTap(type){
      switch(type){
        case 1:
        this.config2={
          color:['#49cbc4','#43acff','#0e4a5a','#01437d'],
          lineWidth: 15,
          radius: '50%',
          digitalFlopStyle: {
              fontSize: 14,
              fill: '#fff'
            },
          data: [
            {
              name: '录用',
              value: 55
            },
            {
              name: '调任',
              value: 120
            },
            {
              name: '军转',
              value: 78
            },
            {
              name: '公选选举',
              value: 66
            }
          ]
        }
        break;
        case 2:
        this.config2={
          color:['#49cbc4','#43acff','#0e4a5a','#01437d'],
          lineWidth: 15,
          radius: '50%',
          digitalFlopStyle: {
              fontSize: 14,
              fill: '#fff'
            },
          data: [
            {
              name: '录用',
              value: 74
            },
            {
              name: '调任',
              value: 86
            },
            {
              name: '军转',
              value: 45
            },
            {
              name: '公选选举',
              value: 140
            }
          ]
        }
        break;
        case 3:
        this.config2={
          color:['#49cbc4','#43acff','#0e4a5a','#01437d'],
          lineWidth: 15,
          radius: '50%',
          digitalFlopStyle: {
              fontSize: 14,
              fill: '#fff'
            },
          data: [
            {
              name: '录用',
              value: 17
            },
            {
              name: '调任',
              value: 120
            },
            {
              name: '军转',
              value:55
            },
            {
              name: '公选选举',
              value: 66
            }
          ]
        }
        break;
        case 4:
        this.config2={
          color:['#49cbc4','#43acff','#0e4a5a','#01437d'],
          lineWidth: 15,
          radius: '50%',
          digitalFlopStyle: {
              fontSize: 14,
              fill: '#fff'
            },
          data: [
            {
              name: '录用',
              value: 75
            },
            {
              name: '调任',
              value: 17
            },
            {
              name: '军转',
              value: 102
            },
            {
              name: '公选选举',
              value: 66
            }
          ]
        }
        break;
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import url(@/common/index.scss);
.left_box{
  border:none !important;
  .first_floor,.second_floor,.fourth_floor{
    margin: 20px 0;
  }
  .first_floor{
    margin-top: 0;
    .box_title{
      font-size: 18px !important;
    }
  }
  .first_floor>.chart,.second_floor>.chart{
    width: 200px;
    height: 100px;
    position: relative;
    bottom: 20px;
    margin:10px 0 10px 0;
    padding:10px;
    .datalist{
      position: absolute;
      top: 75px;
      left: 10px;
      display: flex;
      width: 100px;
      line-height: 40px;
      li{
        margin-right: 20px;
        color:#ccc;
        font-size: 10px ;
      }
    }
    .value{
      position: absolute;
      top: 110px;
      left: 10px;
      display: flex;
      align-items: center;
      p{
        margin-right: 15px;
        span{
          font-size: 16px;
          font-weight: 600;
          margin-left: 3px;
        }
      }
    }
    .fourth_floor>.chart{
      width: 200px;
      height: 100px;
    }
  }
  .fourth_floor>.chart{
    position:relative;
    bottom: 50px;
  }
  .third_floor{
    width: 140px;
    height: 140px;
    margin-left: 30px;
    position: relative;
    bottom: 20px;
  }
  .five_floor{
    width: 200px;
    height: 120px;
    position:relative;
    bottom: 80px;
    .chart{
      width: 200px;
    height: 120px;
    }
  }
}
.con_box{
  .con_nav{
    margin-top: 40px;
    width: 98%;
    margin-left: 1%;
    height: 120px;
    border:1px solid #0b4989;
    border-radius: 10px;
    background: #010919;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 50px;
      height: 50px;
      margin: 0 20px;
    }
    .left{
      .title{
        color:#75c3f8;
        font-size: 20px;
        font-weight: 700;
      }
      padding: 5px 10px;
      border-radius: 10px;
      border:1px solid #0b4989;
    }
    .con{
      width: 280px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .con_li:hover{
        background: #11285f;
      }
      .con_li{
        cursor:pointer;/*鼠标变小手*/
        background: #081138;
        border-radius: 10px;
        width: 120px;
        padding: 5px;
        margin-bottom: 10px;
        span{
          font-size: 14px;
        }
        .num{
          margin-left: 5px;;
          font-size: 18px;
          font-weight: 700;
        }
        .num_1{
          color: #46c4be;
        }
        .num_2{
          color: #0b6cc0;
        }
        .num_3{
          color: #18718a;
        }
        .num_4{
          color: #41a8f2;
        }
      }
    }
    .right{
      position: relative;
      bottom: 20px;
      width: 200px;
      height: 100px;
    }
  }
  .con_con_box{
    display: flex;
    align-items: center;
  }
  .con_left_box{
    width: 55%;
    height: 210px;
    background: #040a19;
    border:1px solid #0b4989;;
    border-radius: 10px;
    margin: 10px;
    padding: 10px 5px;
    box-sizing: border-box;
    .box{
      display: flex;
      align-items: center;
      .left{
        width: 55%;
        height: 90%;
        .chart{
          width: 250px;
          height: 120px;
        }
        .selectEduBox{
          width: 250px;
          height: 75px;
          background: #021e4b;
          p{
            width: 250px;
            line-height: 35px;
            font-weight: 700;
            box-sizing: border-box;
            padding-left: 30px;
          }
          p:hover{
            background: #2c6f84;
          }
        }
      }
      .right{
        width: 43%;
        margin-left: 2%;
        height: 90%;
        .chart{
          margin: 5px 0 0 10px;
          width: 150px;
          height: 150px;
        }
      }
      .left .left-title_box,.right .right-title_box{
          font-size: 16px;
          font-weight: 700;
          background: #01154b;
          display:flex;
          position: relative;
          cursor:pointer;/*鼠标变小手*/
          img{
            width: 15px;
            margin: 5px 5px 5px 10px;
          }
          p{
            margin-top: 5px;
          }
          i{
            position:absolute;
            right: 10px;
            top: 10px;
          }
        }
    }
  }
  .con_right_box{
    width: 43%;
    margin-left: 2%;
    height: 210px;
    margin: 10px;
    .chart1{
      width: 100%;
      height: 80px;
      box-sizing: border-box;
      padding-left: 20px;
      position: relative;
      .datalist{
      position: absolute;
      top: 40px;
      left: 20px;
      display: flex;
      width: 100px;
      line-height: 40px;
      li{
        margin-right: 40px;
        color:#ccc;
        font-size: 10px ;
      }
    }
    }
    .chart2{
      width: 300px;
      height: 120px;
      position: relative;
      top: 20px;
    }
  }
  .con_fot_box{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    .left{
      margin:10px;
      width: 45%;
      margin-right: 10%;
    }
    .right{
      width: 45%;
    }
  }
}
.right_box{
  .charts1{
    width: 100%;
    height: 300px;
    .chart{
      width: 100%;
      height: 230px;
    }
  }
  .charts2{
    width: 100%;
    height: 350px;
    .text_box{
    display: flex;
    margin:10px 0 5px 0;
    img{
      width: 15px;
      height: 15px;
    }
    p{
      font-size: 13px;
      color:#63b5f2;
      font-weight: 700;
      margin-left: 10px;
    }
    .active{
      color: #d84346;
    }
  }
  }
}

</style>
