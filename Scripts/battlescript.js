var drawArray = battleMapArray.storyStart;

// console.log(drawArray[0])

var availableSpace = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

var availableEnemySpace = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [2, 2, 2, 2, 0, 0, 0, 0, 8, 9, 9, 8, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var playerCreatureBattleReady = []; var enemyCreatureBattleReady = [];
function readyPlayer() {
    for (let i = 0; i < drawArray.length; i++) {
            for (let j = 0; j < drawArray[i].length; j++) {
                if (drawArray[i][j] == 2) {
                    availableSpace[i][j] = true;
                }
                else if (drawArray[i][j] == 1) {
                    availableEnemySpace[i][j] = true;
                }
                else {
                    availableSpace[i][j] = false;
                    availableEnemySpace[i][j] = false;
                }
            }
        }
    playerCreatureBattleReady = enlistedCreatures;
    enemyCreatureBattleReady = enlistedEnemyCreatures;
    let breakOut = false;
    for (let k = 0; k < enlistedCreatures.length; k++) {
        enlistedCreatures[k].startLocation = k;
        for (let i = 0; i < availableSpace.length; i++) {
            for (let j = 0; j < availableSpace[i].length; j++) {
                if (availableSpace[i][j] == true) {
                    availableSpace[i][j] = false;
                    enlistedCreatures[k].y = i;
                    enlistedCreatures[k].x = j;
                    breakOut = true;
                    break;
                }
               if (breakOut == true) {break;}
            }
           if (breakOut == true) {break;}
        }
       if (breakOut == true) {breakOut = false}
    }
    for (let k = 0; k < enlistedEnemyCreatures.length; k++) {
        enlistedEnemyCreatures[k].startLocation = k;
        for (let i = 0; i < availableSpace.length; i++) {
            for (let j = 0; j < availableSpace[i].length; j++) {
                if (availableEnemySpace[i][j] == true) {
                    availableEnemySpace[i][j] = false;
                    enlistedEnemyCreatures[k].y = i;
                    enlistedEnemyCreatures[k].x = j;
                    breakOut = true;
                    break;
                }
               if (breakOut == true) {break;}
            }
           if (breakOut == true) {break;}
        }
       if (breakOut == true) {breakOut = false}
    }
    console.log(enlistedEnemyCreatures);
//    console.log(availableSpace);
//    console.log(enlistedCreatures[0]);
//    console.log(enlistedCreatures[1]);
//    console.log(enlistedCreatures[2]);
//    console.log(enlistedCreatures[3]);
}

// arr is the array of objects, prop is the property to sort by
var sortB = function (prop, arr) {
    arr.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return 1;
        } else if (a[prop] > b[prop]) {
            return -1;
        } else {
            return 0;
        }
    });
};


var turnOrder = []; var battlePlayerBeasts = 0; var battleEnemyBeasts = 0;
var currentSelection = 0; var play; var battleStarted = false;
function startBattle(buttonid) {
    document.getElementById(buttonid).disabled = true;
    battleStarted = true;
    let k;
    for (k = 0; k < enlistedCreatures.length; k++) {
        turnOrder.push(enlistedCreatures[k]);
        turnOrder[k].player = "Player";
        battlePlayerBeasts += 1;
    }
    for (l = 0; l < enlistedEnemyCreatures.length; l++) {
        turnOrder.push(enlistedEnemyCreatures[l]);
        turnOrder[k + l].player = "Enemy";
        battleEnemyBeasts += 1;
    }
    sortB("speed", turnOrder);
    console.log(turnOrder);
    console.log(turnOrder.length);
    console.log(battleEnemyBeasts);
//  while (battleEnemyBeasts > 0 && battlePlayerBeasts > 0) {
    console.log(battlePlayerBeasts);
//  moveBattleBeast(turnOrder[g].id, g, turnOrder[g].speed,  turnOrder)
//    play = setInterval(moveBattleBeast(turnOrder[currentSelection].id, currentSelection, turnOrder[currentSelection].speed,  turnOrder), 1000);
    play = window.setInterval(function() {moveBattleBeast(turnOrder[currentSelection].id, currentSelection, turnOrder[currentSelection].speed,  turnOrder)}, 3000);
    if (currentSelection == turnOrder.length) {
            console.log("Update")
            currentSelection = 0;
    }
    if (battleEnemyBeasts == 0 && battleStarted == true) {
        clearInterval(play);
        alert("you win!");
    }
    else if (battlePlayerBeasts == 0  && battleStarted == true) {
        clearInterval(play);
        alert("You lose, try again.");
    }
    }
//}

function allStop() {
    clearInterval(play);
};

function moveBattleBeast(id, number, speed, array) {
    console.log(currentSelection)
    console.log(array[number])
 //   while (battleEnemyBeasts > 0 && battlePlayerBeasts > 0) {
    if (array[number].player == "Player") {
        var direction = findEnemyFar(array[number].x, array[number].y, "Player");
        if (direction == "Right") {
            var canMove = battleCollisionCheck(direction, array[number].x, array[number].y, array[number].player);
            console.log(canMove);
            if (canMove == "Switch") {
                switchBeasts(array, array[number].x, array[number].y, array[number].x + 1, array[number].y, "Player");
            //    currentSelection += 1;
                incrementBattle();
                updateBattle();
            }
            else if (canMove == "Obstacle") {
                
            }
            else if (canMove == "Clear") {
                drawArray[array[number].y][array[number].x] = 0;
                array[number].x += 1;
             /*   for (let p = 0; p < enlistedCreatures.length; p++) {
                    if (enlistedCreatures[p].id == id){
                    //    enlistedCreatures[p].x += 1;
                    }
                }   */
                drawArray[array[number].y][array[number].x] = 2;
           //     currentSelection += 1;
                incrementBattle();
                updateBattle();
            }
        }
    }
    else if (array[number].player == "Enemy") {
        console.log("Enemy moves.");
        var direction = findEnemyFar(array[number].x, array[number].y, "Enemy");
        console.log(direction);
        if (direction == "Left") {
            var canMove = battleCollisionCheck(direction, array[number].x, array[number].y, array[number].player);
            console.log(canMove);
            // make sure movement is flipped
            if (canMove == "Switch") {
                switchBeasts(array, array[number].x, array[number].y, array[number].x - 1, array[number].y, "Enemy");
            //    currentSelection += 1;
                incrementBattle();
                updateBattle();
            }
            else if (canMove == "Obstacle") {
                
            }
            else if (canMove == "Clear") {
                drawArray[array[number].y][array[number].x] = 0;
                array[number].x -= 1;
          /*      for (let p = 0; p < enlistedEnemyCreatures.length; p++) {
                    if (enlistedEnemyCreatures[p].id == id){
                        enlistedEnemyCreatures[p].x -= 1;
                    }
                }   */
                drawArray[array[number].y][array[number].x] = 1;
               // currentSelection += 1;
                incrementBattle();
                updateBattle();
            }
        }
    }
 //       }
}

function findEnemyClose(x, y, player) {
    
}

function battleCollisionCheck(dir, x, y, player) {
    if (dir == "Right") {
        if (player == "Player") {
            if (drawArray[y][x+1] == 2) {
                return "Switch";
            }
            else if (drawArray[y][x+1] == 0) {
                return "Clear";
            }
            else {
                return "Stop";
            }
        }
        else if (player == "Enemy") {
            if (drawArray[y][x+1] == 1) {
                return "Switch";
            }
            else if (drawArray[y][x+1] == 0) {
                return "Clear";
            }
            else {return "Stop";}
        }
    }
    else if (dir == "Left") {
        if (player == "Player") {
            if (drawArray[y][x-1] == 2) {
                return "Switch";
            }
            else if (drawArray[y][x-1] == 0) {
                return "Clear";
            }
            else {
                return "Stop";
            }
        }
        else if (player == "Enemy") {
            if (drawArray[y][x-1] == 1) {
                return "Switch";
            }
            else if (drawArray[y][x-1] == 0) {
                return "Clear";
            }
            else {return "Stop";}
        }
    }
}

function switchBeasts(array, origx, origy, destx, desty, player) {
    console.log("Switching");
    console.log(origx + "" + origy + " " + destx + "" + desty + " " + player);
    console.log(enlistedCreatures);
//    let data = [];
    if (player == "Player") {
        var p = 0;
        for (p = 0; p < enlistedCreatures.length; p++) {
            if (enlistedCreatures[p].x == origx && enlistedCreatures[p].y == origy) {
                enlistedCreatures[p].x += 1;
                continue;
            //    console.log(enlistedCreatures[p].x);
            };
            if (enlistedCreatures[p].x == destx && enlistedCreatures[p].y == desty) {
                enlistedCreatures[p].x -= 1;
                console.log(enlistedCreatures[p].x);
                console.log(enlistedCreatures);
            };
        }
    }
    else if (player == "Enemy") {
        var p = 0;
        for (p = 0; p < enlistedEnemyCreatures.length; p++) {
            if (enlistedEnemyCreatures[p].x == origx && enlistedEnemyCreatures[p].y == origy) {
                enlistedEnemyCreatures[p].x -= 1;
                continue;
            };
            if (enlistedEnemyCreatures[p].x == destx && enlistedEnemyCreatures[p].y == desty) {
                enlistedEnemyCreatures[p].x += 1;
                console.log(enlistedEnemyCreatures[p].x);
            }
        }
    }
}


function findEnemyFar(x, y, player) {
    console.log(player);
    console.log(drawArray);
    var slope; var distance = 0;
    if (player == "Player") {
        for (let i = x; i < drawArray[y].length; i++) {
            distance += 1;
            // if enemy
            if (drawArray[y][i] == 1) {
                console.log("this");
                console.log(distance);
                distance = 0;
                return "Right";
            }
        }
    }
    else if (player == "Enemy") {
        for (let i = x; i > -1; i--) {
        //    console.log(i);
            distance += 1;
            // if player
            if (drawArray[y][i] == 2) {
                console.log("Enemy Finds");
                console.log(distance);
                distance = 0;
                return "Left";
            }
        }
    }
}

// A* Pathfinding
var openNodes = []; var closedNodes = [];
function pathfindStart(x, y, player) {
    
}


var currentBattleBeastImageSmall = "Images/Adventure/Characters/smallGuy.png";
var displayPicture = true; var creatureHere = false;
function drawBattleMap() {
    // goes i = y, j = x. goes through all x values in the array, then increases the y.
    for (var i = 0; i < drawArray.length; i++) {
        for (var j = 0; j < drawArray[i].length; j++) {
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
            if (creatureHere == false && drawArray[i][j] == 2) {
                drawArray[i][j] = 0;
            }
            else if (creatureHere == false && drawArray[i][j] == 1) {
                drawArray[i][j] = 0;
            }
            // 0 – Grass, Plains, Empty - Light Green        
            if(drawArray[i][j] == 0) {
                $('#battleContainerMap').append(tileGrass.advDetail);
            }
            // 1 – Enemy Army- on terrain   1.0 = grass, 1.3 = on water, 1.4 on settlement etc 
            if(drawArray[i][j] == 1) {
                if (displayPicture == false) {
                    $('#battleContainerMap').append('<div class="grass"><p class="battle-text">Foe</p></div>');
                }
                else {
                    // old image for reference - "Images/Adventure/Characters/enemyArmy.gif"
                    $('#battleContainerMap').append('<div class="grass"><img class="adv-img" src=' + currentBattleBeastImageSmall + '><img class="adv-img-overlay" src="Images/Beasts/damageOverlay.png"></div>');
                }
            }
            else if(drawArray[i][j] == 1.8) {
               $('#battleContainerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>'); 
            }
            // 2 – Your Army – Light Green follows rules of 1, example 2.8 means on snow
            if(drawArray[i][j] == 2) {
                if (displayPicture == false) {
                    $('#battleContainerMap').append('<div class="grass"><p class="battle-text">You</p></div>');
                }
                /* test code
                else {
                $('#battleContainerMap').append('<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
                */
                else {                    
                    $('#battleContainerMap').append('<div class="grass"><img class="adv-img" src=' + currentBattleBeastImageSmall + '></div>');
                }
            }
            // your army on snow
            else if (drawArray[i][j] == 2.8) {
                $('#battleContainerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
            }
            // settlements
            if (drawArray[i][j] == 4) {
                $('#battleContainerMap').append(tileSettlement.advDetail);
                console.log(i + " " + j);
            }
            // 8 – Snow - White 
            if (drawArray[i][j] == 8) {
                $('#battleContainerMap').append(tileSnow.advDetail);
            }
            // 9 – Mountains – White with mountain pic
            if (drawArray[i][j] == 9) {
                $('#battleContainerMap').append(tileMountain.advDetail);
            }
        creatureHere = false;
        }
    }
}

function incrementBattle() {
    currentSelection += 1;
    if (currentSelection == turnOrder.length) {
        currentSelection = 0;
    }
}

function updateBattle() {
    $('#battleContainerMap').empty();
    drawBattleMap();
}

$(document).ready(function () {
    readyPlayer();
    console.log(drawArray);
    drawBattleMap();
});