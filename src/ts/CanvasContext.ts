export class CanvasContext {
    canvas;
    ctx;
    constructor() {
        try{ 
            this.canvas = $('#CanvasEl').get(0) as HTMLCanvasElement;
            this.ctx = this.canvas.getContext('2d');
         }catch(e){ 
             console.log('We have encountered an error: ' + e);
         }
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 150, 100);
    }
}