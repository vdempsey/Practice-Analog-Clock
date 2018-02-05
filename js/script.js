$(document).ready(function() {

  function runTheClock() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = hr*360/12 + (min*(360/60)/12);
    let minPosition = min*360/60 + (sec*(360/60)/60);
    let secPosition = sec*360/60;


    $('#hour').css({'transform': "rotate(" + hrPosition + "deg)"});
    $('#minute').css({'transform': "rotate(" + minPosition + "deg)"});
    $('#second').css({'transform': "rotate(" + secPosition + "deg)"});
  }

  let interval = setInterval(runTheClock, 1000)

});
