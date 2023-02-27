<template>
  <div class="content">
    <!-- 顶部导航栏 -->
    <Top></Top> 
    <div>
      <!-- 轮播图 -->
      <el-carousel style="margin-top: 80px;" height="800px" :interval="10000"  class="carousel" indicator-position="outside">
        <!-- <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item> -->
        <el-carousel-item >
          <img class="lb_img" src="../static/lb01.webp" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img class="lb_img" src="../static/lb02.webp" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img class="lb_img" src="../static/lb03.webp" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img class="lb_img" src="../static/lb04.webp" alt="">
        </el-carousel-item>
      </el-carousel>
      <!-- 公司简介 -->
      <div class="intrduce">
        <div class="intrduce_title"><span>昭通优课科技有限公司</span></div>
        <div class="intrduce_body">
          <span>
            昭通优课科技有限公司成立于2015年10月27日，注册地位于云南省昭通市昭阳区省耕山水D237-D239，
            法定代表人为许刚。经营范围包括计算机软硬件开发、应用及技术咨询服务、计算机系统集成及综合布线、
            经济信息咨询、教育信息咨询、电子产品、通信器材、办公用品、五金交电、计算机及配件、工业自动化产品、
            仪器仪表、普通机械及配件销售（依法须经批准的项目，经相关部门批准后方可开展经营活动）
          </span>
        </div>
      </div>
      <div class="">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple-left">
              <div class="grid-item">
                <nuxt-link to="/about">
                  <div class="grid-lj ">
                    <span>关  于  我  们</span>
                    <div class="el-icon-arrow-right"></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <div class="grid-item">
                <div class="grid-lj ">
                  <span>公  司  文  化</span>
                  <div class="el-icon-arrow-right"></div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-dark">
              <div class="grid-item">
                <div class="grid-lj ">
                  <span>产  品  案  例</span>
                  <div class="el-icon-arrow-right"></div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 产品案例 -->
      <div class="product">
        <div class="intrduce_title"><span>产品案例</span></div>
        <div style="margin-top: 10px
        "> 
          <div class="more_link">
            <a  href="javascript:;" @click="goto" >更多</a>
          </div>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
              <div class="grid-content bg-purple-left">
                <div class="grid-item">
                  <div class="grid-lj ">
                    <span>智慧校园</span>
                    <div class="el-icon-arrow-right"></div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div class="grid-item">
                  <div class="grid-lj ">
                    <span>个性化学习</span>
                    <div class="el-icon-arrow-right"></div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <div class="grid-item">
                  <div class="grid-lj ">
                    <span>教学智能安全音箱</span>
                    <div class="el-icon-arrow-right"></div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      
      <Bottom >
      </Bottom>
    </div>
  </div>
</template>

<script>
  import Top from '~/components/Navigation.vue'
  import Bottom from '~/components/BottomNavigation.vue'
  import {mapState,mapMutations} from "vuex";
export default {
  components:{
    Top,
    Bottom
  },
  data() {
    return {
      // XmData:[
      //   { //智慧校园项目
      //     xmname:"智慧校园中心平台",//项目名称
      //     xmtd:"开放融合、智能联动、数据至慧",
      //     xmjj:"为实现智慧校园中各类软件、硬件系统的智能联动、数据融合、高效运行，元素科技自主研发一套元素智慧校园中心平台（简称中心平台），通过盖平台可助力学习实现信息技术玉教育教学深度融合，达到提高教学质量、提升管理效率、促进家校共育的目的。",//项目简介
      //     xmsyt:"/static/gswh04.jpg",//项目首页图路径
      //   },
      //   { //智慧校园项目
      //     xmname:"智慧校园中心平台",//项目名称
      //     xmtd:"开放融合、智能联动、数据至慧",
      //     xmjj:"为实现智慧校园中各类软件、硬件系统的智能联动、数据融合、高效运行，元素科技自主研发一套元素智慧校园中心平台（简称中心平台），通过盖平台可助力学习实现信息技术玉教育教学深度融合，达到提高教学质量、提升管理效率、促进家校共育的目的。",//项目简介
      //     xmsyt:"/static/gswh04.jpg",//项目首页图路径
      //   },
      // ]
    }
  },
  mounted(){
    // this.setXmdata(this.XmData)
  },  
  computed:{
    ...mapState(["Xmdata_x"])
  },
  methods: {
    ...mapMutations(["setXmdata"]),
    goto(){
      console.log('跳转')
      this.$router.push('/product')
    }
  },
}
</script>
<style  scoped >
  .content{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 800px;
    margin: 0;
  }
  .lb_img{
    width: 100%;
    height: 100%;
  }
  .intrduce{
    width: 100%;
    height: 250px;
    /* border: 1px solid #fadddf; */
  }
  .intrduce_title{
    margin: auto;
    margin-top: 30px;
    font-size: 30px;
  }
  .intrduce_body{
    width: 50%;
    min-width: 700px;
    margin: auto;
    margin-top: 30px;
    font-size: 18px;
    text-align: left;
    text-indent:36px;
    color:  #999;
    font-weight: bold;
    line-height:200%;
  }
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background-size:100% 100%;
    background-clip:content-box;
    background-image: url('../static/gswh02.jpg');
  }
  .bg-purple-left {
    background-size:100% 100%;
    background-clip:content-box;
    background-image: url('../static/gswh04.jpg');
  }
  .bg-purple-light {
    background-clip:content-box;
    background-size:100% 100%;
    background-image: url('../static/gswh03.jpg');
  }
  .grid-content {
    border-radius: 4px;
    min-height: 320px;
    min-width: 360px;
    transition: all .5s ease-out;
    position: relative;
  }
  .grid-content:hover{
    cursor: pointer;
    transform: scale(1.1);
    box-shadow : 0px 0px 40px rgb(0, 0, 0,20%);
    /* transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    transition-delay: 0s; */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-item{
    color:#f9fafc;
  }
  .grid-lj{
    width: 100%;
    height: 60px;
    position: absolute;
    background-color: rgba(0,0,0,.3);
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
    top: 260px;
  }
  .grid-lj > div{
    font-size: 20px;
  }
  .product{
    margin-top: 80px
  }
  .more_link{
    margin-right: 75px;
    margin-bottom: 20px;
    font-size: 18px;
    text-align: right;
    color: rgb(46, 44, 44);
  }
  .more_link:hover{
    color: rgb(70, 70, 245);
  }

</style>
