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
              <div class="al_item_right"></div>
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
    width: 80%;
    height: 350px;
    margin: 50px 0 50px 5%;
    border: 1px solid saddlebrown;
    display: flex;
  }
  .al_item_image{
    width: 35%;
    height: 100%;
    border: 1px solid saddlebrown;
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
    border: 1px solid saddlebrown;
  }
</style>