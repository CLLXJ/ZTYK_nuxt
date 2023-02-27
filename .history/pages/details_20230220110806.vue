<template>
  <div>
    <Top></Top>
    <h1 style="margin-top: 100px;">nihao1</h1>
    <h1>nihao1</h1>
    <h1>nihao1</h1>
    <h1>nihao1</h1>
    <Bottom></Bottom>
  </div>
  
</template>
<script>
import Top from '~/components/Navigation.vue'
import Bottom from '~/components/BottomNavigation.vue'
export default {
  components:{
    Top,
    Bottom
  },
  data() {
    return {
      productData: {
        xmname:"",//项目名称
        xmtd:"",
        xmjj:"",//项目简介
        xmsyt:"",//项目首页图路径}
      }
    } 
  },
  mounted(){
    debugger
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    //   console.log(params)
    // }
    this.productData = asyncData()
    
  },
  //接收路由传递过来的参数
   async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // debugger
    // this.productData = await params
    // console.log(this.productData)
    return params
    // debugger
  },
  methods: {
  }
}
</script>
<style></style>