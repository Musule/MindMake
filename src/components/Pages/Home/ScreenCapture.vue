<template>
    <div class="screen-capture">
        <div id="capture" ref="capture"  @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp"></div>
    </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
    name: 'ScreenCapture',
    props: {
        html: Element
    },
    data() {
        return {
            drawFlag: false,
            mouseX: 0,
            mouseY: 0,
            ctx: null,
            oldPoint: {}
        };
    },
    methods: {
        capture() {
            const capture = this.$refs.capture;
            this.captureDom(this.html, canvas => {
                capture.appendChild(canvas);
                this.ctx = document.querySelector("#capture-canvas").getContext("2d");
            });
        },
        clear() {
            const capture = this.$refs.capture;
            capture.removeChild(document.querySelector('#capture-canvas'));
        },
        getCaptureImage() {
            let canvas = document.querySelector("#capture-canvas");
            let dataURL = canvas.toDataURL();
            return this.dataURLtoFile(dataURL, 'capture.png');
        },
        captureDom(dom, callback) {
            let shareContent = dom; 
            let width = shareContent.offsetWidth; 
            let height = shareContent.offsetHeight; 
            let offsetTop = shareContent.offsetTop; 
            let canvas = document.createElement("canvas"); 
            canvas.id = "capture-canvas";
            let context = canvas.getContext("2d");
            let scaleBy = this.getPixelRatio(context);
            // let scaleBy = 2;
            canvas.width = width * scaleBy;
            canvas.height = (height + offsetTop) * scaleBy; 
            context.scale(scaleBy, scaleBy);
            let opts = {
                allowTaint: true,
                tainttest: true, 
                scale: scaleBy, 
                canvas: canvas, 
                logging: false, 
                width: width,
                height: height 
            };
            html2canvas(shareContent, opts).then(canvas => {
                callback(canvas);
            });
        },
        getPixelRatio: function(context) {
            let backingStore =
                context.backingStorePixelRatio ||
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio ||
                1;
            return (window.devicePixelRatio || 1) / backingStore;
        },
        onMouseDown(e) {
            let [x, y] = [e.offsetX, e.offsetY];
            this.oldPoint = {
                x: x - 1,
                y: y - 1
            };
            this.drawFlag = true;
            this.drawLlie(x, y);
        },
        onMouseMove(e) {
            if (!this.drawFlag) return;
            let [x, y] = [e.offsetX, e.offsetY];
            this.drawLlie(x, y);
            this.oldPoint = {x, y};
        },
        onMouseUp() {
            this.drawFlag = false;
        },
        drawLlie(x, y) {
            if (!this.ctx) return;
            this.ctx.beginPath();
            this.ctx.lineWidth = 3;
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round";
            this.ctx.strokeStyle = "red";
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(this.oldPoint.x, this.oldPoint.y);
            this.ctx.stroke();
            this.ctx.closePath();
        },
        dataURLtoFile(dataurl, filename) {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        },
    }
}
</script>