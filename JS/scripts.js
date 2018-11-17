const myApp = {};

// ================== program starter========================
myApp.getInit = function (){
    $('form').on('submit', myApp.startGame);

    $('#start-over').on('click', myApp.startGame)

    $('.bugs').on('click', function () {
        $(this).addClass('invisible');
        myApp.counter++
        $('#score1').text(myApp.counter)
        $('main').toggleClass('cursor swatting');
        myApp.bugGenerator();
        setTimeout(function () {
            $('main').toggleClass('swatting cursor');
        }, 250);
    })
};
//on a click of start game, create a variable that will represent a counter 
//calll myApp.fly2() in a  while() {myApp.fly2()}
myApp.bugGenerator= function(){
    setInterval(function(){
        myApp.fly2();
    },3000) 
}
myApp.stopFunction = function (n){
    clearInterval(n)
}


myApp.startGame = function(e) {
    e.preventDefault();
    myApp.resetScore();
    $('.start-menu').hide(); // hide start menu
    myApp.hideGameOverMenu();
    myApp.showGameUI();
    $('main').addClass('cursor');
    myApp.startTimer();
};

myApp.endGame = function() {
    console.log('%%%%%%%%%%%%%%%ENDGAME%%%%%%%%%%%%%%%%%%');
    clearInterval(myApp.gameInterval);
    myApp.hideGameUI();
    myApp.showGameOverMenu();
    $('main').removeClass('cursor');
}

myApp.showGameOverMenu = function() {
    console.log('%%%%%%%%%%% SHOW GAME OVER %%%%%%%%%%%%%');
    $('.game-over-menu').removeClass('invisible');
    $('#score2').text(myApp.counter);
}

myApp.hideGameOverMenu = function() {
    console.log('%%%%%%%%%%% HIDE GAME OVER %%%%%%%%%%%%%');
    $('.game-over-menu').addClass('invisible');
}

myApp.hideGameUI = function () {
    console.log('%%%%%%%%%%% HIDE GAME UI %%%%%%%%%%%%%');
    $('.game-bar').addClass('invisible');
    $('.bugs').addClass('invisible');
    $('.bugs2').addClass('invisible');
}

myApp.showGameUI = function() {
    console.log('%%%%%%%%%%% SHOW GAME UI %%%%%%%%%%%%%');
    $('.game-bar').removeClass('invisible');
    $('.bugs').removeClass('invisible');
}

myApp.resetScore = function() {
    myApp.counter = 0;
    $('#score1').text(myApp.counter)
}

myApp.displayTime = function (timer) {
    let minutes = parseInt(timer / 60, 10)
    let seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.querySelector('.timer').textContent = minutes + ":" + seconds;
}

// ====================== timer============================
myApp.time = function(duration){
    let timer = duration;
    myApp.displayTime(timer);

    return setInterval(function () { 
        if (--timer < 0) {
            myApp.endGame();
            myApp.stopFunction(myApp.bugGenerator);
            timer = duration;
        }
        myApp.displayTime(timer);
    }, 1000);
}
myApp.startTimer = function () {
    var twoMinutes = 5* 1;
    myApp.gameInterval = myApp.time(twoMinutes);
};

// ========================= bug creater ==========================

// myApp.createFly = function(){
//     $('<div />', {
//         "class": 'bugs',
//         "image":../Assets/giphy.gf),
//         text: "a div",
//         click: function (e) {
//             e.preventDefault();
//         }
//     })
//     // $('main').append('<div class="bugs"><img  src="../Assets/giphy.gif"></div>');
//     // $('bugs').css(animation= bugMovement3 4s linear infinite)
// }


myApp.createFly = function () {
    // $('main').append($('<div>', {class: 'bugs2', img: src="../Assets/giphy.gif"}));
    $('main').append('<div class="bugs2"><img  src="./Assets/giphy.gif"></div>');
    console.log('%%%%%%%%%%%%%%%%%% creates bugs%%%%%%%%%%%%%%%%%%')
// } // makes bugs 
}

myApp.makeFlyClickable = function(){
    $('.bugs2').on('click', function(){
        $(this).addClass('invisible');
        myApp.counter++
        $('#score1').text(myApp.counter)
    })
}

myApp.fly2=function(){
    myApp.createFly();
    myApp.makeFlyClickable();
}

// make a div with a picture in it
//make the div. attr
// add bugs 

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




//set interval - 















// ============== document ready ===============

$(function(){
    myApp.getInit();
})