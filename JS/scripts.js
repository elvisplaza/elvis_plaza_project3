const myApp = {};

myApp.getInit = function (){
    myApp.startGame();
}

myApp.startGame = function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        $('div').hide();
    })
}


















// ============== document ready ===============

$(function(){
    myApp.getInit();
})