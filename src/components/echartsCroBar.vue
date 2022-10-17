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
        tooltip: {
              showContent: true,
              trigger: 'axis',
              backgroundColor: 'rgba(8,36,68,.7)',
              color: '#fff',
              textStyle: {
                color: '#fff',
              },
            },
            legend: {
              show:false,
              top: '0%',
              right: '10',
              icon: 'rect',
              itemWidth: 13,
              itemHeight: 13,
              textStyle: {
                color: 'rgba(250,250,250,0.6)',
                fontSize: 12,
              },
            },
            grid: {
              left: this.chartData.left,
              right: '16%',
              top: '5%',
              bottom: '8%',
              // width: 250,
            },
            xAxis: [
              {
                // splitLine: {
                //   show: false,
                // },
                itemStyle:{
                  fontSize:10
                },
                type: 'value',
                show: false,
              },
            ],
            yAxis: [
              {
                // splitLine: {
                //   show: false,
                // },
                axisLine: {
                  //y轴
                  show: false,
                },
                type: 'category',
                // axisTick: {
                //   show: false,
                // },
                inverse: true,
                data: this.chartData.nameData,
                axisLabel: {
                  color: '#fff',
                  fontSize: 10,
                  margin: 2
                },
              }
            ],
            series: [
              {
                showBackground: true,
                backgroundStyle: {
                  color: '#131f30'
                },
                name: this.chartData.itemName,
                type: 'bar',
                barWidth: this.chartData.barWidth, // 柱子宽度
                label: {
                  show: true, // 显示值
                  position: "right", // 显示位置
                  color: "white",
                },
                itemStyle: {
                  color:this.chartData.barColor
                },
                data: this.chartData.valueData,
              },
            ],
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.chart{
  // width: 230px;
  height: 120px;
}
</style>
