const canvas = document.querySelector("#canvas");
const status = document.querySelector("#status")

const chars =   [{
                    char: "A",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "B",
                    charcode: [1, 1, 1, 1, 0, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               1, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "C",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "D",
                    charcode: [1, 1, 1, 1, 0, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               0, 1, 0, 0, 1, 0,
                               1, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "E",
                    charcode: [1, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "F",
                    charcode: [1, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "G",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 1, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "H",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "I",
                    charcode: [0, 1, 1, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "J",
                    charcode: [0, 0, 1, 1, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 1, 0, 0,
                               1, 0, 0, 1, 0, 0,
                               0, 1, 1, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "K",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 1, 0, 0,
                               1, 0, 1, 0, 0, 0,
                               1, 1, 0, 0, 0, 0,
                               1, 0, 1, 0, 0, 0,
                               1, 0, 0, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "L",
                    charcode: [1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "M",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 1, 0, 1, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "N",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 1, 0, 0, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 0, 0, 1, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "O",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "P",
                    charcode: [1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "Q",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 0, 0, 1, 0, 0,
                               0, 1, 1, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "R",
                    charcode: [1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 1, 1, 1, 0, 0,
                               1, 0, 1, 0, 0, 0,
                               1, 0, 0, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "S",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "T",
                    charcode: [1, 1, 1, 1, 1, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "U",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "V",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "W",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               0, 1, 0, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "X",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 0, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "Y",
                    charcode: [1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "Z",
                    charcode: [1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "a",
                    charcode: [0, 0, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "1",
                    charcode: [0, 0, 1, 0, 0, 0,
                               0, 1, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "2",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "3",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "4",
                    charcode: [0, 0, 0, 1, 0, 0,
                               0, 0, 1, 1, 0, 0,
                               0, 1, 0, 1, 0, 0,
                               1, 0, 0, 1, 0, 0,
                               1, 1, 1, 1, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "5",
                    charcode: [1, 1, 1, 1, 1, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "6",
                    charcode: [0, 0, 1, 1, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               1, 0, 0, 0, 0, 0,
                               1, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "7",
                    charcode: [1, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 0, 1, 0, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               0, 1, 0, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "8",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "9",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 1, 0,
                               0, 0, 0, 0, 1, 0,
                               0, 0, 0, 1, 0, 0,
                               0, 1, 1, 0, 0, 0,
                               0, 0, 0, 0, 0, 0]
                },
                {
                    char: "0",
                    charcode: [0, 1, 1, 1, 0, 0,
                               1, 0, 0, 0, 1, 0,
                               1, 0, 0, 1, 1, 0,
                               1, 0, 1, 0, 1, 0,
                               1, 1, 0, 0, 1, 0,
                               1, 0, 0, 0, 1, 0,
                               0, 1, 1, 1, 0, 0,
                               0, 0, 0, 0, 0, 0]
                }
];

const charWidth = 6;
const charHeight = 8;
const maxX = 300;
const maxY = 300;

let canvasInterval;
let demoInterval;
let running = false;
let idleTimer = 0;



var gfx = canvas.getContext("2d");

let degrees = [0, 45, 22.5];
let i = [0, 50, 50];

class Display {
    constructor(x, y) {
        this.width = x;
        this.height = y;
        this.bitmap = new Array (x * y);
        this.backup = new Array (x * y);
        this.lock = false;
        this.scale = 1;
        status.innerHTML = "object created";
        this.clear([0, 0, 0]);
        this.backup = new BITMAP(x, y);
    }

    clear(color) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.bitmap[y * this.width + x] = color;
            }
        }
        //status.innerHTML += "<br>" + "canvas cleared";
    }

    render() {
        if(!running){
            idleTimer += 30;
        }
        if(idleTimer >= 3000){
            //clearInterval(canvasInterval);
            //display.blitToDisplay(display.backup.bitmap, this.width, this.height, 0, 0, 0, 0, [200,0, 100], false, "backup");
            this.backup = this.bitmap.slice();
            demoInterval = setInterval(function(){display.demo()}, 30);
            running = true;
            idleTimer = 0;
            console.log(this.backup)
        }
        this.draw();
        /*status.innerHTML = `
        ${w}, ${h}
        `*/
    }

    demo(){
        this.clear([0,0,0])
        if(degrees[0] >=360){
            degrees[0] = 0
        }
        if(degrees[1] >= 360){
            degrees[1] = 0;
        }
        if(degrees[2] <= 0){
            degrees[2] = 360;
        }
        let bx = Math.floor(25 + Math.sin(degrees[0]/10)*20);
        let hy = Math.floor(25 + Math.sin(degrees[0]/10)*20);
        this.rectangle(maxX/2-50, maxY/2-50, maxX/2+50, maxY/2+50, this.rainbow(i[0]), false, degrees[0]);
        this.rectangle(maxX/2-50, maxY/2-50, maxX/2+50, maxY/2+50, this.rainbow(i[0]), false, degrees[1]);
        this.rectangle(maxX/2-bx/2, maxY/2-hy/2, maxX/2+bx/2, maxY/2+hy/2, this.rainbow(i[2]), false, degrees[2]);
        degrees[2]-=4;
        degrees[1]+=2;
        degrees[0]+=1;
        i[0]+=0.5;
        i[1]+=0.5;
        i[2]+=0.5;
        this.draw();
    }

    HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }

    rainbow(p) {
        var rgb = this.HSVtoRGB(p/100.0*0.85, 1.0, 1.0);
        return [rgb.r, rgb.g, rgb.b];
    }

    putPixel(x, y, color) {
        this.bitmap[y * this.width + x] = color;
        //status.innerHTML += `Pixel created at (${x}, ${y})`;
    }

    rectangle(x1, y1, x2, y2, color, fill, rot) {
        if (x1 > x2) {
            this.swap(x1, x2);
        }

        if (y1 > y2) {
            this.swap(y1, y2);
        }

        if (x1 >= this.width ||
            x2 >= this.width ||
            y1 >= this.height ||
            y2 >= this.height ||
            x1 < 0 ||
            x2 < 0 ||
            y1 < 0 ||
            y2 < 0) {
            status.innerHTML += "<br>" + "Rectangle parameters are out of bounds";
        } else if(fill && rot==0){
            for(let x = x1; x <= x2; x++){
                for(let y = y1; y <= y2; y++){
                    this.putPixel(x, y, color);
                }
            }
        } else{
            let offsetX = (x2 - x1)/2;
            let offsetY = (y2 - y1)/2;

            let p1 = this.rotate(-offsetX, -offsetY, rot, (x1+offsetX), (y1+offsetY));
            let p2 = this.rotate(offsetX, -offsetY, rot, (x1+offsetX), (y1+offsetY));
            let p3 = this.rotate(offsetX, offsetY, rot, (x1+offsetX), (y1+offsetY));
            let p4 = this.rotate(-offsetX, offsetY, rot, (x1+offsetX), (y1+offsetY));   
            
            this.line(p1[0], p1[1], p2[0], p2[1], color)
            this.line(p2[0], p2[1], p3[0], p3[1], color)
            this.line(p3[0], p3[1], p4[0], p4[1], color)
            this.line(p4[0], p4[1], p1[0], p1[1], color)

            //status.innerHTML += "<br>" + `Rectangle created from (${x1}, ${y1}) to (${x2}, ${y2})`;
        }
    }

    triangle(x1, x2, y1, y2, z1, z2, color){
        this.line(x1, x2, y1, y2, color);
        this.line(y1, y2, z1, z2, color);
        this.line(z1, z2, x1, x2, color);
    }

    line(x1, y1, x2, y2, color) {
        let x = Math.floor(Math.abs(x1 - x2))
        let y = Math.floor(Math.abs(y1 - y2))
        let directionX = x1 < x2 ? 1 : -1;
        let directionY = y1 < y2 ? 1 : -1;
        let err = x - y;
        let startCoords = [x1, y1, x2, y2];

        if (x1 >= this.width ||
            x2 >= this.width ||
            y1 >= this.height ||
            y2 >= this.height ||
            x1 < 0 ||
            x2 < 0 ||
            y1 < 0 ||
            y2 < 0) {
            status.innerHTML += "<br>" + "Line parameters are out of bounds";
        } else {
            while (x1 !== x2 || y1 !== y2) {
                this.putPixel(x1, y1, color)
                let err2 = 2 * err;

                if (err2 > -y) {
                    err -= y;
                    x1 += directionX;
                }

                if (err2 < x) {
                    err += x;
                    y1 += directionY;
                }
            }
            this.putPixel(x2, y2, color);
            //status.innerHTML += "<br>" + `Line created from (${startCoords[0]}, ${startCoords[1]}) to (${startCoords[2]}, ${startCoords[3]})`;
        }
    }

    horizontalLine(y, color){
        for(let x = 0; x < this.width; x++){
            this.bitmap[y*this.width+x] = color;
        }
    }

    verticalLine(x, color){
        for(let y = 0; y < this.height; y++){
            this.bitmap[y*this.width+x] = color;
        }
    }

    circle(centerX, centerY, r, color) {
        if (centerX + r >= this.width ||
            centerY + r >= this.height ||
            centerX < 0 ||
            centerY < 0) {
            status.innerHTML += "<br>" + "Circle parameters are out of bounds";
        } else {
            let x = r;
            let y = 0;
            let d = 3 - 2 * r;

            while (y <= x) {
                this.plotCirclePoints(centerX, centerY, x, y, color);
                y++;

                if (d > 0) {
                    x--;
                    d = d + 4 * (y - x) + 10;
                } else {
                    d = d + 4 * y + 6;
                }
                this.plotCirclePoints(centerX, centerY, x, y, color);
            }
            status.innerHTML += "<br>" + `Circle created around (${centerX}, ${centerX}) with a radius of ${r}`
        }
    }

    plotCirclePoints(centerX, centerY, x, y, color) {
        this.putPixel(centerX + x, centerY + y, color);
        this.putPixel(centerX - x, centerY + y, color);
        this.putPixel(centerX + x, centerY - y, color);
        this.putPixel(centerX - x, centerY - y, color);

        if (x !== y) {
            this.putPixel(centerX + y, centerY + x, color);
            this.putPixel(centerX - y, centerY + x, color);
            this.putPixel(centerX + y, centerY - x, color);
            this.putPixel(centerX - y, centerY - x, color);
        }
    }

    resize(x, y){
        this.width = x;
        this.height = y;
        this.bitmap = new Array(x * y)
        this.clear([0, 0, 0])
        status.innerHTML += "<br>" + `Bitmap resized to ${x} * ${y} pixels`
    }

    scrollUp(){
        for (let y = 1; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.bitmap[(y-1) * this.width + x] = this.bitmap[(y * this.width + x)]
            }
        }
        this.horizontalLine(this.height-1, [0, 0, 0])
        status.innerHTML += "<br>" + `Bitmap moved up by 1 pixel`
    }

    scrollDown(){
        for (let y = this.height-1; y > 0; y--) {
            for (let x = 0; x < this.width; x++) {
                this.bitmap[y * this.width + x] = this.bitmap[((y-1) * this.width + x)]
            }
        }
        this.horizontalLine(0, [0, 0, 0])
        status.innerHTML += "<br>" + `Bitmap moved down by 1 pixel`
    }

    scrollRight(){
        for (let x = this.width-1; x > 0; x--) {
            for (let y = 0; y < this.height; y++) {
                this.bitmap[y * this.width + x] = this.bitmap[y * this.width + (x-1)]
            }
        }
        this.verticalLine(0, [0, 0, 0])
        status.innerHTML += "<br>" + `Bitmap moved right by 1 pixel`
    }

    scrollLeft(){
        for(let x = 0; x < this.width-1; x++){
            for(let y = 0; y < this.height; y++){
                this.bitmap[y * this.width + x] = this.bitmap[y * this.width + (x+1)];
            }
        }
        this.verticalLine(this.width-1, [0, 0, 0]);
        status.innerHTML += "<br>" + `Bitmap moved left by 1 pixel`;
    }

    preserveScrollUp(){
        let tempRow = new Array(this.width);
        for (let y = 1; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if(y == 1){
                    tempRow[x] = this.bitmap[(y-1) * this.width + x];
                }
                this.bitmap[(y-1) * this.width + x] = this.bitmap[(y * this.width + x)]
            }
        }
        for(let x = 0; x < this.width; x++){
            this.bitmap[(this.height-1) * this.width + x] = tempRow[x];
        }
        status.innerHTML += "<br>" + `Bitmap moved up by 1 pixel`
    }

    preserveScrollDown(){
        let tempRow = new Array(this.width);
        for (let y = this.height-1; y > 0; y--) {
            for (let x = 0; x < this.width; x++) {
                if(y == this.height-1){
                    tempRow[x] = this.bitmap[y * this.width + x];
                }
                this.bitmap[y * this.width + x] = this.bitmap[((y-1) * this.width + x)]
            }
        }
        for(let x = 0; x < this.width; x++){
            this.bitmap[0 * this.width + x] = tempRow[x];
        }
        status.innerHTML += "<br>" + `Bitmap moved down by 1 pixel`
    }

    preserveScrollRight(){
        let tempRow = new Array(this.height);
        for (let x = this.width-1; x > 0; x--) {
            for (let y = 0; y < this.height; y++) {
                if(x == this.width-1){
                    tempRow[y] = this.bitmap[y * this.width + x];
                }
                this.bitmap[y * this.width + x] = this.bitmap[y * this.width + (x-1)]
            }
        }l
        for(let y = 0; y < this.height; y++){
            this.bitmap[y * this.width + 0] = tempRow[y];
        }
        status.innerHTML += "<br>" + `Bitmap moved right by 1 pixel`
    }

    preserveScrollLeft(){
        let tempRow = new Array(this.height);
        for (let x = 0; x < this.width-1; x++) {
            for (let y = 0; y < this.height; y++) {
                if(x == 0){
                    tempRow[y] = this.bitmap[y * this.width + 0];
                }
                this.bitmap[y * this.width + x] = this.bitmap[y * this.width + (x+1)];
            }
        }
        for(let y = 0; y < this.height; y++){
            this.bitmap[y * this.width + this.width-1] = tempRow[y];
        }
        console.log(tempRow)
        status.innerHTML += "<br>" + `Bitmap moved left by 1 pixel`
    }

    arc(x, y, r, vo, bl, color){

    }

    textOut(x, y, color, string, fill){
        Array.from(string).forEach(character => {
            let index = chars.findIndex(object => {
                return object.char === character;
            })
            if(index >= 0){
                this.blitToDisplay(chars[index].charcode, charWidth, charHeight, 0, 0, x, y, color, fill, "numeric")
            }
            x += charWidth;
        })
    }

    blitToDisplay(BM, w, h, bx, by, dx, dy, color, fill, type){
        for(let row = bx; row < w; row++){
            for(let col = by; col < h; col++){
                if(type == "numeric"){
                    if(fill){
                        if(BM[col * w + row] == 1){
                            this.bitmap[(col+dy) * this.width + (row+dx)] = color;
                        } else{
                            this.bitmap[(col+dy) * this.width + (row+dx)] = [0, 0, 0];
                        }
                    } else {
                        if(BM[col * w + row] == 1){
                            this.bitmap[(col+dy) * this.width + (row+dx)] = color;
                        }
                    }
                } else if(type == "backup"){
                    console.log("BACKUP")
                    
                }
            }
        }
    }

    backupBitmap(){
        for(let row = 0; row < this.width; row++){
            for(let col = 0; col < this.height; col++){
                this.backup.bitmap[col * this.width + row] = this.bitmap[col * this.width + row]
            }
        }
    }

    swap(a, b){
        let temp = a;
        a = b;
        b = temp;
    }

    rotate(x, y, v, centerX, centerY){
        let r = Math.sqrt(x*x + y*y);
        let angle = Math.atan2(y, x)
        angle += (v * Math.PI)/180;

        x = Math.round(r * Math.cos(angle) + centerX)
        y = Math.round(r * Math.sin(angle) + centerY)
        
        return [x, y];
    }
    
    draw() {
        let w = window.innerWidth - 100;
        let h = window.innerHeight - 200;
        let sx = Math.floor(w / this.width);
        let sy = Math.floor(h / this.height);
        this.scale = (sx < sy) ? sx : sy;
        canvas.width = this.width * this.scale;
        canvas.height = this.height * this.scale;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let c = this.bitmap[y * this.width + x];
                gfx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
                gfx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
}

class BITMAP {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bitmap = new Array(x*y)
    }
}

let display = new Display(maxX, maxY);

document.addEventListener("mousemove", function(){
    if(running){
        clearInterval(demoInterval);
        display.bitmap = display.backup;
        canvasInterval = setInterval(function(){display.render()}, 30);
        running = false;
    }
    idleTimer = 0;
})

let myInterval = setInterval(function(){display.render()}, 30)
console.log(myInterval)

//--------------------------------------------TEST AREA------------------------------------

display.putPixel(4, 4, [100, 100, 100]);
display.rectangle(100, 100, 200, 200, [200, 20, 105], false, 75);
display.line(40, 8, 10, 27, [60, 240, 150])
display.circle(30, 30, 19, [255, 0, 0]);
display.backupBitmap()
console.log(display.backup.bitmap)
display.triangle(100, 100, 200, 200, 50, 180, [104, 67, 204])
display.textOut(20, 10, [100, 255, 60], "abcdefghijklmnopqrstuvwxyz", true)