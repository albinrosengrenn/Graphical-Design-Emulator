const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

var gfx = canvas.getContext("2d");

let myInterval;
let running = false;





class Display {
    constructor(x, y){
        this.bitmap = new Array(x*y)
        this.lock = false;
    }

    start(){
        if(!running){
            myInterval = setInterval(updateCanvas, 30)
            running = true;
        }
    }

    clear(color){
        clearInterval(myInterval);
        running = false;
        gfx.fillStyle = color;
        gfx.fillRect(0, 0, canvas.width, canvas.height);
        this.bitmap = [];
    }

    updateCanvas(){
        console.log("hi")
    }

    putPixel(x, y, color){
        this.bitmap.push([{
            cordinateX: x,
            cordinateY: y,
            color: color
        }]);
    }

    rectangle(x1, y1, x2, y2, color){
        let width = Math.abs(x2 - x1);
        let height = Math.abs(y2 - y1);

        let x = Math.min(x1, x2);
        let y = Math.min(y1, y2);

        gfx.strokeStyle = color;
        gfx.lineWidth = 2;
        
        gfx.strokeRect(x, y, width, height);
    }

    line(x1, y1, x2, y2, color){
        gfx.lineWidth = 2;
        gfx.strokeStyle = color;

        gfx.moveTo(x1, y1);
        gfx.lineTo(x2, y2);
        gfx.stroke();
    }

    circle(x, y, r, color){
        gfx.strokeStyle = color
        gfx.beginPath();
        gfx.arc(x, y, r, 0, 360)
        gfx.stroke();
    }
}

let display = new Display(40, 40);
display.putPixel(10, 10, "blue")
display.clear("darkgreen")
display.line(500,20,50,200, "blue")
display.rectangle(50,50,500,200, "red")
display.circle(50, 50, 50, "red")

console.log(display.bitmap)