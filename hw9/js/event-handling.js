//var box = $('#box')
var box = document.getElementById("box")
var docWidth = document.body.clientWidth
var docHeight = document.body.clientHeight
var boxWidth = box.offsetWidth;
var boxHeight = box.offsetHeight;
var defaultMovingPixels = 50

document.addEventListener("keydown", function (evt) {
    //   console.debug("Key down: " + evt.keyCode)
    //   console.debug("Offset Left: " + box.offsetLeft)
    //   console.debug("Offset Top: " + box.offsetTop)
    //   console.debug("Box width: " + boxWidth)
    // console.debug("Box Height: " + boxHeight)

    //left arrow pressed
    if (evt.keyCode == 37) {
        var offset = box.offsetLeft;
        offset -= defaultMovingPixels

        //make sure the box is not moving out of html body's boundary
        if (offset < 0) offset = 0

        box.style.left = offset + 'px';
    }

    //up arrow pressed
    else if (evt.keyCode == 38) {
        var top = box.offsetTop;
        top -= defaultMovingPixels

        if (top < 0) top = 0

        box.style.top = top + 'px';
    }

    //right arrow pressed
    else if (evt.keyCode == 39) {
        var offset = box.offsetLeft;
        offset += defaultMovingPixels

        //make sure the box is not moving out of html body's boundary
        if (offset > docWidth - boxWidth) offset = docWidth - boxWidth

        box.style.left = offset + 'px';
    }

    //bottom arrow pressed
    else if (evt.keyCode == 40) {
        var top = box.offsetTop;
        top += defaultMovingPixels

        //make sure the box is not moving out of html body's boundary
        if (top > docHeight - boxHeight) top = docHeight - boxHeight

        box.style.top = top + 'px';
    }
})