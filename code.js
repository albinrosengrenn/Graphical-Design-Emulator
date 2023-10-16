const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");

class Display {
    constructor(x, y){
        this.bitmap = new Array(x*y)
        this.lock = false;
    }

    test(){
        console.log("it works")
    }
}

let display = new Display(40, 40);
let bitmap = display.bitmap;

console.log(bitmap.length)