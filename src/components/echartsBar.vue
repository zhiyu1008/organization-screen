<template>
<div class="chart" ref="chart"></div>
</template>

<script>
export default {
  props:{
    'data':{
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
        color:this.data.color,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:this.data.typeData,
          textStyle:{
        	  fontSize: 10,//字体大小
            color: '#fff'//字体颜色
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLine:{     //x轴坐标轴，false为隐藏，true为显示
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#FFf',
                fontSize: 10,
              }
            },
            data: this.data.xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine:{
              show:false // 不显示网格线
            },
            axisLine:{
              show:false
            },
            axisLabel: {
                show: false, // 不显示坐标轴上的文字
            },
            axisTick:{
                show:false // 不显示坐标轴刻度线
            },
          }
        ],
        series: this.data.data
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.chart{
  width: 300px;
  height: 150px;
}
</style>
