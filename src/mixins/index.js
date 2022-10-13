export default {
  data(){
    return{
      time:''
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
  }
}