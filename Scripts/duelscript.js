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

function drawDuelMap() {
    // goes i = y, j = x. goes through all x values in the array, then increases the y.
    for (var i = 0; i < duelArray.length; i++) {
        for (var j = 0; j < duelArray[i].length; j++) {
            /*
            for (let k = 0; k < enlistedCreatures.length; k++) {
                if (i == enlistedCreatures[k].y) {
                    if (j == enlistedCreatures[k].x) {
                        currentBattleBeastImageSmall = enlistedCreatures[k].smallPicture;
                        creatureHere = true;
                    }
                }
            }
            for (let m = 0; m < enlistedEnemyCreatures.length; m++) {
                if (i == enlistedEnemyCreatures[m].y) {
                    if (j == enlistedEnemyCreatures[m].x) {
                        currentBattleBeastImageSmall = enlistedEnemyCreatures[m].smallPicture;
                        creatureHere = true;
                    }
                }
            }
            if (creatureHere == false && duelArray[i][j] == 2) {
                duelArray[i][j] = 0;
            }
            else if (creatureHere == false && duelArray[i][j] == 1) {
                duelArray[i][j] = 0;
            }
            */
            // 0 – Grass, Plains, Empty - Light Green        
            if(duelArray[i][j] == 0) {
                $('#duelContainerMap').append(tileGrass.advDetail);
            }
            // 1 – Enemy Army- on terrain   1.0 = grass, 1.3 = on water, 1.4 on settlement etc 
            if(duelArray[i][j] == 1) {
                if (displayPicture == false) {
                    $('#duelContainerMap').append('<div class="grass"><p class="battle-text">Foe</p></div>');
                }
                else {
                    // old image for reference - "Images/Adventure/Characters/enemyArmy.gif"
                    $('#duelContainerMap').append('<div class="grass"><img class="adv-img" src=' + currentBattleBeastImageSmall + '><img class="adv-img-overlay" src="Images/Beasts/damageOverlay.png"></div>');
                }
            }
            else if(duelArray[i][j] == 1.8) {
               $('#duelContainerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>'); 
            }
            // 2 – Your Army – Light Green follows rules of 1, example 2.8 means on snow
            if(duelArray[i][j] == 2) {
                if (displayPicture == false) {
                    $('#duelContainerMap').append('<div class="grass"><p class="battle-text">You</p></div>');
                }
                /* test code
                else {
                $('#duelContainerMap').append('<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
                */
                else {                    
                    $('#duelContainerMap').append('<div class="grass"><img class="adv-img" src=' + currentBattleBeastImageSmall + '></div>');
                }
            }
            // your army on snow
            else if (duelArray[i][j] == 2.8) {
                $('#duelContainerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
            }
            // settlements
            if (duelArray[i][j] == 4) {
                $('#duelContainerMap').append(tileSettlement.advDetail);
                console.log(i + " " + j);
            }
            // 8 – Snow - White 
            if (duelArray[i][j] == 8) {
                $('#duelContainerMap').append(tileSnow.advDetail);
            }
            // 9 – Mountains – White with mountain pic
            if (duelArray[i][j] == 9) {
                $('#duelContainerMap').append(tileMountain.advDetail);
            }
        creatureHere = false;
        }
    }
}

$(document).ready(function () {
    drawDuelMap();
});