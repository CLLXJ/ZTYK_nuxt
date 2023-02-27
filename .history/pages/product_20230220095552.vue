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
            <div v-for=" (item,index) in Xmdata_x" :key="index" class="al_item"  @click="gotoDetails(item)">
              <div  class="al_item_image">
                <img
                  class="lb_img"
                  :src="'/_nuxt'+item.xmsyt"
                  alt=""
                />
              </div>
              <div class="al_item_right">
                <div class="bt_title">{{ item.xmname }}</div>
                <div class="js_title">{{ item.xmjj}}</div>
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
    // console.log(this.Xmdata_x,'传值')
  },
  methods: {
    gotoDetails(data){
      debugger
      console.log(data)
      this.$router.push({
        path:'details'
      })
    }
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
  line-height: 2rem;
  color: #333;
  word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 9;
			overflow: hidden; 
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
    margin-top: 100px;
    color: rgb(80, 79, 79);
    /* height: 400px; */
    background-image: url("../static/cpal01.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-shadow: 5px -5px 10px 10px rgba(0, 0, 0, .2);

  }
  .allb{
    width: 100%;
    padding: 40px;
  }
  .al_item{
    width: 75%;
    height: 350px;
    margin: 50px 0 50px 10%;
    /* border: 1px solid saddlebrown; */
    display: flex;
    box-shadow: 5px -5px 10px 10px rgba(0, 0, 0, .2);

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