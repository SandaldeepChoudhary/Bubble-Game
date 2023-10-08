var playerScore= 0;
var newHit;
var clickedNum;

document.querySelector("#panelBtm").addEventListener("click", function(details){
 clickedNum = Number(details.target.textContent);
 if (clickedNum == newHit){
    increaseScore();
    makeBubble();
    getNewHit();
 }
 else if (clickedNum != newHit){
    decreaseScore();
    makeBubble();
    getNewHit();
 }
});

function decreaseScore(){
    playerScore -= 10;
    document.querySelector("#scoreValue").textContent = playerScore;
}
 function increaseScore(){
    playerScore += 10;
    document.querySelector("#scoreValue").textContent = playerScore;
 }
 function getNewHit(){

    newHit = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = newHit;
 }
 
 function runTimer(){
     
     var timer = 60;
        var timerInterval = setInterval(function(){
            if (timer > 0){
            timer --;
            document.querySelector("#timerValue").textContent = timer;
            }
            else {
                clearInterval(timerInterval);
                document.querySelector("#panelBtm").innerHTML = `<h2>Game Over</h2>`;
            }
        }, 1000);
    
}
 function makeBubble(){ 
 
 var clutter ="";

 for (var i = 1; i<=147; i++){
    var randomNum = Math.floor(Math.random()*10); 
    clutter += `<div class="bubble">${randomNum}</div>`
 }
 document.querySelector("#panelBtm").innerHTML = clutter;
}

makeBubble();
runTimer();
getNewHit();

