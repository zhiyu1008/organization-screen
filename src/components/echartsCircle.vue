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
      const datas=this.data.datas
      let sum = 0;
      let int=0;
      for (var i of this.data.datas) {
        sum += i.value;
        int=parseInt(((this.data.datas[0].value)/sum)*100)
      }
      const title = {
        name: this.data.datas[0].name,
        value: int,
        unit: '%',
      };
      const rich = {
        name: {
          fontSize: 12,
          align: 'left',
        },
        name1: {
          fontSize: 10,
          align: 'left'
        },
        name2: {
          fontSize: 10,
          align: 'left',
          padding: [0, 0, 0, 10],
        },
        value: {
          color: '#ccc',
          fontSize: 12,
          align: 'left',
        },
        title: {
          color: '#fff',
          fontSize: 10
        },
        titleUnit: {
          color: '#fff',
          fontSize: 12
        },
        titleValue: {
          color: '#fff',
          fontSize: 14,
          fontWeight: 600
        },
      };
      myChart.setOption( {
        color:this.data.color,
        backgroundColor: '#000E1A',
        legend: {
          orient: 'vertical',
          x: '45%',
          y: 'center',
          itemWidth: 12,
          itemHeight: 12,
          width: '40',
          align: 'left',
          textStyle: {
            color: '#D7E5FF',
            rich,
          },
          formatter: function (name) {
            // debugger;
            let res = datas.filter(v => v.name === name)
            let str = ''
            str = '{name1|' + res[0].name + '}{name2|' + res[0].value + '}'
            return str
          },
        },
        series: [
          {
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['45%', '60%'],
            data: this.data.datas,
            startAngle: 180,
            label: {
              show: true,
              position: 'center',
              formatter: () => `{titleValue|${title.value}}{titleUnit|${title.unit}}\n{title|${title.name}}`,
              rich,
            },
          },
        ],
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.chart{
  width: 200px;
  height: 120px;
}
</style>
