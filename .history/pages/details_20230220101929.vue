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
  },
  methods: {
    
  },
}
</script>
<style></style>