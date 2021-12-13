export class RectangleTool {
    offsetX: number;
    offsetY: number;

    constructor() {
        
    }

    sampleCoords(canvasEl) {
        $("#" + canvasEl).on("mousemove", e => {
            this.offsetX = e.offsetX;
            this.offsetY = e.offsetY;
            $("#CursorXPos").text(this.offsetX);
            $("#CursorYPos").text(this.offsetY);
        })
    }
}