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
    console.log(this.$router.query)
    debugger
    asyncData()
    
  },
  methods: {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      console.log(params)
    },
  },
}
</script>
<style></style>