<template>
    <div class="content">
      <Top></Top> 
      <div class="about_body">
        <div class="about_black font-mz">
            <p>关  于  我  们</p>
        </div>
        <!-- 公司介绍 -->
        <div class="gsjs">
            <div class="gsjs_title">
                公司介绍
            </div>
            <div class="gsjs_content">

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
  }
  .gsjs_title{

    color: #1d3e97;
    font-weight: 500;
    font-size: 50px;
    margin-bottom: 0.22rem;
    opacity: .5;
    line-height: .66rem;
  }
</style>
