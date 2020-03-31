// mapArray is an array that is 20 wide x 10 tall, goes from 0 to 9 - see types in the writeup
/* Old map array for reference and historical purposes
var mapArray = [
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
*/



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

// find - gives random number set as getRandomInt(maximum number)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// example call - villageInfo[0].name;
// village information
// speakTo1: various info or village request, speakTo2: text that is disabled when you become more familiar, speakTo3: various info on quest, speakTo4: village request complete, speakTo5: All possible quests and requests complete
//xLocation and yLocation refer to its position in the array
var villageInfo = [
    {id:1, xLocation:17, yLocation:1, name:"Agabdos", hasRequest:"True", speakTo1:"We here fear the army over the mountains.", speakTo2:"Keep your minions close stranger.", speakTo3:"Talk to the elder, he has much to offer an outsider.", speakTo4:"Thank you for removing that pest."},
];

// draws the map setup in mapArray
function drawMap() {
    for (var i = 0; i < mapArray.length; i++) {
        for (var j = 0; j < mapArray[i].length; j++) {
            // 0 – Grass, Plains, Empty - Light Green        
            if(mapArray[i][j] == 0) {
                $('#containerMap').append('<div class="grass"></div>');
            }
            // 1 – Enemy Army- on terrain   1.0 = grass, 1.3 = on water, 1.4 on settlement etc // does not work currently do not use       
            if(mapArray[i][j] == 1) {
                $('#containerMap').append('<div class="grass"><img class="adv-img" src="enemyArmy.gif"></div>');
            }
            else if(mapArray[i][j] == 1.8) {
               $('#containerMap').append('<div class="snow"><img class="adv-img" src="enemyArmy.gif"></div>'); 
            }
            // 2 – Your Army – Light Green follows rules of 1, example 2.8 means on snow
            if(mapArray[i][j] == 2) {
                $('#containerMap').append('<div class="grass"><img class="adv-img" src="smallGuy.png"></div>');
            }
            // your army on snow
            else if (mapArray[i][j] == 2.8) {
                $('#containerMap').append('<div class="snow"><img class="adv-img" src="smallGuy.png"></div>');
            }
            // settlements
            if (mapArray[i][j] == 4) {
                $('#containerMap').append('<div class="settlement"><img class="adv-img" src="settlementPic.png"></div>');
                console.log(i + " " + j);
            }
            // 8 – Snow - White 
            if(mapArray[i][j] == 8) {
                $('#containerMap').append('<div class="snow"></div>');
            }
            // 9 – Mountains – White with mountain pic
            if(mapArray[i][j] == 9) {
                $('#containerMap').append('<div class="mountain"><img class="adv-img" src="mountainPic.png"></div>');
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
function moveEnemy() {
    let direction = getRandomInt(5);
    console.log(direction);
    // if north
    /*
    if (direction == 1) {
        mapArray[enemyY-1][enemyX] = 1;
        mapArray[enemyY][enemyX] = 0;
    }       */
    if  (direction == 4) {
        
    }
}   

var finalX = 0;
var finalY = 0;
function findPlayer() {
    for(let i=0; i < mapArray.length; i++) {
        for(let j=0; j < mapArray[i].length; j++) {
            if(parseInt(mapArray[i][j]) == 2) {
                // finalY = 0, finalX = 0 should be top left
                finalY = i + 1;
                finalX = j + 1;
                console.log("Over " + finalX + " Down " + finalY);
                }
            }
        }
    }
function speak() {
    let x = finalX - 1;
    let y = finalY - 1;
    if (mapArray[y][x+1] == 1) {
        // should be a pop up // WORKING ON
        document.getElementById("adv-status").innerHTML = "Status: " + "Fight me, if ya dare.";
    }
    else {
        document.getElementById("adv-status").innerHTML = "Status: " + "There is no one to talk to."
    }
}

function goNorth() {
    let x = finalX - 1;
    let y = finalY - 1;
    //console.log(x + " " + y);
    if (y == 0) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
    }
    else if (mapArray[y-1][x] == 9) {
       // console.log("You cant proceed.")
        document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
    //    y++;
    }
    else if (mapArray[y-1][x] == 1) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
    //    y++;
    }
    else if (mapArray[y-1][x] == 4) {
        document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
     //   y++;
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
    // takes Player's location and draws grass there
    $('#containerMap').empty();
    findEnemy();
    moveEnemy();
    drawMap();
    findPlayer();
    }

function goSouth() {
    let x = finalX - 1;
    let y = finalY - 1;
    //console.log(x + " " + y);
    if (y == 9) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
    }
    else if (mapArray[y+1][x] == 9) {
       // console.log("You cant proceed.")
        document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
    //    y--;
    }
    else if (mapArray[y+1][x] == 1) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
    //    y--;
    }
    else if (mapArray[y+1][x] == 4) {
        document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
    //    y--;
    }
    else {
        document.getElementById("adv-status").innerHTML = "";
        document.getElementById("adv-status").innerHTML = "";
        let positionX = Math.ceil(((mapArray[y][x])-2)*10);
        console.log(positionX);
        let approachingX = ((mapArray[y+1][x]) / 10) + 2;
        console.log(approachingX);
        mapArray[y][x] = positionX;
        mapArray[y+1][x] = approachingX;
    }
    // takes Player's location and draws grass there
    $('#containerMap').empty();
    drawMap();
    findPlayer();
    }

function goWest() {
    let x = finalX - 1;
    let y = finalY - 1;
    //console.log(x + " " + y);
    if (mapArray[y][x-1] == 9) {
       // console.log("You cant proceed.")
        document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
    //    x++;
    }
    else if (x == 0) {
       document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
    }
    else if (mapArray[y][x-1] == 1) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
    //    x++;
    }
    else if (mapArray[y][x-1] == 4) {
        document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
    //    x++;
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
    // takes Player's location and draws grass there
   /* mapArray[y][x] = 0;
    mapArray[y][x-1] = 2;   */
    $('#containerMap').empty();
    drawMap();
    findPlayer(); 
    }

function goEast() {
    let x = finalX - 1;
    let y = finalY - 1;
    //console.log(x + " " + y);
    /*
    if (x == 18) {
        x--;
    }       */
    if (mapArray[y][x+1] == 9) {
       // console.log("You cant proceed.")
        document.getElementById("adv-status").innerHTML = "Status: " + "You can't travel through the mountains.";
   //     x--;
    }
    else if (x == 19) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You have reached the bounds of this plane.";
    }
    else if (mapArray[y][x+1] == 1) {
        document.getElementById("adv-status").innerHTML = "Status: " + "You must fight this foe.";
    //    x--;
    }
    else if (mapArray[y][x+1] == 4) {
        document.getElementById("adv-status").innerHTML = "Status: " + "They prevent you from entering this place.";
     //   x--;
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
    // takes Player's location and draws grass there
    
    $('#containerMap').empty();
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
    console.log("Over " + finalX + " Down " + finalY);
   console.log(villageInfo[0].name);       // works
});

// keyboard support
$(document).on("keydown", function(keycheck) {
    console.log(keycheck.key);
    if (keycheck.which == 13) {
       $("body").append("<p>You pressed enter.</p>");
   }
    else if (keycheck.which == 38) {
    //    $("body").append("<p>You should go north.</p>");      // testing code
        goNorth();
    }
    else if (keycheck.which == 40) {
        goSouth();
    }
    else if (keycheck.which == 37) {
        goWest();
    }
    else if (keycheck.which == 39) {
        goEast();
    }
});
