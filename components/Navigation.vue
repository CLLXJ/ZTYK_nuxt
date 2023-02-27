<template>
    <div  class="header">
        <div class="logo_icon " >
        </div>
        <div class="home">
            <nuxt-link to="/">首页</nuxt-link>
            <!-- <a style="color: #1d3e97;" target="_blank" rel="noopener noreferrer">首页</a> -->
        </div>
        <div class="home">
            <nuxt-link to="/about">关于</nuxt-link>
            <!-- <a style="color: #1d3e97;" target="_blank" v-on:click="backGY()" rel="noopener noreferrer">关于</a> -->
        </div>
        <div class="home">
            <nuxt-link to="/product">案例</nuxt-link>
            <!-- <a style="color: #1d3e97;" target="_blank" rel="noopener noreferrer">案例</a> -->
        </div>
        <!-- <div class="home">
            <a style="color: #1d3e97;" target="_blank" rel="noopener noreferrer">动态</a>
        </div> -->
        <div class="home">
            <a style="color: #1d3e97;" target="_blank" rel="noopener noreferrer">联系</a>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            backGY(){
                // window.document.push
                this.$router.push('/about')
            }
            
        },
    }
</script>
<style  scoped>
  .header{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    z-index: 999;
    background-color: white;
    overflow: hidden;
  } 
  .logo_icon{
    width: 100px;
    height: 80px;
    display: inline-block;
    background-image: url('../static/logo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
  }
  .home{
    margin-left: 40px;
    font-size: 20px;
  }
</style>