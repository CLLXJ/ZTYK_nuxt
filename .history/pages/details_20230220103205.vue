<template>
  <div>
    <h1>{{this.$router.query}}</h1>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      
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
  },
  methods: {
  }
}
</script>
<style></style>