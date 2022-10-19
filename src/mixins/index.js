export default {
  data(){
    return{
      time:'',
      selectId:0,
      tabsList:['总体概述','入口情况','部门分析','考核评价','个性模块'],
    };
  },
  methods:{
    // 设置当前时间
    handleTime() {
      const fn = () => {
        var dt = new Date();
        var mouth = dt.getMonth() + 1;
        var minutes =
          dt.getMinutes() < "10" ? "0" + dt.getMinutes() : dt.getMinutes();
        var seconds =
          dt.getSeconds() < "10" ? "0" + dt.getSeconds() : dt.getSeconds();
        this.time =
          dt.getFullYear() +
          "-" +
          mouth +
          "-" +
          dt.getDate() +
          " " +
          dt.getHours() +
          ":" +
          minutes +
          ":" +
          seconds;
      };
      setInterval(fn, 1000);
    },
    // 点击跳转对应页面
    handleTap(index){
      if(index!=4){
        this.selectId=index
      }
      switch(index){
        case 0:
          this.$router.push('/home/total')
          break;
        case 1:
          this.$router.push('/home/enter')
          break;
        case 2:
          this.$router.push('/home/department')
          break;
        case 3:
          this.$router.push('/home/test')
          break;
        case 4:
          alert("等待构建")
          break;
      }
    }
  }
}