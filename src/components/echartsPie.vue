<template>
  <div class='box' ref="chart">
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      pieData:this.data
    }
  },
  props:{
    'data':{
      type:Object,
      default:[]
    }
  },
  watch:{
    data(val){
      // console.log(val);
      this.pieData=val
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
    // change(){
    //   this.$emit('change',this.pieData)
    // }
  }
}
</script>
<style scoped lang='scss'>
.box{
  width: 180px;
  height: 120px;
}
</style>
