function countdownTimer() {
    console.log("countdownTimer working");
    var currTime = 50;
    document.getElementById("countdownstatus").innerHTML = currTime;
    currTime = currTime - 5;
    
    //timer for 45
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);
}