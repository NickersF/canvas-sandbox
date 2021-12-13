export class CanvasContext {
    canvasViewport: JQuery<HTMLElement>;
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(canvasEl) {
        try {
            this.canvasElement = $('#' + canvasEl).get(0) as HTMLCanvasElement;
            this.canvasViewport = $("#CanvasViewport");
            this.ctx = this.canvasElement.getContext('2d');

            this.canvasElement.width = this.canvasViewport.width();
            this.canvasElement.height = this.canvasViewport.height();
        } catch (e) {
            console.log('Exception caught: ' + e);
        }
    }

    resizeViewport() {
        $(window).on("resize", () => {
            this.canvasElement.width = this.canvasViewport.width();
            this.canvasElement.height = this.canvasViewport.height();
            this.draw()
        })
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 150, 100);
    }
}