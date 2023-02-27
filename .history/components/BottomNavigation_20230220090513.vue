<template>
    <div class="bottom_Navigation">
        <div class="bottom_left">
            <div class="logo_icon ">
            </div>
            <div class="gsrwm">
                
            </div>
        </div>
        <div class="bottom_midde">
            <div class="bottom_item">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="grid-content ">
                            <nuxt-link to="/about">关于我们</nuxt-link>
                            <nuxt-link to="/about">公司文化</nuxt-link>
                            <nuxt-link to="/about">公司责任</nuxt-link>
                            <!-- <nuxt-link to="/about">关于我们</nuxt-link> -->
                            <!-- <p>公司文化</p> -->
                            <!-- <p>公司责任</p> -->
                            <!-- <p>公司动态</p> -->
                        </div></el-col>
                    <el-col :span="12">
                        <div class="grid-content">
                            <p>产品介绍</p>
                            <p>服务产品</p>
                            <p>服务案例</p>
                            <p>代理合作</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div> 
        <div class="bottom_right">
            <div>联系我们</div>
            <div class="right_PC_content">
                <div class="right_subtitle">
                    24小时服务电话：
                </div>
                <div class="right_PC_call">13608718863</div>
                <div class="right_subtitle">服务邮箱：</div>
                <div class="right_PC_call">13608718863@163.com</div>
            </div>
        </div> 
    </div>
</template>
<<script>
export default {
    data() {
        return {
            
        }
    },
    mounted(){

    },
    methods:{

    },
}
</script>
<style scoped>
.bottom_Navigation{
    height: 400px;
    margin-top:50px ;
    background: #f4f4f4;
    display: flex;
}
.bottom_left{
    width: 30%;
    height: 300px;
    /* margin: auto; */
    /* line-height: 400px; */
    border-right: 1px solid  #e5e5e5;;
}
.bottom_midde{
    width: 40%;
    height: 300px;
    margin: auto;
    padding: 20px;
    line-height: 400px;
    border-left: 1px solid  #e5e5e5;;
}
.bottom_right{
    width: 30%;
    height: 300px;
    padding: 40px;
    margin: auto;
    text-align: left;
    line-height: 400px;
    border-left: 1px solid  #e5e5e5;;
}
.bottom_right :first-child{
    font-size: 20px;
    font-weight: bolder;
}
.right_PC_content{
    margin-top: 20px;
}
.right_subtitle{
    font-size: 20px;
    font-weight: bolder;
    color: #666;
    margin-top: 30px;
    margin-bottom: 0.06rem;
}
.right_PC_call{
    margin-top: 10px ;
    color: #203c87;
    font-weight: 500;
    word-break: break-all;
    white-space: pre-wrap;
    font-size: 18px;
}
 .el-row {
    margin-bottom: 20px;
   
  }
  .el-row :last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    color: rgb(82, 82, 82);
    font-size: 18px;
    font-weight: bold;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bottom_item{
    margin-top: 40px ;
  }
  .logo_icon{
    margin-top:66px;
    margin-left: -100px;
    width: 100px;
    height: 80px;
    display: inline-block;
    background-image: url('../static/logo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>