var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;
var milliseconds = 0 ;

var startTimer = function() {
    millisecInt = setInterval(function(){
        milliseconds = ( milliseconds > 1000 ) ? 1 : ( milliseconds + 1 ) ;
        setTime(hours, minutes, seconds, milliseconds);
    },1);
    secondsInt = setInterval(function() {
        seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
    },1000);
    minutesInt = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hoursInt = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);
    document.getElementById("start").disabled = true;
}

var stopTimer = function() {
    clearInterval(millisecInt); clearInterval(secondsInt); clearInterval(minutesInt); clearInterval(hoursInt);
    document.getElementById("start").disabled = false;
}

var resetTimer = function() {
    stopTimer();
    hours = 0 ; minutes = 0 ; seconds = 0 ; milliseconds = 0 ;
    setTime(hours, minutes, seconds, milliseconds);
    document.getElementById("start").disabled = false;
}

var setTime = function(hours, minutes, seconds, milliseconds) {
    document.getElementById("hours").innerText = (hours.toString().length == 1) ? ("0" + hours) : hours ;
    document.getElementById("minutes").innerText = (minutes.toString().length == 1) ? ("0" + minutes) : minutes ;
    document.getElementById("seconds").innerText = (seconds.toString().length == 1) ? ("0" + seconds) : seconds ;
    document.getElementById("milliseconds").innerText = milliseconds;
}