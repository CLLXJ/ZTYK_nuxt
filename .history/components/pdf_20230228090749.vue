<template>
	<div style="width:80%;height:100%; padding: 0 10%;
  
    margin-top: 100px;
    background-color: whitesmoke;">
		<vue-pdf :src="pdfUrl"  v-for="i in numPages"
		:key="i"
		:page="i"></vue-pdf>   
	</div>
</template>
<script>

export default {
	props:{
		url:{
			type:String,
			default: ''
		}
	},
	data() {
		// return {
		// 	pdfSrc: '../static/dome/CCF_000002.pdf',
		// 	pdfPageCount : 1,
		// http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf
		// }
		return{
     numPages:0,
     vuePdf: null
   }
	},
	mounted() {
		if (process.client) {
					this.vuePdf = require('vue-pdf')
					this.pdfLoadTask() 
				}
	},
	methods: {
		pdfLoadTask () {
			console.log('http://127.0.0.1:5500'+this.url)
		this.pdfUrl = this.vuePdf.default.createLoadingTask('http://127.0.0.1:5500'+this.url)
		debugger
		this.pdfUrl.promise.then(pdf => {
				this.numPages = pdf.numPages;
				console.log(this.numPages,'页码')
		})

		},
	}

}
</script>
	