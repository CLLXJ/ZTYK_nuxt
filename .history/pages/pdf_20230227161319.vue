<template>
	<div style="width:100%;height:100%">
		<!-- <vue-pdf  :src="pdfUrl"></vue-pdf>  -->
		<vue-pdf :src="pdfUrl"  v-for="i in numPages"
		:key="i"
		:page="i"></vue-pdf>   
	</div>
			<!-- <client-only>
					<vue-pdf class="your-pdf-class" :src="pdfSrc" :page="1" @num-pages="pdfPageCount = $event"></vue-pdf>
					<div v-if="pdfPageCount > 1">
							<div v-for="(pageNum, index) in pdfPageCount " :key="index">
									<vue-pdf class="your-pdf-class" :src="pdfSrc" :page="pageNum" v-if="pageNum > 1"></vue-pdf>
							</div>
					</div>
			</client-only> -->
</template>
<script>

export default {
	data() {
		// return {
		// 	pdfSrc: '../static/dome/CCF_000002.pdf',
		// 	pdfPageCount : 1,
		// }
		return{
     numPages:0,
     vuePdf: null
   }
	},
	created() {
		if (process.client) {
					this.vuePdf = require('vue-pdf')
					this.pdfLoadTask() 
				}
	},
	methods: {
		pdfLoadTask () {
		this.pdfUrl = this.vuePdf.default.createLoadingTask('../static/dome/CCF_000002.pdf')
		this.pdfUrl.promise.then(pdf => {
				this.numPages = pdf.numPages;
				console.log()
		})

		},
	}

}
</script>
	