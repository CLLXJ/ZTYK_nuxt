<template>
  <div>
    <Top></Top>
    <div  class="content">
      <div class="title">{{productData.xmname}}</div>
      <pdf :url ="productData.xmwj"></pdf>
    </div>
    <Bottom></Bottom>
  </div>
  
</template>
<script>
import Top from '~/components/Navigation.vue'
import Bottom from '~/components/BottomNavigation.vue'
import pdf from '~/components/pdf.vue'
import {mapState,mapMutations} from "vuex";
export default {
  components:{
    Top,
    Bottom,
    pdf
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
        xmwj:"",//项目文件
      }
    } 
  },
  mounted(){
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      console.log(this.$router.history.current.query)
      this.indexID=this.$router.history.current.query
      this.Xmdata_x.forEach((element,index) => {
        if(index = this.indexID){
          this.productData = element
        }
      });
  },
  // //接收路由传递过来的参数
  // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   // debugger
  //   // console.log(params,'传过来的值')
  //   // console.log(query.id)
  //   const id = query.id
  //   return query
  // },
  methods: {
    getID(e){
      this.indexID = e
      console.log(this.indexID);
    }
  }
}
</script>
<style >
.content{
  margin-top: 120px;
  
}
.title{
    margin: 20px 0;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    color: rgb(8, 189, 235);
  }
</style>