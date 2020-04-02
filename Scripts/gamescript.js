/* // DUEL CODE
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
        document.write("YOU HAVE LOST.");
    }
    else if (y < 1) {
        document.write("YOU HAVE WON.")
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

*/
// currently busted by entering html
function renameCreature() {
    var newName = document.getElementById("rename-creature").value;
    if (newName.includes("<")) {
        alert("Unsupported character")
    }
    else if (newName.length > 20) {
        alert("Too long")
    }
    else {
        document.getElementById("creature-name").innerHTML = "NAME: " + String(newName);
    }
    
}

$(document).ready(function () {
  //  drawMap();
  //  findPlayer();
  //  console.log("Over " + finalX + " Down " + finalY);
   console.log(villageInfo[0].name);       // works
});