<template>
  <div>
    <Top></Top>
    <h1 style="margin-top: 100px;">nihao1</h1>
    <h1>{{$router.query}}</h1>
    <h1>nihao1</h1>
    <h1>nihao1</h1>
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
      indexID:null,
      productData: {
        xmname:"",//项目名称
        xmtd:"",
        xmjj:"",//项目简介
        xmsyt:"",//项目首页图路径}
      }
    } 
  },
  mounted(){
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      console.log(this.$router)
    // }
    // this.productData = asyncData()
    
  },
  //接收路由传递过来的参数
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // debugger
    // console.log(params,'传过来的值')
    // console.log(query.id)
    const id = query.id
    return query
  },
  methods: {
    getID(e){
      this.indexID = e
      console.log(this.indexID);
    }
  }
}
</script>
<style></style>