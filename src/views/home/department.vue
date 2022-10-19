<template>
  <div class="container">
    <navTabs :selectId="selectId"></navTabs>
    <div class="title_box">
      <img src="@/assets/images/title_icon.png" alt="" />
      <div class="left_title">公职人员入口质量关应用场景</div>
      <div class="en_desc">Federation of trade union member data monitoring screen</div>
    </div>
    <div class="right_title">{{time}}</div>
    <div class="box">
      <div class="left_box" v-if="!showEchartsStatsu"></div>
      <div class="left_echarts_box" v-else>
        <div class="title" @click="handleChange">
          <img src="@/assets/images/icon4.png" alt="">
          <div class="box_title">{{titleName}}</div>
          <i class="el-icon-arrow-down"></i>
        </div>
        <img class="bg_img" src="@/assets/images/cn.png" alt="">
        <div class="box_title">部门介绍</div>
        <div class="desc_box">
          <p class="desc">1.公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公
          人员部门分析公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员……</p>
        </div>
        <div class="box_title">科室职能</div>
        <div class="desc_line_box">
          <p class="desc_line">进一步职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职
            进一步职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职人员部门分析数据公职
          人员部门分析数据公职人员门分析数据公职人员部门分析数据公职人员部门部门分析数据数据公职人员部门分析数据公职职人员……</p>
        </div>
        <div class="title_box">
          <div class="box_title">紧缺专业</div>
          <div class="title re_title" @click="handleSelectEduType">
            <img src="@/assets/images/icon4.png" alt="">
            <div class="box_title">{{selectedValue}}</div>
            <i v-if="!eduStatus" class="el-icon-arrow-down" style="color:#2b4e81"></i>
            <i v-else class="el-icon-arrow-up" style="color:#2b4e81"></i>
          </div>
        </div>
        <div class="selectEduBox" v-if="eduStatus">
          <p v-for="item,index in eduData" @click="handleEduSelected(item,index)">{{item}}</p>
        </div>
        <div class="bot">
              <div class="chart">
                <div>
                  <div class="zbox_title">
                    <p>科室</p>
                    <p>专业名称</p>
                    <p>人才缺口</p>
                  </div>
                  <div class="animate_box">
                    <div class="animate">
                      <div class="zbox" v-for="item in selectObjList">
                          <p>{{selectObj.name}}</p>
                          <p>{{selectObj.title}}</p>
                          <p style="color:#f6c43d">{{selectObj.value}}</p>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div class="con_box">
        <div class="title">公职人员部门分析数据</div>
        <div class="search_box" v-if="!showEchartsStatsu">
            <input type="text" v-model='searchValue' @keydown.enter.trim="handleSearch"/>
            <p @click="handleSearch">确定</p>
        </div>
        <div class="nav_svg_box">
          <div class="nav_svg" >
            <dv-decoration-5 style="width:400px;height:40px;" />
          </div>
        </div>
        <div class="select_box" @click="handleShowEcharts">
          <div class="select_con_box" @click="handleSelect1">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData1[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus1"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect2">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData2[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus2"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect3">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData3[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus3"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect4">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData4[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus4"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect5">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData5[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus5"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect6">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData6[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus6"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect7">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData7[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus7"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect8">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData8[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus8"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <div class="select_con_box" @click="handleSelect9">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{listData9[0]}}</p>
            <i class="el-icon-arrow-down" v-if="selectStatus9"></i>
            <i class="el-icon-arrow-up" v-else></i>
          </div>
          <!-- <div class="select_con_box" v-for="item in list" :key="index">
            <img src="@/assets/images/icon1.png" alt="">
            <p>{{item}}</p>
            <i class="el-icon-arrow-down"></i>
          </div> -->
        </div>
        <div class="con_con_box" v-if="!showEchartsStatsu">
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus1" v-for="item,index in listData1" :style="enterIndex1==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter1(index)" @mouseleave="handleLeave1(index)">
              <img v-if="enterIndex1==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus2" v-for="item,index in listData2" :style="enterIndex2==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter2(index)" @mouseleave="handleLeave2(index)">
              <img v-if="enterIndex2==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus3" v-for="item,index in listData3" :style="enterIndex3==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter3(index)" @mouseleave="handleLeave3(index)">
              <img v-if="enterIndex3==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus4" v-for="item,index in listData4" :style="enterIndex4==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter4(index)" @mouseleave="handleLeave4(index)">
              <img v-if="enterIndex4==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus5" v-for="item,index in listData5" :style="enterIndex5==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter5(index)" @mouseleave="handleLeave5(index)">
              <img v-if="enterIndex5==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus6" v-for="item,index in listData6" :style="enterIndex6==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter6(index)" @mouseleave="handleLeave6(index)">
              <img v-if="enterIndex6==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus7" v-for="item,index in listData7" :style="enterIndex7==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter7(index)" @mouseleave="handleLeave7(index)">
              <img v-if="enterIndex7==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus8" v-for="item,index in listData8" :style="enterIndex8==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter8(index)" @mouseleave="handleLeave8(index)">
              <img v-if="enterIndex8==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="select_item_zbox">
            <div class="select_item_box" v-if="selectStatus9" v-for="item,index in listData9" :style="enterIndex9==index?selectStyle:''" @click="handleSelected(item)" @mouseenter="handleEnter9(index)" @mouseleave="handleLeave9(index)">
              <img v-if="enterIndex9==index" src="@/assets/images/icon2.png" alt="">
              <img v-else src="@/assets/images/icon3.png" alt="">
              <p>{{item}}</p>
            </div>
          </div>
        </div>
        <div class="con_echarts_box" v-else>
          <div class="con_top">
            <div class="box_title">部门人员总览</div>
            <div class="con_charts_box">
              <div class="con_charts">
              <div class="box_title_min">人员类别</div>
              <echartsPie :data="pieData1"></echartsPie>
            </div>
            <div class="con_charts">
              <div class="box_title_min">年龄分布</div>
              <echartsPie :data="pieData2"></echartsPie>
            </div>
            <div class="con_charts">
              <div class="box_title_min">学位学历</div>
              <echartsPie :data="pieData3"></echartsPie>
            </div>
            <div class="con_charts">
              <div class="box_title_min">专业情况</div>
              <echartsPie :data="pieData4"></echartsPie>
            </div>
            </div>
          </div>
          <div class="con_bottom">
            <div class="left">
              <div class="box_title">近三年招录情况</div>
              <div class="en_desc">County/District Labor Union statistics</div>
              <echartsLine :data="lineData1"></echartsLine>
              <echartsLine :data="lineData2"></echartsLine>
              <echartsLine :data="lineData3"></echartsLine>
              <echartsLine :data="lineData4"></echartsLine>
            </div>
            <div class="con">
              <img src="@/assets/images/eye.png" alt=""/>
              <p>科室业务专业对比</p>
              <img src="@/assets/images/eye.png" alt=""/>
            </div>
            <div class="right">
                <div class="right_chart_title">年轻干部分析</div>
                <div class="right_chart_box">
                  <p>紧急专业</p>
                  <div class="right_chart">
                    <echartsCroBar :chartData="chartData1"></echartsCroBar>
                  </div>
                </div>
                <div class="right_chart_box">
                  <p>当前现状</p>
                  <div class="right_chart">
                    <echartsCroBar :chartData="chartData2"></echartsCroBar>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_box" v-if="!showEchartsStatsu"></div>
      <div class="right_echarts_box" v-else>
        <div class="top">
          <div class="box_title">预警信息</div>
          <div class="en_desc">Trade Union statistics of market value industry</div>
          <div class="text_box">
            <img src="@/assets/images/z_icon.png" alt="">
            <p class="active">科协连续5年未招录行政事业人员</p>
          </div>
        </div>
        <div class="bottom">
          <div class="box_title">招录联审建议</div>
          <div class="en_desc">Trade Union statistics of market value industry</div>
          <div class="text_box">
            <img src="@/assets/images/z_icon.png" alt="">
            <p>科协连续5年未招录行政事业人员</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navTabs from '@/components/navTabs.vue'
import echartsPie from '@/components/echartsPie.vue'
import echartsLine from '@/components/echartsLine.vue'
import echartsCroBar from '@/components/echartsCroBar.vue'
export default {
  components: {navTabs,echartsPie,echartsLine,echartsCroBar},
  data () {
    return {
      time:'',
      selectId:2,
      titleName:'',
      selectIndex:'',
      // list:[listData1[0], listData2[0], listData3[0],listData4[0], listData5[0], listData6[0],listData7[0], listData8[0], listData9[0]],
      listData1:['党委机构','人大机构','政府机构','双协机构','法院','检察院','事业单位','国有企业','街道乡镇'],
      listData2:['人大机构','党委机构','政府机构'],
      listData3:['政府机构','人大机构','党委机构','双协机构','法院','检察院','事业单位','国有企业','街道乡镇'],
      listData4:['法院','人大机构','政府机构'],
      listData5:['检察院'],
      listData6:['事业单位'],
      listData7:['双协机构','人大机构','政府机构','党委机构','法院','检察院','事业单位','国有企业','街道乡镇'],
      listData8:['国有企业','人大机构','政府机构','双协机构','法院','检察院','事业单位'],
      listData9:['街道乡镇','人大机构','政府机构','双协机构','法院','检察院','事业单位','国有企业','党委机构'],
      searchValue:'',
      enterIndex1:0,
      enterIndex2:0,
      enterIndex3:0,
      enterIndex4:0,
      enterIndex5:0,
      enterIndex6:0,
      enterIndex7:0,
      enterIndex8:0,
      enterIndex9:0,
      leaveIndex1:'',
      leaveIndex2:'',
      leaveIndex3:'',
      leaveIndex4:'',
      leaveIndex5:'',
      leaveIndex6:'',
      leaveIndex7:'',
      leaveIndex8:'',
      leaveIndex9:'',
      selectStatus1:false,
      selectStatus2:false,
      selectStatus3:false,
      selectStatus4:false,
      selectStatus5:false,
      selectStatus6:false,
      selectStatus7:false,
      selectStatus8:false,
      selectStatus9:false,
      selectStyle:{
        background: '#404040',
        color:'#0b72fb',
        cursor:'pointer'
      },
      showEchartsStatsu:false,
      pieData1:{
        color:['#7fcbf4','#5385f4'],
        data: [
            { value: 45, name: '45%' },
            { value: 55, name: '55%' }
          ],
      },
      pieData2:{
        color:['#2fa9a4','#2cb1e4','#246ddb'],
        data: [
            { value: 32, name: '32%' },
            { value: 41, name: '41%' },
            { value: 27, name: '27%' }
          ],
      },
      pieData3:{
        color:['#32e0f5','#468cf5'],
        data: [
            { value: 49, name: '49%' },
            { value: 51, name: '51%' }
          ],
      },
      pieData4:{
        color:['#3181f4','#2cb1e3','#aac8f4'],
        data: [
            { value: 73, name: '73%' },
            { value: 23, name: '23%' },
            { value: 4, name: '4%' }
          ],
      },
      lineData1:{
        name:'双一流',
        data:["1", "8", "1"],
        bg:'#21fff2'
      },
      lineData2:{
        name:'研究生',
        data:["3", "6", "10"],
        bg:'#1da2e6'
      },
      lineData3:{
        name:'本科',
        data:["57", "82", "50"],
        bg:'#22e6ff'
      },
      lineData4:{
        name:'大专及以下',
        data:["13", "11", "3"],
        bg:'#1852dc'
      },
      chartData1:{
        left:'40%',
        barColor:'#1593c1',
        barWidth:15,
        itemName:'紧急专业招录人数',
        nameData:[
                  '法学',
                  '计算机科学与技术',
                  '数据科技与大数据技术'
                ],
        valueData:[1, 1, 1]
      },
      chartData2:{
        left:'40%',
        barColor:'#0d81d9',
        barWidth:15,
        itemName:'当前人数',
        nameData:[
                  '工学',
                  '经济学',
                  '管理学'
                ],
        valueData:[1, 3, 8]
      },
      selectObjList:['1','2','3','4','5'],
      selectObj:{
        name:'侦察科',
        title:'经济法学',
        value:'20'
      },
      selectedValue:'经济法学',
      eduData:['经济法学','科学','数学','经济学','化学'],
      eduStatus:false,// 专业下拉菜单
    }
  },
  created () {
    // 获取当前时间
    this.handleTime();
  },
  mounted () {},
  methods: {
    // 切换部门
    handleChange(){
      this.showEchartsStatsu=false
      switch(this.selectIndex){
        case 1:
          this.selectStatus1=true
        break;
        case 2:
          this.selectStatus2=true
        break;
        case 3:
          this.selectStatus3=true
        break;
        case 4:
          this.selectStatus4=true
        break;
        case 5:
          this.selectStatus5=true
        break;
        case 6:
          this.selectStatus6=true
        break;
        case 7:
          this.selectStatus7=true
        break;
        case 8:
          this.selectStatus8=true
        break;
        case 9:
          this.selectStatus9=true
        break;
      }
    },
    // 搜索对应的部门单位
    handleSearch(){
      console.log(this.searchValue)
      if(this.searchValue){
        this.showEchartsStatsu=true
        this.titleName=this.searchValue
        this.searchValue=''
      }
    },
    // 专业下拉功能
    handleSelectEduType(){
      this.eduStatus=!this.eduStatus
    },
    // 切换专业功能
    handleEduSelected(item,index){
      console.log(item,index)
      this.eduStatus=!this.eduStatus
      this.selectedValue=item
      switch(index){
        case 0:
          this.selectObj={
            name:'侦察科',
            title:'经济法学',
            value:'20'
          }
        break;
        case 1:
          this.selectObj={
            name:'保卫科',
            title:'法学',
            value:'30'
          }
        break;
        case 2:
          this.selectObj={
            name:'医科',
            title:'经济',
            value:'20'
          }
        break;
        case 3:
          this.selectObj={
            name:'警务科',
            title:'法学',
            value:'45'
          }
        break;
        case 4:
          this.selectObj={
            name:'守卫科',
            title:'经济',
            value:'80'
          }
        break;
      }
    },
    //部门选中事件
    handleSelected(item){
      console.log(item)
      this.titleName=item
      this.selectStatus1=false
      this.selectStatus2=false
      this.selectStatus3=false
      this.selectStatus4=false
      this.selectStatus5=false
      this.selectStatus6=false
      this.selectStatus7=false
      this.selectStatus8=false
      this.selectStatus9=false
      this.showEchartsStatsu=true
    },
    // 是否显示图表
    handleShowEcharts(){
      this.showEchartsStatsu=false
    },
    handleSelect1(){
      this.selectStatus1=!this.selectStatus1
      this.selectIndex=1
    },
    handleSelect2(){
      this.selectStatus2=!this.selectStatus2
      this.selectIndex=2
    },
    handleSelect3(){
      this.selectStatus3=!this.selectStatus3
      this.selectIndex=3
    },
    handleSelect4(){
      this.selectStatus4=!this.selectStatus4
      this.selectIndex=4
    },
    handleSelect5(){
      this.selectStatus5=!this.selectStatus5
      this.selectIndex=5
    },
    handleSelect6(){
      this.selectStatus6=!this.selectStatus6
      this.selectIndex=6
    },
    handleSelect7(){
      this.selectStatus7=!this.selectStatus7
      this.selectIndex=7
    },
    handleSelect8(){
      this.selectStatus8=!this.selectStatus8
      this.selectIndex=8
    },
    handleSelect9(){
      this.selectStatus9=!this.selectStatus9
      this.selectIndex=9
    },
    // 鼠标进入事件
    handleEnter1(index){
      this.enterIndex1=index
    },
    handleEnter2(index){
      this.enterIndex2=index
    },
    handleEnter3(index){
      this.enterIndex3=index
    },
    handleEnter4(index){
      this.enterIndex4=index
    },
    handleEnter5(index){
      this.enterIndex5=index
    },
    handleEnter6(index){
      this.enterIndex6=index
    },
    handleEnter7(index){
      this.enterIndex7=index
    },
    handleEnter8(index){
      this.enterIndex8=index
    },
    handleEnter9(index){
      this.enterIndex9=index
    },
    // 鼠标移出事件
    handleLeave1(index){
      this.leaveIndex1=index
      this.enterIndex1=0
    },
    handleLeave2(index){
      this.leaveIndex2=index
      this.enterIndex2=0
    },
    handleLeave3(index){
      this.leaveIndex3=index
      this.enterIndex3=0
    },
    handleLeave4(index){
      this.leaveIndex4=index
      this.enterIndex4=0
    },
    handleLeave5(index){
      this.leaveIndex5=index
      this.enterIndex5=0
    },
    handleLeave6(index){
      this.leaveIndex6=index
      this.enterIndex6=0
    },
    handleLeave7(index){
      this.leaveIndex7=index
      this.enterIndex7=0
    },
    handleLeave8(index){
      this.leaveIndex8=index
      this.enterIndex8=0
    },
    handleLeave9(index){
      this.leaveIndex9=index
      this.enterIndex9=0
    }
  }
}
</script>
<style scoped lang='scss'>
@import url(@/common/index.scss);
.left_box{
  border:1px solid #0b4989 !important;
  background: #101b2c;
  width: 265px !important;
}
.left_echarts_box{
  border:1px solid #0b4989 !important;
  background: #101b2c;
  width: 220px;
  height: 90%;
  margin:20px 0 0 20px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px 5px;
  position: relative;
  .selectEduBox{
    position: absolute;
    top: 520px;
    left: 75px;
    z-index: 9999;
    background: #081740;
    width: 120px;
    text-align: center;
    p{
      font-size: 12px;
      line-height: 25px;
      color:#86c9d6;
    }
    p:hover{
      cursor:pointer;
      background: #404040;
      color:#256ff9;
    }
  }
  .title{
    display:flex;
    align-items: center;
    height: 25px;
    border:1px solid #0a68e5;
    position: relative;
    img{
      width: 15px;
      height: 15px;
      position: absolute;
      left: 10px;
      top: 5px;
    }
    .box_title{
      position: absolute;
      left: 30px;
    }
    i{
      position: absolute;
      right: 10px;
    }
  }
  .bg_img{
    width: 150px;
    margin: 10px 0 10px 30px;
  }
  .box_title{
    margin: 10px;
  }
  .desc_box{
    height: 100px;
    overflow: hidden;
    animation-play-state: paused;
    .desc{
      text-indent: 2em;
      font-size: 13px;
      height: 100px;
      line-height: 150%;
      animation: move 5s linear infinite;
    }
    .desc:hover{
      animation-play-state: paused;
    }
  }
  .desc_line_box{
    height: 120px;
    overflow: hidden;
    .desc_line{
      text-indent: 2em;
      font-size: 13px;
      line-height: 150%;
      height: 120px;
      animation: move 8s linear infinite;
    }
    .desc_line:hover{
      animation-play-state: paused;
    }
  }

  .title_box{
    margin-top: 10px;
    display: flex;
    align-items: center;
    .box_title{
      margin: 0;
    }
    .re_title{
      margin-left: 5px;
    width: 120px;
    height: 20px;
    .box_title{
      font-size: 13px;
    }
  }
  }
  .bot>.chart{
      margin: 10px 0 0 20px;
      width: 200px;
      height: 120px;
      font-size: 12px;
      overflow: hidden;
      position: relative;
      right: 20px;
      .zbox_title{
        display: flex;
          background: #142742;
          font-size: 12px !important;
          p{
          width: 80px;
          text-align: center;
          line-height: 30px;
        }
        }
        .animate_box{
          overflow:hidden;
        }
        .animate{
          animation: move 2.5s linear infinite;
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
        font-size: 12px;
        p{
          width: 80px;
          text-align: center;
          line-height: 25px;
        }

      }
    }
}
.con_box{
  position:relative;
  .select_box{
    position:relative;
    top: 15px;
    display: flex;
    align-items: center;
  }
  .search_box{
  z-index:8888;
  height:35;
  display: flex;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 10px;
  input{
    width: 130px;
    height: 25px;
    margin-right: 5px;
    background: #031028;
    border:1px solid #0b4989;
    border-radius: 5px;
    padding-left: 10px;
    color:#fff;
  }
  p{
    width: 50px;
    text-align: center;
    border-radius: 5px;
    line-height: 25px;
    background: #2168a8;
  }
}
  .select_box .select_con_box{
    width: 100px;
    background: #1d3453;
  }
  .con_con_box .select_item_box,.select_box .select_con_box{
    margin-right: 3px;
      display: flex;
      align-content: center;
      vertical-align: middle;
      height: 30px;
      position: relative;
      img{
        position: absolute;
        left: 5px;
        top: 3px;
      }
      p{
        position: absolute;
        font-size: 12px;
        left: 30px;
        top: 7px;
      }
      i{
        position: absolute;
        right: 5px;
        top: 8px;
      }
  }
  .con_con_box{
    display: flex;
    border:1px solid #0b4989 !important;
    position: relative;
    top: 20px;
    width: 100%;
    height: 80%;
    background: #0b162d;
    border-radius: 10px;
    .select_item_zbox{
      width: 95px;
      margin-right: 8px;
    }
  }
  .con_con_box .select_item_box{
    width: 95px;
    background: #202020;
    color:#a2e3f2;
    border-left:1px solid #0b4989;
    border-right:1px solid #0b4989;
  }
}
.con_echarts_box{
  width: 930px;
  height: 80%;
  position: relative;
  top: 20px;
  background: #101826;
  border:1px solid #053160;
  border-radius:10px;
  box-sizing: border-box;
  padding: 5px 10px;
  .con_top{
    width: 98%;
    height: 150px;
    border:1px solid #053160;
    border-radius:10px;
    .con_charts_box{
      display: flex;
      align-items: center;
    }
    .box_title{
      margin:5px 0 5px 5px;
      font-size: 16px;
    }
    .con_charts{
      text-align: center;
      width: 20%;
      height: 115px;
      margin:0 2%;
      .box_title_min{
        font-size: 16px;
      }
    }
  }
  .con_bottom{
    width: 100%;
    height: 370px;
    display:flex;
    align-items: center;
    .left{
      box-sizing: border-box;
      padding:5px 10px;
      width: 45%;
      height: 100%;
      border:1px solid #053160;
    }
    .con{
      box-sizing: border-box;
      padding:5px 10px;
      width: 8%;
      height:100%;
      z-index:999;
      p{
        font-size: 20px;
        width: 20px;
        margin-left: 10px;
      }
      img{
        width: 50px;
      }
    }
    .right{
      width: 45%;
      height: 95%;
      border:1px solid #053160;
      .right_chart_title{
        width: 45%;
        margin-left: 150px;
        font-weight: 700;
        line-height: 30px;
        font-size: 18px;
      }
      .right_chart_box{
        width: 70%;
        height: 140px;
        margin-top: 20px;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }
  }
}
.right_box{
  border:1px solid #0b4989 !important;
  background: #0a0e17;
  width: 250px !important;
}
.right_echarts_box{
  border:1px solid #0b4989 !important;
  background: #0a0e17;
  border-radius: 15px;
  width: 250px;
  height: 90%;
  margin:20px 0 0 0;
  box-sizing: border-box;
  padding: 5px 10px;
  .text_box{
    display: flex;
    margin:10px 0 5px 0;
    img{
      width: 15px;
      height: 15px;
    }
    p{
      font-size: 10px;
      color:#63b5f2;
      font-weight: 700;
      // margin-left: 3px;
    }
    .active{
      color: #d84346;
    }
  }
  .top{
    width: 100%;
    height: 220px;
  }
  .bottom{
    width: 100%;
    height: 450px;
  }
}
</style>
