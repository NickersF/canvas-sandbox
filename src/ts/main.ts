import { CanvasContext } from "./CanvasContext";
import { LineTool } from "./LineTool";
import { RectangleTool } from "./RectangleTool";
 
$(() => {
    let canvasContext = new CanvasContext("CanvasEl");
    let rectangleTool = new RectangleTool();
    let lineTool = new LineTool();
    
    canvasContext.resizeViewport();
    canvasContext.draw();

    rectangleTool.sampleCoords("CanvasEl");
});

