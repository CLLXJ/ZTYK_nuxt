<template>
  <div class="show_pdf" style="display: none;">
    <div id="pdfDiv"></div> 
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
            
        }
    },
    mounted(){
      initPdf(filePath);
    },
    methods:{
      // filePath是要预览的pdf地址，D:\nginx-1.21.1\html\fzzd\resource\articleFile\20220420\053129003.pdf
 
 // 展示pdf
      initPdf(url) {
         pdfjsLib.GlobalWorkerOptions.workerSrc =
             '/public/pdfjs/build/pdf.worker.js';// 这里引入pdfjs下的worker.js
         var loadingTask = pdfjsLib.getDocument(url);
         var pdfDiv = document.getElementById('pdfDiv');//这里的pdfDiv和上面容器中的id对应
         loadingTask.promise.then(function (pdf) {
             for (var i = 1; i <= pdf.numPages; i++) {
                 pdf.getPage(i).then(function (page) {
                     var scale = 1.5;
                     var viewport = page.getViewport({scale: scale,});
                     // Support HiDPI-screens.
                     var outputScale = window.devicePixelRatio || 1;
  
                     var canvas = document.createElement('canvas');
                     var context = canvas.getContext('2d');
                     pdfDiv.appendChild(canvas);
                     canvas.width = Math.floor(viewport.width * outputScale);
                     canvas.height = Math.floor(viewport.height * outputScale);
                     canvas.style.width = Math.floor(viewport.width) + "px";
                     canvas.style.height = Math.floor(viewport.height) + "px";
  
                     var transform = outputScale !== 1
                         ? [outputScale, 0, 0, outputScale, 0, 0]
                         : null;
  
                     var renderContext = {
                         canvasContext: context,
                         transform: transform,
                         viewport: viewport
                     };
                     page.render(renderContext);
                 });
             }
         });
     }
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