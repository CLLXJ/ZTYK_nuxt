<template>
  <div>
    <h1>{{this.$router.query}}</h1>
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
      productData: null
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
    console.log(params)
    this.productData = params
  },
  methods: {
  }
}
</script>
<style></style>