myApp.makeFlyClickable = function () {
    $('.bugs').off('click').on('click', function () {
        $(this).addClass('invisible');
        myApp.audioPlay();
        myApp.counter++
        $('#score1').text(myApp.counter);
        $('main').toggleClass('cursor swatting');
        setTimeout(function () {
            $('main').toggleClass('swatting cursor');
        }, 250);
    })
}

myApp.audioPlay=function(){
    myApp.audio = document.getElementById('audio');
    audio.play()
}

myApp.createBugGenerator = function () {
    return setInterval(function () {
        myApp.createFly();
        myApp.makeFlyClickable();
    }, 1500);
}

myApp.createFly = function () {
    $('main').append(`<div class="bugs" style="left: ${myApp.randomX()};top:${myApp.randomY()}"><img  src="./Assets/giphy.gif"></div> `);
}
