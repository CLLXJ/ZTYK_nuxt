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
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      console.log(params)
    },
  methods: {
  }
}
</script>
<style></style>