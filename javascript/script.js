window.onload = function () {

    var second = 00;
    var time = 00;
    var appendTime = document.getElementById("time")
    var appendSecond = document.getElementById("second")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        time = "00";
        second = "00";
        appendTime.innerHTML = time;
        appendSecond.innerHTML = second;
    }

    function startTimer(){
        time++;

        if(time<=9){
            appendTime.innerHTML = "0" + time;
        }

        if(time > 9){
            appendTime.innerHTML = time;
        }

        if(time > 99){
            console.log("second");
            second++;
            appendSecond.innerHTML = "0" + second;
            time = 0;
            appendTime.innerHTML = "0" + 0;
        }

        if(second >9){
            appendSecond.innerHTML = second;
        }
    }

}