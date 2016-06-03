$(document).ready(function() {
    for(var x = 0; x < 16*16; x++) {
            $("<div class='box'></div>").appendTo('.container');
    }; 
    $('.box').mouseenter(function() {
    $(this).css('background-color','black');
    });
$("#right").click(function(){
    $(".box").css({
        "background-color": "grey"});
});
});