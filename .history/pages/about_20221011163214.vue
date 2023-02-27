<template>
    <div class="content">
      <Top></Top> 
      <div class="about_body">
        <div class="about_black"></div>
      </div>
      <Bottom >
      </Bottom>
    </div>
</template>
<script>
  import Top from '~/components/Navigation.vue'
  import Bottom from '~/components/BottomNavigation.vue'
    export default{
        components:{
            Top,
            Bottom
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            
        },
    }
</script>
<style scoped>
  .content{
    width: 100%;
    height: 100%;
  }
  .about_body{
    width: 100%;
    /* background-color: aquamarine; */
  }
  .about_black{
    width: 100%; 
    height: 400px;
    background-image: url("../static/gygs01.png");
    background-repeat: no-repeat;
  }
</style>
