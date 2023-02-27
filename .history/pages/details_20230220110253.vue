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
      productData: {}
    }
  },
  mounted(){
    debugger
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    //   console.log(params)
    // }
    
  },
  //接收路由传递过来的参数
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // debugger
    // this.productData = params
    // console.log(this.productData)
    // debugger
  },
  methods: {
  }
}
</script>
<style></style>