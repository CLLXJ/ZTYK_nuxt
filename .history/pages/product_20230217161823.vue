<template>
    <div class="content">
        <Top></Top>
        <div class="body_product">
          <div class="about_black">
            <p>产  品  案  例</p>
          </div>
          <!-- 案例标签 -->
          <div></div>
          <!-- 案例列表 -->
          <div class="allb">
            <div class="al_item">
              <div class="al_item_image">
                <img
                  class="lb_img"
                  src="../static/gswh04.jpg"
                  alt=""
                />
              </div>
              <div class="al_item_right">
                <div class="bt_title">智慧校园中心平台</div>
                <div class="js_title">为实现智慧校园中各类软件、硬件系统的智能联动、数据融合、高效运行，元素科技自主研发一套元素智慧校园中心平台（简称中心平台），通过盖平台可助力学习实现信息技术玉教育教学深度融合，达到提高教学质量、提升管理效率、促进家校共育的目的。</div>
              </div>
            </div>
          </div>
        </div>
        <Bottom></Bottom>
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
  computed:{
    ...mapState(["Xmdata_x"])
  },
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.Xmdata_x)
  },
  methods: {
    
  },
}
</script>
<style scoped>
.bt_title{
  text-align: left;
  font-size: 24px;
  margin: 20px 0 0 20px;
  font-weight: bolder;
  color: #1d3e97;
}
.js_title{
  margin: 30px 0 0 20px;
  text-align: left;
  text-indent: 2rem;
  font-size: 16px;
  font-weight: 500;
}
.body_product{
  width: 100%;
}
.about_black{
    padding: 50px;
    width: 70%; 
    min-width: 1130px;
    height: 600px;
    line-height: 600px;
    font-size: 50px;
    margin: auto;
    color: rgb(80, 79, 79);
    /* height: 400px; */
    background-image: url("../static/cpal01.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .allb{
    width: 100%;
    padding: 40px;
  }
  .al_item{
    width: 75%;
    height: 350px;
    margin: 50px 0 50px 10%;
    border: 1px solid saddlebrown;
    display: flex;
  }
  .al_item_image{
    width: 35%;
    height: 100%;
    /* border: 1px solid saddlebrown; */
  }
  .al_item_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
            object-position: 50% 20%;
  }
  .al_item_right{
    margin-left: 2%;
    width: 63%;
    height: 100%;
    /* border: 1px solid saddlebrown; */
  }
</style>