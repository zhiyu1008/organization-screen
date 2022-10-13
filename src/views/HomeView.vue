<template>
  <div class="container">
    <div class="left_title">提高公职人员入口质量关应用场景</div>
    <div class="right_title">{{time}}</div>
    <div class="box">
      <div class="left_box">
        <div class="title">录用人才性别分布</div>
      </div>
      <div class="con_box">
        <div class="title">缙云组织部驾驶舱</div>
        <div class="nav_svg_box">
          <div class="nav_svg" >
            <dv-decoration-5 style="width:400px;height:40px;" />
          </div>
        </div>
      </div>
      <div class="right_box">
        <div class="title">录用平均年龄趋势</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      time:''
    }
  },
  created () {
    // 获取当前时间
    this.handleTime();
  },
  mounted () { },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
@import url(../common/index.scss);
</style>
