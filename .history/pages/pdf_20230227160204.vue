<template>
			<client-only>
					<vue-pdf class="your-pdf-class" :src="pdfSrc" :page="1" @num-pages="pdfPageCount = $event"></vue-pdf>
					<div v-if="pdfPageCount > 1">
							<div v-for="(pageNum, index) in pdfPageCount " :key="index">
									<vue-pdf class="your-pdf-class" :src="pdfSrc" :page="pageNum" v-if="pageNum > 1"></vue-pdf>
							</div>
					</div>
			</client-only>
</template>
<script>

export default {
	data() {
		return {
			pdfSrc: '../static/dome/CCF_000002',
			pdfPageCount : 0,
		}
	},
	mounted(){

	},
	methods:{

	}
}
</script>
	