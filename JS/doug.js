myApp.createDoug = function () {
    $('main').append(`<div class="doug" style="left:${myApp.randomX()}><img src="../Assets/dug-the-pug@2x.png"`);
}

myApp.createDoug = function () {
    $('main').append(`<div class="doug" style="left: ${myApp.randomX()};bottom:"10%"><img  src="./Assets/dug-the-pug@2x.png"></div> `);
}
myApp.makeDougClickable = function () {
    $('.doug').off('click').on('click', function () {
        $(this).addClass('invisible');
        myApp.dougBark();
        myApp.counter--;
        $('#score1').text(myApp.counter);
        $('main').toggleClass('cursor swatting');
        setTimeout(function () {
            $('main').toggleClass('swatting cursor')
        }, 250);
    })
}
myApp.dougBark = function () {
    myApp.bark = document.getElementById('bark');
    myApp.bark.play()
}

myApp.dougAudio = function () {
    myApp.doug = document.getElementById('doug');
    myApp.doug.play()
}

myApp.createDougGenerator = function () {
    return setInterval(function () {
        myApp.createDoug();
        myApp.makeDougClickable();
        myApp.dougAudio();
    }, 10000);
}