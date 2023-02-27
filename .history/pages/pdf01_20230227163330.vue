
<template>
  <div class="pdf">
    <pdf
        v-for="currentPage in pageCount"
        :key="currentPage"
        :src="src"
        :page="currentPage"
        @loaded="loadPdfHandler"
      >
      </pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
  export default {
    components: {pdf},
    data () {
      return {
        currentPage: 0, // pdf文件页码
        pageCount: 0, // pdf文件总页数
        src: '/static/dome/CCF_000002.pdf', // pdf文件地址
      }
    },　　
    created() {　　　　　　
      this.src = pdf.createLoadingTask(this.src)
　　},
    method: {
      loadPdfHandler (e) {
        this.currentPage = 1 // 加载的时候先加载第一页
        this.pageCount = this.bookPages[this.$route.query.book]
      }

    }
  }

</script>
