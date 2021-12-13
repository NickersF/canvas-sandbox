import { CanvasContext } from "./CanvasContext";
 
$(() => {
    let ctxtest = new CanvasContext();
    console.log(ctxtest.ctx);
    ctxtest.draw();
});

