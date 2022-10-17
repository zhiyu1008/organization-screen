<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  props:{
    'data':{
      type:Object,
      default:[]
    }
  },
  created () { },
  mounted () {
    this.handleSetEcharts()
  },
  methods: {
    handleSetEcharts(){
      const chart = this.$refs.chart
      const myChart = this.$echarts.init(chart)
      let xLabel = ['2020年', '2021年', '2022年']
      let goToSchool = this.data.data
      myChart.setOption({
          grid: {
              top: '30%',
              left: '10%',
              right: '50%',
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
              name: this.data.name,
              type: 'line',
              symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              symbolSize: 5,
              lineStyle: {
                  normal: {
                      width: 3,
                      color: this.data.bg, // 线条颜色
                  },
              },
              itemStyle: {
                  color: this.data.bg,
                  borderWidth: 3,
                  borderColor: this.data.bg
              },
              label: {
                  show: true,
              },
              data: goToSchool
          }
          ]
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.chart{
  width: 380px;
  height: 80px;
}
</style>
