<template>
  <div class="show_pdf" style="display: none;">
    <pdf :src="src"  v-for="i in numPages"
      :key="i"
      :page="i">
    </pdf>
  </div>
</template>
<script>
  export default {
    props:{
      filePath :{
        type:String,
        default: ''
      }
    },
    data() {
        return {
          numPages: 0,
          src: '',
          vuePdf: null
        }
    },
    
    created() {
      if (process.client) {
        this.vuePdf = require('vue-pdf')
        this.pdfLoadTask()
      }
    },
    mounted(){
    },
    methods:{
  
    },
}
</script>
<style>
  .show_pdf{
    width: 90%;
    height: 100%;
    min-width: 700px;

  }
  .pdfDiv{
    width: 100%;
    height: 100%;
  }
</style>