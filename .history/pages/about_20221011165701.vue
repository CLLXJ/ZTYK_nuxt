<template>
    <div class="content">
      <Top></Top> 
      <div class="about_body">
        <div class="about_black font-mr">
            <p>关  于  我  们</p>
        </div>
        <!-- 公司介绍 -->
        <div class="gsjs">
            <div class="gsjs_left">
                <div class="gsjs_title">
                公司介绍
                </div>
                <div class="gsjs_content ">
                    <span>
                        昭通优课科技有限公司成立于2015年10月27日，注册地位于云南省昭通市昭阳区省耕山水D237-D239，
            法定代表人为许刚。经营范围包括计算机软硬件开发、应用及技术咨询服务、计算机系统集成及综合布线、
            经济信息咨询、教育信息咨询、电子产品、通信器材、办公用品、五金交电、计算机及配件、工业自动化产品、
            仪器仪表、普通机械及配件销售（依法须经批准的项目，经相关部门批准后方可开展经营活动）
                    </span>
                </div>
            </div>
            <div class="gsjs_right">

            </div>
           
        </div>
      </div>
      <Bottom >
      </Bottom>
    </div>
</template>
<script>
  import Top from '~/components/Navigation.vue'
  import Bottom from '~/components/BottomNavigation.vue'
    export default{
        components:{
            Top,
            Bottom
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            
        },
    }
</script>
<style scoped>
  .content{
    width: 100%;
    height: 100%;
  }
  .about_body{
    width: 100%;
    /* background-color: aquamarine; */
  }
  .about_black{
    padding: 50px;
    width: 70%; 
    min-width: 1130px;
    height: 600px;
    line-height: 600px;
    font-size: 30px;
    margin: auto;
    /* height: 400px; */
    background-image: url("../static/gywm01.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .gsjs{
    margin: auto;
    padding: 20px;
    padding-top: 50px ;
    display: flex;
  }
  .gsjs_left{
    flex: 1;
  }
  .gsjs_right{
    flex: 1;
  }
  .gsjs_title{
    color: #1d3e97;
    font-weight: 500;
    font-size: 50px;
    margin-bottom: 0.22rem;
    opacity: .5;
    line-height: .66rem;
  }
  .gsjs_content{
    text-indent:36px;
    margin-top: 50px ;
    font-size: 18px;
    color: black;  
  }
</style>
