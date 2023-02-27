<template>
	<div>
		<!-- <h1>nihao</h1>
		<canvas
  v-for="num in numPages"
  :key="num"
  :id="'canvas_' + num"
  class="canvas"
></canvas> -->
	<!-- <pdf  v-for="i in numPages" :key="i"  :src="url" :page="i"></pdf>	 -->
	<!-- <iframe ref="iframe" src="../static/demo/CCF_000002.pdf" /> -->
	</div>
</template>

<script>
	// import pdf from 'vue-pdf'
	export default {
		components: {
			// pdf
		},
		data(){
			 return{
				    url: '',
				    numPages:1,
						fileData:null
			 }
		 },
		mounted: function() {
		  // this.getNumPages("http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf")
		  this.readTextFile("http://localhost:3000/static/demo/CCF_000002.pdf");
		}, 
		methods: {
			 readTextFile(fileName){
						var rawFile = new XMLHttpRequest();
						rawFile.open("GET", fileName, false);
						rawFile.onreadystatechange = function(){
								if(rawFile.readyState === 4){
										if(rawFile.status === 200 || rawFile.status == 0){
												var allText = rawFile.responseText;
												alert(allText);
										}
								}
						}
						debugger
						rawFile.send(null);
				}
 

			// async renderPdf(num = 1) {
			// 	this.fileData.getPage(num).then(page => {
			// 		// 设置canvas相关的属性
			// 		const canvas = document.getElementById("canvas_" + num);
			// 		const ctx = canvas.getContext("2d");
			// 		const dpr = window.devicePixelRatio || 1;
			// 		const bsr =
			// 			ctx.webkitBackingStorePixelRatio ||
			// 			ctx.mozBackingStorePixelRatio ||
			// 			ctx.msBackingStorePixelRatio ||
			// 			ctx.oBackingStorePixelRatio ||
			// 			ctx.backingStorePixelRatio ||
			// 			1;
			// 		const ratio = dpr / bsr;
			// 		const viewport = page.getViewport({ scale: this.pdfScale }); // 设置放缩比率
			// 		canvas.width = viewport.width * ratio;
			// 		canvas.height = viewport.height * ratio;
			// 		canvas.style.width = viewport.width + "px";
			// 		canvas.style.height = viewport.height + "px";
			// 		ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
			// 		const renderContext = {
			// 			canvasContext: ctx,
			// 			viewport: viewport,
			// 		};
			// 		// 数据渲染到canvas画布上
			// 		page.render(renderContext);
			// 		if (this.numPages > num) {
			// 			setTimeout(() => {
			// 				return this.renderPdf(num + 1);
			// 			});
			// 		}
			// 	});
			// },
			// setPdfZoomin() {
			// 	const max = 2;
			// 	if (this.pdfScale >= max) {
			// 		return;
			// 	}
			// 	this.pdfScale = this.pdfScale + 0.2;
			// 	this.renderPdf();
			// },
			// // pdf缩小
			// setPdfZoomout() {
			// 	const min = 0.6;
			// 	if (this.pdfScale <= min) {
			// 		return;
			// 	}
			// 	this.pdfScale = this.pdfScale - 0.1;
			// 	this.renderPdf();
			// },
			// getNumPages(url) {
			// 	var loadingTask = pdf.createLoadingTask(url)
			// 	loadingTask.then(pdf => {
			// 		this.url = loadingTask
			// 		this.numPages = pdf.numPages
			// 	}).catch((err) => {
			// 		console.error('pdf加载失败')
			// 	})
			// },
		}
	}
</script>