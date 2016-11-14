var box = $('#box')
var redBtn = $('#red')
var yellowBtn = $('#yellow')
var blueBtn = $('#blue')

redBtn.on("click", function () {
    box.text("I'm red");
    box.css("background-color", "red");
})

yellowBtn.on("click", function () {
    box.text("I'm yellow");
    box.css("background-color", "yellow");
})

blueBtn.on("click", function () {
    box.text("I'm blue");
    box.css("background-color", "blue");
})