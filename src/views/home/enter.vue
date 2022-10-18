<template>
  <div class="container">
    <div class="title_box">
      <img src="@/assets/images/title_icon.png" alt="" />
      <div class="left_title">提高公职人员入口质量关应用场景</div>
      <div class="en_desc">Federation of trade union member data monitoring screen</div>
    </div>
    <div class="right_title">{{time}}</div>
    <div class="box">
      <div class="left_box">
        <div class="first_floor">
          <div class="box_title">录用人才性别分布</div>
          <div class="chart">
            <echartsBest :chartData="bestData1"></echartsBest>
            <ul class="datalist">
              <li>0%</li>
              <li>25%</li>
              <li>50%</li>
              <li>75%</li>
              <li>100%</li>
            </ul>
            <div class="value">
              <p>男性:<span>121</span></p>
              <p>女性:<span>114</span></p>
            </div>
          </div>
        </div>
        <div class="second_floor">
          <div class="box_title">公职人员政治面貌占比</div>
          <div class="chart">
            <echartsBest :chartData="bestData2"></echartsBest>
            <ul class="datalist">
              <li>0%</li>
              <li>25%</li>
              <li>50%</li>
              <li>75%</li>
              <li>100%</li>
            </ul>
            <div class="value">
              <p>中共党员：<span>83</span></p>
            </div>
          </div>
        </div>
        <div class="third_floor">
          <div class="box_title">公职人员招录分布</div>
          <p class="en_desc">Courty/District Labor Union statistics</p>
          <div class="chart">
            <echartsCroBar :chartData="chartData1"></echartsCroBar>
          </div>
        </div>
        <div class="fourth_floor">
          <div class="box_title">公职人员进入方式</div>
          <p class="en_desc">Trade Union statistics of market value industry</p>
          <div class="chart" ref="leftFourthChart"></div>
        </div>
      </div>
      <div class="con_box">
        <div class="title">缙云组织部数据驾驶舱</div>
        <div class="nav_svg_box">
          <div class="nav_svg" >
            <dv-decoration-5 style="width:400px;height:40px;" />
          </div>
        </div>
        <div class="con_nav">
          <div class="left">
            <p class="title">844</p>
            <p>公职人员招录人数</p>
          </div>
          <img src="@/assets/images/right.png" alt="">
          <div class="con">
            <div class="con_li" @click="handleTap(1)">
              <span>公务员</span><span class="num num_1">235</span>
            </div>
            <div class="con_li" @click="handleTap(2)">
              <span>事业人员</span><span class="num num_2">513</span>
            </div>
            <div class="con_li" @click="handleTap(3)">
              <span>国企人员</span><span class="num num_3">55</span>
            </div>
            <div class="con_li" @click="handleTap(4)">
              <span>专职社工</span><span class="num num_4">51</span>
            </div>
          </div>
          <img src="@/assets/images/right.png" alt="">
          <div class="right">
            <dv-active-ring-chart :config="config" style="width:150px;height:150px" />
          </div>
        </div>
        <div class="con_con">
          <div class="con_left">
            <div class="box_title">近三年招录情况</div>
            <div class="echart">
              <echartsLine :data="lineData1"></echartsLine>
            </div>
            <div class="echart">
              <echartsLine :data="lineData2"></echartsLine>
            </div>
            <div class="echart">
              <echartsLine :data="lineData3"></echartsLine>
            </div>
            <div class="echart">
              <echartsLine :data="lineData4"></echartsLine>
            </div>
          </div>
          <div class="con_right">
            <div class="top">
              <div class="left">
                <div class="box_title">专业录用人才</div>
                <div class="chart">
                  <echartsCroBar :chartData="chartData2"></echartsCroBar>
                </div>
              </div>
              <div class="right">
                <div class="box_title">紧缺专业入口</div>
                <div class="chart">
                  <echartsCroBar :chartData="chartData3"></echartsCroBar>
                </div>
              </div>
            </div>
            <div class="bot">
              <div class="box_title">专业目录分析</div>
              <div class="chart">
                <div>
                  <div class="zbox_title">
                    <p>ID</p>
                    <p>专业名称</p>
                    <p>在职人数</p>
                    <p>招录人数</p>
                    <p>剩余缺口</p>
                  </div>
                  <div class="animate_box">
                    <div class="animate">
                    <div class="zbox">
                    <p>1</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>2</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>3</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>4</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>5</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>6</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  <div class="zbox">
                    <p>7</p>
                    <p>电气工业</p>
                    <p>62</p>
                    <p>28</p>
                    <p style="color:#b9595d">10</p>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_box">
        <div class="first_floor">
          <div class="box_title">录用平均年龄趋势</div>
          <div class="en_desc">Trade Union statistics of market value industry</div>
          <div class="chart" ref="setRightFirst"></div>
        </div>
        <div class="second_floor">
          <div class="box_title">公职人员学历趋势</div>
          <div class="chart">
            <echartsCircle :data="circleData"></echartsCircle>
          </div>
        </div>
        <div class="third_floor">
          <div class="third_floor_box">
              <img src="@/assets/images/icon4.png" alt="" />
              <p>学位目标</p>
          </div>
          <div class="chart">
            <echartsBar :data="barData"></echartsBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echartsBest from '@/components/echartsBest.vue'
import echartsCroBar from '@/components/echartsCroBar.vue'
import echartsPie from '@/components/echartsPie.vue'
import echartsLine from '@/components/echartsLine.vue'
import echartsCircle from '@/components/echartsCircle.vue'
import echartsBar from '@/components/echartsBar.vue'
export default {
  components: {echartsBest,echartsCroBar,echartsPie,echartsLine,echartsCircle,echartsBar},
  data () {
    return {
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
            data: [51] // 系列中的数据内容数组
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
            data: [49] // 系列中的数据内容数组
          }
        ]
      },
      bestData2:{
        color:['#1d83ef', '#1b43da'],
        value:[ '中共党员', '其它' ],
        data: [
          {
            type: 'bar', // 系列类型
            name: '中共党员', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'#f1c01a',
              position: 'inside'
            },
            data: [39] // 系列中的数据内容数组
          },
          {
            type: 'bar', // 系列类型
            name: '其它', // 系列名称, 用于tooltip的显示, legend 的图例筛选
            // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
            stack: '总量',
            barMaxWidth: 20,
            label: {
              show: true,
              color:'#f1c01a',
              position: 'inside'
            },
            data: [61] // 系列中的数据内容数组
          }
        ]
      },
      chartData1:{
        left:'30%',
        barColor:'#008ef1',
        barWidth:10,
        itemName:'公职人员招录人数',
        nameData:[
                  '公安局',
                  '市场监管局',
                  '人力社保局',
                  '卫生健康局',
                  '自然资源局',
                  '建设局'
                ],
        valueData:[34, 18, 16, 13, 11, 10]
      },
      chartData2:{
        left:'30%',
        barColor:'#4d73a2',
        barWidth:12,
        itemName:'专业录用人数',
        nameData:['工学','法学','管理学','文学','经济学','理学','农学','教育学'],
        valueData:[51, 39, 35, 21, 15, 9,6,3]
      },
      chartData3:{
        left:'30%',
        barColor:'#408498',
        barWidth:11.5,
        itemName:'紧急专业录用人数',
        nameData:['法学','土木工程','城乡规划','建筑学','经济学','计算机科学','金融学','工程管理','工程造价'],
        valueData:[15, 13, 8, 6, 15, 9,6,3,5]
      },
      pieData:{
        color:['#b2efe0','#b3daeb','#7eb1e5','#4e77e0'],
        data: [
            { value: 10, name: '10%' },
            { value: 20, name: '20%' },
            { value: 30, name: '30%' },
            { value: 40, name: '40%' }
          ],
      },
      config:{
        color:['#b2efe0','#b3daeb','#7eb1e5','#4d77e0'],
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
      lineData1:{
        name:'双一流',
        data:["1", "8", "1"],
        bg:'#1ffff3'
      },
      lineData2:{
        name:'研究生',
        data:["3", "6", "10"],
        bg:'#1ba1e6'
      },
      lineData3:{
        name:'本科',
        data:["57", "82", "50"],
        bg:'#20e6ff'
      },
      lineData4:{
        name:'大专及以下',
        data:["13", "11", "3"],
        bg:'#1651dd'
      },
      circleData:{
        color: ['#b9ddef', '#3478b1', '#1b69e4'],
        datas:[
          {
            name: '研究生',
            value: 33,
          },
          {
            name: '本科生',
            value: 35,
          },
          {
            name: '大专及以下',
            value: 35,
          },
        ]
      },
      barData:{
        color:['#013eee','#1579ee'],
        typeData:['现招', '目标'],
        xData:['双一流'],
        data:[{
            name: '现招',
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
            data: [8]
          },{
            name: '目标',
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
            data: [20]
          }]
      }
    }
  },
  created () {
    // 获取当前时间
    this.handleTime();
  },
  mounted () {
    this.setLeftFourthChart()
    this.setRightFirstChart()
  },
  methods: {
    // 切换不同职员数据
    handleTap(type){
      switch(type){
        case 1:
        this.config={
          color:['#b2efe0','#b3daeb','#7eb1e5','#4d77e0'],
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
        this.config={
          color:['#b2efe0','#b3daeb','#7eb1e5','#4d77e0'],
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
        this.config={
          color:['#b2efe0','#b3daeb','#7eb1e5','#4d77e0'],
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
        this.config={
          color:['#b2efe0','#b3daeb','#7eb1e5','#4d77e0'],
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
    },
    setLeftFourthChart(){
      const chart = this.$refs.leftFourthChart
      const myChart = this.$echarts.init(chart)
      myChart.setOption({
            color: [
                "#1defe2", "#1cc1df", "#1a94d8", "#186cd2", "#1646cd"
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/> {b}: {c} ({d}%)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                textStyle: {
                    color: "#fff"
                },
                borderWidth: 0
            },
            legend: {
                show: false
            },
            series: [{
                name: '销售统计',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 0
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                data: [{
                        value: 35,
                        name: '录用',
                        label: {
                            color: '#1defe2'
                        }
                    },
                    {
                        value: 25,
                        name: '调任',
                        label: {
                            color: '#1cc1df'
                        }
                    },
                    {
                        value: 22,
                        name: '军转',
                        label: {
                            color: '#1a94d8'
                        }
                    },
                    {
                        value: 18,
                        name: '公选选举',
                        label: {
                            color: '#186cd2'
                        }
                    },
                    {
                        value: 23,
                        name: '其它',
                        label: {
                            color: '#1646cd'
                        }
                    }
                ]
            }]
        })
    },
    setRightFirstChart(){
      const chart = this.$refs.setRightFirst
      const myChart = this.$echarts.init(chart)
      let xLabel = ['2020年', '2021年', '2022年']
      let goToSchool = ["27.89", "26.29", "25.57"]
      myChart.setOption({
          backgroundColor: '#01091c',
          grid: {
              top: '40%',
              left: '10%',
              right: '20%',
              bottom: '25%',
              // containLabel: true
          },
          legend: {
              show:true,
              right: '10%',
              top: 'top',
              textStyle: {
                  color: '#fff',
                  fontSize:"14px"
              }
          },
          xAxis: [{
              type: 'category',
              boundaryGap: false,
              axisLine: {  //设置x轴坐标线的样式
                       lineStyle: {
                           type: 'solid',
                           color: '#fff',//x轴坐标线的颜色
                           width:'1'//x轴坐标线的宽度
                       }
                   },
              axisLabel: { //坐标轴刻度标签的相关设置
                  textStyle: {
                      color: '#fff',
                      fontSize: 12
                  },
                  formatter: function (data) {
                      return data
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
          yAxis: {
            min:0,
              scale: true,
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#2c3446'
                  },
              },
              axisLine: {
                lineStyle: {
                           type: 'solid',
                           color: '#2c3446',//x轴坐标线的颜色
                           width:'1'//x轴坐标线的宽度
                       }
              },
              axisLabel: {
                  show: false,
              },
              axisTick: {
                  show: false,
              },
          },
          series: [{
              name: '录用平均年龄',
              type: 'line',
              symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              symbolSize: 5,
              lineStyle: {
                  normal: {
                      width: 3,
                      color: '#127372', // 线条颜色
                  },
              },
              itemStyle: {
                  color: '#23fff3',
                  borderWidth: 3,
                  borderColor: '#23fff3'
              },
              label: {
                  show: true,
              },
              data: goToSchool
          }
          ]
      })
    },
    handleSetPieEchart(){
      const chart = this.$refs.pieChart
      const myChart = this.$echarts.init(chart)
      myChart.setOption({
        title: {
          text: this.pieData.title,
          left: 'center'
        },
        color:this.pieData.color,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ["50%", "40%"],// 调整图表位置
            labelLine:{
            normal:{
              length: 5, // 修改引导线第一段的长度
              length2: 20, // 修改引导线第二段的长度
              },
            },
            data: this.pieData.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
  }
}
</script>
<style scoped lang='scss'>
@import url(@/common/index.scss);
.left_box{
  .first_floor>.chart,.second_floor>.chart{
    border:1px solid #0b4989;
    border-radius:10px;
    width: 200px;
    height: 80px;
    position: relative;
    margin: 10px 0;
    padding: 10px;
    .datalist{
      position: absolute;
      top: 50px;
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
      top: 75px;
      left: 20px;
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
  }
  .third_floor>.chart,.fourth_floor>.chart{
    width: 200px;
    height: 150px;
  }
  .fourth_floor>.chart{
    position: relative;
    top: -20px;
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
      margin: 0 10px;
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
          color: #80b4e8;
        }
        .num_2{
          color: #4d77e0;
        }
        .num_3{
          color: #b3daeb;
        }
        .num_4{
          color: #23f4e8;
        }
      }
    }
    .right{
      width: 200px;
      height: 100px;
      position: relative;
      bottom: 25px;
      // .pieChart{
      //   width: 200px;
      //   height: 100px;
      // }
    }
  }
  .con_con{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .con_left{
    width: 49%;
    margin-left: 1%;
    margin-top: 10px;
    height: 420px;
    border:1px solid #0b4989;
    border-radius: 10px;
    background: #010919;
    padding: 10px;
    box-sizing: border-box;
    .echart{
      width: 400px;
      height:80px;
      margin: 15px;
    }
  }
  .con_right{
    width: 48%;
    margin-left: 1%;
    margin-top: 10px;
    height: 420px;
    .top{
      display: flex;
      align-items: center;
      .left,.right{
      .chart{
        margin: 5px 0 10px 0;
        width: 200px;
        height: 180px;
      }
    }
    }
    .bot>.chart{
      margin: 10px 0 0 20px;
      width: 350px;
      height: 180px;
      font-size: 13px;
      overflow: hidden;
      .zbox_title{
        display: flex;
          background: #162a54;
          border:1px solid #172f64;
          font-weight: 700;
          p{
          width: 80px;
          text-align: center;
          line-height: 35px;
        }
        }
        .animate_box{
          overflow:hidden;
        }
        .animate{
          animation: move 9s linear infinite;
          overflow:auto;
        }
        .animate:hover{
          animation-play-state: paused;
        }
        .zbox:hover{
          background: #162a54;
          color:#cfc;
        }
      .zbox{
        display: flex;
        p{
          width: 80px;
          text-align: center;
          line-height: 35px;
        }

      }
    }
  }
}
.right_box{

  .first_floor .chart,.second_floor .chart,.third_floor .chart{
    margin: 10px 0 20px 0;
    width: 180px;
  }
  .first_floor .chart{
    height: 200px;
  }
  .second_floor .chart{
    height: 120px;
  }
  .third_floor .chart{
    height: 180px;
  }
  .third_floor_box{
    font-size: 18px;
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
  .big_title{
      font-size: 18px;
      background: #001246;
      padding: 5px 100px 5px 5px;
      font-weight: 700;
      border-radius: 5px;
    }
}
</style>
