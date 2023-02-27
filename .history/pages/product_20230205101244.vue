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
            <div class="al_item"></div>
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
    
  },
  methods: {
    
  },
}
</script>
<style scoped>
.body_product{
  width: 100%;
}
.about_black{
    padding: 50px;
    width: 70%; 
    min-width: 1130px;
    height: 600px;
    line-height: 600px;
    font-size: 30px;
    margin: auto;
    color: rgb(255, 255, 255);
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
  }
</style>