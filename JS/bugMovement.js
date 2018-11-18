

// myApp.addToX=function(){
//     return setInterval(function(){
//         myApp.xAxis++
//     },1000)
// }


myApp.randomX = function () {
    myApp.xAxis = Math.floor(Math.random() * (90 + 1));
    if(myApp.xAxis >=84 && randomX <=90){
        myApp.xAxis-=10
        }
    return `${myApp.xAxis}%`
};

myApp.randomY= function(){
    let randomY = Math.floor(Math.random() * (90 + 1));
        if(randomY >= 0 && randomY <=10){
        randomY+=10
        } else if (randomY >=85 && randomY <=90){
            randomY-=5
        }
        return `${randomY}%`
}



// myApp.randomCoord = myApp.randomXY()

// The screenX and screenY properties returns the x(horizontal) and y(vertical) coordinates of the window relative to the screen.