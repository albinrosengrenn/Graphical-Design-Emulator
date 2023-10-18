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
    constructor(x, y) {
        this.width = x;
        this.height = y;
        this.bitmap = new Array(x * y)
        this.lock = false;
        this.scale = 1;
        status.innerHTML = "object created";
        this.clear([0, 0, 0])
        console.log(this.bitmap)
    }

    start() {
        if (!running) {
            myInterval = setInterval(this.render, 30)
            running = true;
        }
    }

    clear(color) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.bitmap[y * this.width + x] = color;
            }
        }
        status.innerHTML = "canvas cleared";
    }

    render() {
        let w = window.innerWidth - 100;
        let h = window.innerHeight - 200;
        let sx = Math.floor(w / this.width);
        let sy = Math.floor(h / this.height);
        this.scale = (sx < sy) ? sx : sy;
        canvas.width = this.width * this.scale;
        canvas.height = this.height * this.scale;
        this.draw()
        /*status.innerHTML = `
        ${w}, ${h}
        `*/
    }

    putPixel(x, y, color) {
        this.bitmap[y * this.width + x] = color;
        status.innerHTML = `Pixel created at (${x}, ${y})`;
    }

    rectangle(x1, y1, x2, y2, color) {
        if (x1 > x2) {
            let a = x1;
            x1 = x2;
            x2 = a;
        }

        if (y1 > y2) {
            let a = y1;
            y1 = y2;
            y2 = a;
        }

        if (x1 >= this.width ||
            x2 >= this.width ||
            y1 >= this.height ||
            y2 >= this.height ||
            x1 < 0 ||
            x2 < 0 ||
            y1 < 0 ||
            y2 < 0) {
            status.innerHTML = "Out of bounds";
        } else {
            for (let x = x1; x <= x2; x++) {
                this.putPixel(x, y1, color);
                this.putPixel(x, y2, color);
            }

            for (let y = y1; y <= y2; y++) {
                this.putPixel(x1, y, color);
                this.putPixel(x2, y, color);
            }
            status.innerHTML = `Rectangle created from (${x1}, ${y1}) to (${x2}, ${y2})`;
        }
    }

    line(x1, y1, x2, y2, color) {
        let x = Math.floor(Math.abs(x1 - x2))
        let y = Math.floor(Math.abs(y1 - y2))
        let directionX = x1 < x2 ? 1 : -1;
        let directionY = y1 < y2 ? 1 : -1;
        let err = x - y;
        let startX1 = x1;
        let startX2 = x2;
        let startY1 = y1;
        let startY2 = y2;

        if (x1 >= this.width ||
            x2 >= this.width ||
            y1 >= this.height ||
            y2 >= this.height ||
            x1 < 0 ||
            x2 < 0 ||
            y1 < 0 ||
            y2 < 0) {
            status.innerHTML = "Out of bounds";
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
            status.innerHTML = `Line created from (${startX1}, ${startY1}) to (${startX2}, ${startY2})`;
        }
    }

    circle(centerX, centerY, r, color) {
        if (centerX + r >= this.width ||
            centerY + r >= this.height ||
            centerX < 0 ||
            centerY < 0) {
            status.innerHTML = "Out of bounds";
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
            status.innerHTML = `Circle created around (${centerX}, ${centerX}) with a radius of ${r}`
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

    draw() {
        let c;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let c = this.bitmap[y * this.width + x]
                gfx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
                gfx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
}

let display = new Display(maxX, maxY);

setInterval(rend, 30);

function rend() {
    display.render()
}

//--------------------------------------------TEST AREA--------------------------------------------------------

display.putPixel(4, 4, [100, 100, 100])
display.rectangle(40, 20, 10, 10, [200, 20, 105])
display.line(40, 8, 10, 27, [60, 240, 150])
display.circle(30, 30, 19, [255, 0, 0]);