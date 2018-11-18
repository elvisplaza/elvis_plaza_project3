myApp.makeFlyClickable = function () {
    $('.bugs2').off('click').on('click', function () {
        $(this).addClass('invisible');
        myApp.counter++
        $('#score1').text(myApp.counter);
        $('main').toggleClass('cursor swatting');
        setTimeout(function () {
            $('main').toggleClass('swatting cursor');
        }, 250);
    })
}

myApp.createBugGenerator = function () {
    return setInterval(function () {
        myApp.fly2();
        myApp.makeFlyClickable();
    }, 10000)


}

myApp.createFly = function () {
    $('main').append(`<div class="bugs2" style="left: ${myApp.randomX()};top:${myApp.randomY()}"><img  src="./Assets/giphy.gif"></div> `);
}
myApp.fly2 = function () {
    myApp.createFly();
    
}