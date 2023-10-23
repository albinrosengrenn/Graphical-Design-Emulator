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
        status.innerHTML += "<br>" + "canvas cleared";
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
        //status.innerHTML += `Pixel created at (${x}, ${y})`;
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
            status.innerHTML += "<br>" + "Rectangle parameters are out of bounds";
        } else {
            for (let x = x1; x <= x2; x++) {
                this.putPixel(x, y1, color);
                this.putPixel(x, y2, color);
            }

            for (let y = y1; y <= y2; y++) {
                this.putPixel(x1, y, color);
                this.putPixel(x2, y, color);
            }
            status.innerHTML += "<br>" + `Rectangle created from (${x1}, ${y1}) to (${x2}, ${y2})`;
        }
    }

    line(x1, y1, x2, y2, color) {
        let x = Math.floor(Math.abs(x1 - x2))
        let y = Math.floor(Math.abs(y1 - y2))
        let directionX = x1 < x2 ? 1 : -1;
        let directionY = y1 < y2 ? 1 : -1;
        let err = x - y;
        let startCoords = [x1, x2, y1, y2];

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
            status.innerHTML += "<br>" + `Line created from (${startCoords[0]}, ${startCoords[1]}) to (${startCoords[2]}, ${startCoords[3]})`;
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
        }
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

    textOut(x, y, color, string, fill){
        Array.from(string).forEach(character => {
            let index = chars.findIndex(object => {
                return object.char === character;
            })
            if(index >= 0){
                this.blitToDisplay(chars[index].charcode, charWidth, charHeight, 0, 0, x, y, color, fill)
            }
            x += charWidth;
        })
    }

    blitToDisplay(BM, w, h, bx, by, dx, dy, color, fill){
        for(let row = bx; row < w; row++){
            for(let col = by; col < h; col++){
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
            }
        }
    }
    
    draw() {
        let c;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let c = this.bitmap[y * this.width + x];
                gfx.fillStyle = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
                gfx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
            }
        }
    }
}

let display = new Display(maxX, maxY);

setInterval(rend, 30);

function rend() {
    display.render();
}

//--------------------------------------------TEST AREA--------------------------------------------------------

display.putPixel(4, 4, [100, 100, 100]);
display.rectangle(0, 0, 49, 49, [200, 20, 105]);
//display.resize(100, 100);
display.line(40, 8, 10, 27, [60, 240, 150])
display.circle(30, 30, 19, [255, 0, 0]);
//display.scrollDown();
//display.scrollUp();
//display.scrollRight();
//display.scrollLeft();
//display.preserveScrollUp();
//display.preserveScrollDown();
//display.preserveScrollRight();
//display.preserveScrollLeft();
//display.textOut(10, 10, [100, 255, 60], "HEJ")
display.textOut(20, 10, [100, 255, 60], "9A9", true)