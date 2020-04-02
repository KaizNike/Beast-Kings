// mapArray is an array that is 20 wide x 10 tall, goes from 0 to 9 - see types in the writeup
/* Old map array for reference and historical purposes
var mapArray = [
    [0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 8, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 8, 9, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 9, 9, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 8, 8, 9, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 8, 8, 8, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 9, 8, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/

// find - gives random number set as getRandomInt(maximum number)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// draws the map setup in mapArray
function drawMap() {
    for (var i = 0; i < mapArray.length; i++) {
        for (var j = 0; j < mapArray[i].length; j++) {
            // 0 – Grass, Plains, Empty - Light Green        
            if(mapArray[i][j] == 0) {
                $('#containerMap').append('<div class="grass"></div>');
            }
            // 1 – Enemy Army- on terrain   1.0 = grass, 1.3 = on water, 1.4 on settlement etc 
            if(mapArray[i][j] == 1) {
                $('#containerMap').append('<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>');
            }
            else if(mapArray[i][j] == 1.8) {
               $('#containerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>'); 
            }
            // 2 – Your Army – Light Green follows rules of 1, example 2.8 means on snow
            if(mapArray[i][j] == 2) {
                $('#containerMap').append('<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
            }
            // your army on snow
            else if (mapArray[i][j] == 2.8) {
                $('#containerMap').append('<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>');
            }
            // settlements
            if (mapArray[i][j] == 4) {
                $('#containerMap').append('<div class="settlement"><img class="adv-img" src="Images/Adventure/Impassible/settlementPic.png"></div>');
                console.log(i + " " + j);
            }
            // 8 – Snow - White 
            if(mapArray[i][j] == 8) {
                $('#containerMap').append('<div class="snow"></div>');
            }
            // 9 – Mountains – White with mountain pic
            if(mapArray[i][j] == 9) {
                $('#containerMap').append('<div class="mountain"><img class="adv-img" src="Images/Adventure/Impassible/mountainPic.png"></div>');
            }
        }
    }
}
// built for one enemy need smarts for more
// goes [enemyY][enemyX]
var enemyX = 0; var enemyY = 0;
function findEnemy() {
    for(let i=0; i < mapArray.length; i++) {
        for(let j=0; j < mapArray[i].length; j++) {
            if(parseInt(mapArray[i][j]) == 1) {
                enemyY = i;
                enemyX = j;
                console.log("Enemy is at " + (i + 1) +" " + (j + 1));
            }
        }
    }
}
// random number 0-4, 0 is no movement, 1 north, 2 south, 3 west, 4 east   
// CURRENTLY WORKING ON
// Enemy movement can break array
var canEnemyMove = false;
function moveEnemy() {
    let direction = getRandomInt(5);
    console.log(direction);
    // if north
    if (direction == 1) {
        
    }
    // if south
    else if (direction == 2) {
        
    }
    // if west
    else if (direction == 3) {
        
    }
    // if east
    else if  (direction == 4) {
        canEnemyMove = checkCollisions("East", "Enemy");
        if (canEnemyMove == false) {
        }
        else {
            mapArray[enemyY][enemyX+1] = 1;
            mapArray[enemyY][enemyX] = 0; 
        }
    }
}   

var finalX = 0; var finalY = 0;
var displayX = 0; var displayY = 0;

function findPlayer() {
    for(let i=0; i < mapArray.length; i++) {
        for(let j=0; j < mapArray[i].length; j++) {
            if(parseInt(mapArray[i][j]) == 2) {
                // finalY = 0, finalX = 0 should be top left
                finalY = i;
                finalX = j;
                displayX = finalX + 1;
                displayY = finalY + 1;
                console.log("Over " + displayX + " Down " + displayY);
                }
            }
        }
    }

function speak() {
    let x = finalX;
    let y = finalY;
    if (mapArray[y][x+1] == 1) {
        // should be a pop up // WORKING ON
        document.getElementById("adv-status").innerHTML = "Status: " + "Fight me, if ya dare.";
    }
    else {
        document.getElementById("adv-status").innerHTML = "Status: " + "There is no one to talk to."
    }
}

var canMove = false;
function goNorth() {
    let x = finalX;
    let y = finalY;
    canMove = checkCollisions("North", "Player");
    if (canMove == false) {
        console.log("ok")
    }
    else {
        document.getElementById("adv-status").innerHTML = "";
        let positionX = Math.ceil(((mapArray[y][x])-2)*10);
        console.log(positionX);
        let approachingX = ((mapArray[y-1][x]) / 10) + 2;
        console.log(approachingX);
        mapArray[y][x] = positionX;
        mapArray[y-1][x] = approachingX;
    }
    update();
    }

function goSouth() {
    let x = finalX;
    let y = finalY;
    canMove = checkCollisions("South", "Player");
    if (canMove == false) {
        console.log("ok")
    }
    else {
        document.getElementById("adv-status").innerHTML = "";
        let positionX = Math.ceil(((mapArray[y][x])-2)*10);
        console.log(positionX);
        let approachingX = ((mapArray[y+1][x]) / 10) + 2;
        console.log(approachingX);
        mapArray[y][x] = positionX;
        mapArray[y+1][x] = approachingX;
    }
    update();
    }

function goWest() {
    let x = finalX;
    let y = finalY;
    canMove = checkCollisions("West", "Player");
    if (canMove == false) {
        console.log("ok")
    }
    else {
        document.getElementById("adv-status").innerHTML = "";
        let positionX = Math.ceil(((mapArray[y][x])-2)*10);
        console.log(positionX);
        let approachingX = ((mapArray[y][x-1]) / 10) + 2;
        console.log(approachingX);
        mapArray[y][x] = positionX;
        mapArray[y][x-1] = approachingX;
    }
    update();
}

function goEast() {
    let x = finalX;
    let y = finalY;
    canMove = checkCollisions("East", "Player");
    if (canMove == false) {
        console.log("ok")
    }
    else {
        document.getElementById("adv-status").innerHTML = "";
        let positionX = Math.ceil(((mapArray[y][x])-2)*10);
        console.log(positionX);
        let approachingX = ((mapArray[y][x+1]) / 10) + 2;
        console.log(approachingX);
        mapArray[y][x] = positionX;
        mapArray[y][x+1] = approachingX;
    }
    update(); 
}

function checkCollisions(direction, subject) {
    if (subject == "Player") {
        let x = finalX;
        let y = finalY;
        if (direction == "North") {
            if (y == 0) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
                return false;
        }
            else if (mapArray[y-1][x] == 9) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
                return false;
        }
            else if (mapArray[y-1][x] == 1) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
                return false;
        }
            else if (mapArray[y-1][x] == 4) {
                document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
                return false;
        }
    }
        else if (direction == "South") {
            if (y == 9) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
                return false;
            }
            else if (mapArray[y+1][x] == 9) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
                return false;
            }
            else if (mapArray[y+1][x] == 1) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
                return false;
            }
            else if (mapArray[y+1][x] == 4) {
                document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
                return false;
            }
        }
        
        else if (direction == "West") {
            if (mapArray[y][x-1] == 9) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
                return false;
            }
            else if (x == 0) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
                return false;
            }
            else if (mapArray[y][x-1] == 1) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
                return false;
            }
            else if (mapArray[y][x-1] == 4) {
                document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
                return false;
            }   
        }
        
        else if (direction == "East") {
            if (mapArray[y][x+1] == 9) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
                return false;
            }
            else if (x == 19) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
                return false;
            }
            else if (mapArray[y][x+1] == 1) {
                document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
                return false;
            }
            else if (mapArray[y][x+1] == 4) {
                document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
                return false;
            }
        }
        else {
            console.log("Can Move")
            return true;
    }
}
    else if (subject == "Enemy") {
        let x = enemyX;
        let y = enemyY;
        if (direction == "North") {
            if (y == 0) {
                console.log("Enemy has reached the edge.")
                return false;
            }
            else if (mapArray[y-1][x] == 9) {
                return false;
            }
            else if (mapArray[y-1][x] == 2) {
                return false;
            }
            else if (mapArray[y-1][x] == 4) {
                return false;
            }
        }
        else if (direction == "South") {
            if (y == 9) {
                return false;
            }
            else if (mapArray[y+1][x] == 9) {
                return false;
            }
            else if (mapArray[y+1][x] == 2) {
                return false;
            }
            else if (mapArray[y+1][x] == 4) {
                return false;
            }
        }
        
        else if (direction == "West") {
            if (mapArray[y][x-1] == 9) {
                return false;
            }
            else if (x == 0) {
                return false;
            }
            else if (mapArray[y][x-1] == 2) {
                return false;
            }
            else if (mapArray[y][x-1] == 4) {
                return false;
            }   
        }
        
        else if (direction == "East") {
            if (mapArray[y][x+1] == 9) {
                return false;
            }
            else if (x == 19) {
                return false;
            }
            else if (mapArray[y][x+1] == 2 || mapArray[y][x+1] == 2.8) {
                return false;
            }
            else if (mapArray[y][x+1] == 4) {
                return false;
            }
        }
        else {
            console.log("Enemy Can Move")
            return true;
        } 
    
}
}

function update() {
    $('#containerMap').empty();
    findEnemy();
    moveEnemy();
    drawMap();
    findPlayer();
}

/*
window.onload = function() {
    drawMap();
//    findPlayer();   // used to be findJim();
//    console.log("Over " + finalX + " Down " + finalY);      // to be commented out later
}   */

// checks if array has loaded and writes the map Array to console
/*
window.onload=function() {
console.log(mapArray);
    } */

$(document).ready(function () {
    drawMap();
    findPlayer();
    console.log("Over " + displayX + " Down " + displayY);
   console.log(villageInfo[0].name);       // works
});

// keyboard support
$(document).on("keydown", function(keycheck) {
//    console.log(keycheck.which);  // For checking keys use - https://keycode.info/
    if (keycheck.which == 13) {
   //    $("body").append("<p>You pressed enter.</p>");     // testing code // works
   }
    else if (keycheck.which == 38 || keycheck.which == 87) {
    //    $("body").append("<p>You should go north.</p>");      // testing code // works
        goNorth();
    }
    else if (keycheck.which == 40 || keycheck.which == 83) {
        goSouth();
    }
    else if (keycheck.which == 37 || keycheck.which == 65) {
        goWest();
    }
    else if (keycheck.which == 39 || keycheck.which == 68) {
        goEast();
    }
});
