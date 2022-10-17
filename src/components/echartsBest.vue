<template>
  <div class="chart" ref="chart"></div>
  </template>

  <script>
  export default {
    props:{
      'chartData':{
        type:Object,
        default:[]
      }
    },
    components: {},
    data () {
      return {
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
        myChart.setOption({
        color: this.chartData.color,
        // 设置图表的位置
        grid: {
          x: 0, // 左间距
          y: 0, // 上间距
          x2: 80, // 右间距
          y2: 0, // 下间距
        },
        // 图例组件
        legend: {
          textStyle: { // 文本样式
            fontSize: 12,
            color: '#cdd3ee'
          },
          top: 13,
          left:10,
          data: this.chartData.value // 图例的数据数组
        },
        // X轴
        xAxis: {
          type: 'value',
          axisTick: {
            show: false // 是否显示坐标轴刻度 默认显示
          },
          // 坐标轴轴线
          axisLine: { // 是否显示坐标轴轴线 默认显示
            show: false // 是否显示坐标轴轴线 默认显示
          },
          // 坐标轴在图表区域中的分隔线
          splitLine: {
            show: false // 是否显示分隔线。默认数值轴显示
          },
          // 坐标轴刻度标签
          axisLabel: {
            show: false // 是否显示刻度标签 默认显示
          }
        },
        yAxis: [
          // 左侧Y轴
          {
            // 坐标轴类型,  'category' 类目轴，适用于离散的类目数据
            // 为该类型时必须通过 data 设置类目数据
            type: 'category',
            // 坐标轴刻度
            axisTick: {
              show: false // 是否显示坐标轴刻度 默认显示
            },
            // 坐标轴轴线
            axisLine: { // 是否显示坐标轴轴线 默认显示
              show: false, // 是否显示坐标轴轴线 默认显示
              lineStyle: { // 坐标轴线线的颜色
                color: '#cdd3ee'
              }
            },
            // 坐标轴在图表区域中的分隔线
            splitLine: {
              show: false // 是否显示分隔线。默认数值轴显示
            }
          }
        ],
        // 系列列表
        series:this.chartData.data
          // {
          //   type: 'bar', // 系列类型
          //   name: '女性', // 系列名称, 用于tooltip的显示, legend 的图例筛选
          //   stack: '总量',
          //   barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
          //   // 图形上的文本标签
          //   label: {
          //     show: true,
          //     color:'#fff',
          //     position: 'inside'
          //   },
          //   data: [58] // 系列中的数据内容数组
          // }
        })
      }
    }
  }
  </script>
  <style scoped lang='scss'>
  .chart{
    // width: 200px;
    height: 120px;
  }
  </style>
