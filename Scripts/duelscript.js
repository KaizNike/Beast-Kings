// DUEL CODE
var x = 20;
var y = 20;
function duelStart() {
    // now roll two numbers and display to player
    roll();
    var result = rollX - rollY;
  //  document.getElementById("temp").innerHTML = result;
    if (result > 0) {
        y = y - result;
        document.getElementById("duel-hp-two").innerHTML = y;
    }
    else if (result < 0) {
        x = x + result;
        document.getElementById("duel-hp-one").innerHTML = x;
    }
    
    if (x < 1) {
        alert("YOU HAVE LOST.");
    }
    else if (y < 1) {
        alert("YOU HAVE WON.")
    }
}

var rollX, rollY
function roll() {
    rollX = Math.floor((Math.random() * 10) + 1);
    rollY = Math.floor((Math.random() * 10) + 1);
 //  document.write(rollX);
    document.getElementById("duel-roll-one").innerHTML = rollX;
    document.getElementById("duel-roll-two").innerHTML = rollY;
}