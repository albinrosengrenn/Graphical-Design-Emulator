const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const status = document.querySelector("#status")

const maxX = 50;
const maxY = 50;

var gfx = canvas.getContext("2d");

let myInterval;
let running = false;





class Display {
    constructor(x, y){
        this.width = x;
        this.height = y;
        this.bitmap = new Array(x*y)
        this.lock = false;
        this.scale = 1;
        status.innerHTML = "object created";
        this.clear([0, 0, 0])
        console.log(this.bitmap)
    }

    start(){
        if(!running){
            myInterval = setInterval(this.render, 30)
            running = true;
        }
    }

    clear(color){
        for(let x=0; x<this.width; x++){
            for(let y = 0; y < this.height; y++){
                this.bitmap[y*this.width+x] = color;
            }
        }
        
    }

    render(){
        let w = window.innerWidth -100;
        let h = window.innerHeight -200;
        let sx = Math.floor(w/this.width);
        let sy = Math.floor(h/this.height);
        this.scale = (sx < sy)?sx:sy;
        canvas.width = this.width * this.scale;
        canvas.height = this.height * this.scale;
        this.draw()
        status.innerHTML = `
        ${w}, ${h}
        `
    }

    putPixel(x, y, color){
        this.bitmap[y*this.width+x] = color;
        console.log(this.bitmap);
    }

    rectangle(x1, y1, x2, y2, color){
        if(x1 > x2){
            let a = x1;
            x1 = x2;
            x2 = a;
        }

        if(y1 > y2){
            let a = y1;
            y1 = y2;
            y2 = a;
        }

        for(let x = x1; x <= x2; x++){
            this.bitmap[y1*this.width+x] = color;
        }

        for(let x = x1; x <= x2; x++){
            this.bitmap[y2*this.width+x] = color;
        }

        for(let y = y1; y <= y2; y++){
            this.bitmap[y*this.width+x1] = color;
        }

        for(let y = y1; y <= y2; y++){
            this.bitmap[y*this.width+x2] = color;
        }


        /*
        for(let x = x1; x <= x2; x++){
            for(let y = y1; y <= y2; y++){
                if()
                this.bitmap[y*this.width+x] = color;
            }
        }*/
    }

    line(x1, y1, x2, y2, color){
        
    }

    circle(x, y, r, color){
        
    }

    draw(){
        let c;
        for(let x=0; x<this.width; x++){
            for(let y = 0; y < this.height; y++){
                let c = this.bitmap[y*this.width+x]
                gfx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
                gfx.fillRect(x*this.scale, y*this.scale, this.scale, this.scale);
            }
        }
    }
}

let display = new Display(maxX, maxY);

setInterval(rend, 30);

function rend(){
    display.render()
}

//--------------------------------------------TEST AREA--------------------------------------------------------

display.putPixel(4, 4, [100,100,100])
display.rectangle(20, 20, 10, 10, [200, 20, 105])