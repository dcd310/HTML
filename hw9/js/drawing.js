var speed = 5;
var eSize = 100;
var x = eSize / 2;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0, 255, 255);

    fill(255, 255, 0);
    ellipse(x, height / 10, eSize, eSize);
    if (x + eSize / 2 > width || x - eSize / 2 < -1) {
        speed *= -1;
    }
    x += speed;

    fill(0, 255, 0);
    rect(0, height - 100, width, 100);
}

//var box = document.getElementById('box');
//var container = document.getElementById('container');
//var xPox = 0;
//var yPos = 0;
//
//function move(e) {
//        alert(e.keyCode);
//    if (e.keyCode == 39) {
//        xPos += 5;
//    }
//    if (e.keyCode == 37) {
//        xPos -= 5;
//    }
//    if (e.keyCode == 38) {
//             yPos -= 5;
//         }
//         if (e.keyCode == 40) {
//             yPos += 5;
//         }
//}
//
//document.onkeydown = move;