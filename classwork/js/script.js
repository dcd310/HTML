$(init);

function init() {
    //    $('li:last-child').hide().fadeIn(1000);
    var $skittles = $('<li>').text('skittles');
    //    $('li:first-child').before($skittles);
    $('li:nth-child(1)').after($skittles);
}