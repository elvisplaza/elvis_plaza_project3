const myApp = {};


// canvas code 
// myApp.canvas = document.getElementById('canvas');
// myApp.ctx = myApp.canvas.getContext('2d');
// myApp.canvas.width = 500;
// myApp.canvas.height = 500;
// myApp.image = new Image();
// myApp.image.src= "../Assets/fly3.svg";
// myApp.fly = myApp.ctx.drawImage(myApp.image, myApp.rectX, myApp.rectY, 80, 80);

// (function () {

//     // resize the canvas to fill browser window dynamically
//     window.addEventListener('resize', resizeCanvas, false);

//     function resizeCanvas() {
//         myApp.canvas.width = window.innerWidth;
//         myApp.canvas.height = window.innerHeight;

//         /**
//          * Your drawings need to be inside this function otherwise they will be reset when 
//          * you resize the browser window and the canvas goes will be cleared.
//          */
//         drawStuff();
//     }
//     resizeCanvas();

//     function drawStuff() {
//         // do your drawing stuff here
//     }
// })();






myApp.getInit = function (){
    myApp.startGame();
    myApp.startTimer();
}

myApp.startGame = function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        $('.start-menu').hide();
        $('.game-bar').removeClass('invisible');
        $('canvas').removeClass('invisible');

    })
}
myApp.time = function(duration, display){
    let timer = duration, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
myApp.startTimer = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('.timer');
    myApp.time(twoMinutes, display);
};




//a game that can swat bugs as they come up. you get points for every bug you swat, you must avoid 'doug' or you get points taken off, there is a timer. use eye recognition app to move screen.

//starting screen has a pop-up with instructions plus (maybe a timer selector);

//when game starts, starter screen disappears and game layout is displayed

//bugs fly out from behind the bush (the bush is the background image) with set paths but different starting points, which makes it seems random

//dougs will fly out as well with the same path/different starting point

// points counter will be added/deducted depending on what you click

//timer will be counting backwards from 2mins (or potential user pick)

//user will click with mouse to "kill" bug, mouse coursor will be item of choice.

//once timer runs out, display game-over screen with the user's score/ play-again button.

// user the timemethod here

// potential run webgazer application if it's doable. 


// extra features??
// add a quater to a slot to start
//noises
//webgazer
//




















// ============== document ready ===============

$(function(){
    myApp.getInit();
})