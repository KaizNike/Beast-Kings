function displayPlayerCreature() {
    for (var i = 0; i < playerCreature.length; i++) { 
    //    console.log(playerCreature[i].name);      // works
        // Your Creatures Page, adds a button with the creatures name on it.
        $('#creature-selection').append('<button onclick="display(' + playerCreature[i].id + ')" class="creature-button">' + playerCreature[i].name + '</button>');
        // Enlistment Page, should display a checkbox, an image and the name
        $('#creatures-form').append('<input type="checkbox" onchange="doalert(this, ' + playerCreature[i].id + ')">' + '<img src="' + playerCreature[i].smallPicture + '">' + /* '<p>'  + */ playerCreature[i].name /* + '</p>' */);
    }
}

function display(id) {
    for (var j = 0; j < playerCreature.length; j++) {
        if (id == playerCreature[j].id) {
        //    console.log(playerCreature[j].name);        // works
            // Your Creatures Page
            document.getElementById("creature-img").src = playerCreature[j].picture;
            document.getElementById("creature-name").innerHTML = "NAME: " + playerCreature[j].name;
            document.getElementById("creature-type").innerHTML = "TYPE: " + playerCreature[j].type;
            
            document.getElementById("creature-lvl").innerHTML = "LVL: " + playerCreature[j].lvl;
            document.getElementById("creature-hp").innerHTML = "HP: " + playerCreature[j].hp;
            document.getElementById("creature-sane").innerHTML = "SANE: " + playerCreature[j].sane;
            document.getElementById("creature-arm").innerHTML = "ARM: " + playerCreature[j].arm;
            document.getElementById("creature-attack-type").innerHTML = "ATTACK TYPE: " + playerCreature[j].attackType;
            document.getElementById("creature-attack-value").innerHTML = "FEAR/ATK: " + playerCreature[j].attackValue;
            document.getElementById("creature-range").innerHTML = "RANGE: " + playerCreature[j].range;
            document.getElementById("creature-luck").innerHTML = "LUCK: " + playerCreature[j].luck;
            document.getElementById("creature-speed").innerHTML = "SPEED: " + playerCreature[j].speed;
            document.getElementById("creature-nature").innerHTML = "NATURE: " + playerCreature[j].nature;
            document.getElementById("creature-size").innerHTML = "SIZE: " + playerCreature[j].size;
        }
    }
}

var selectedNum = 0;
function doalert(checkboxElem, id) {
    if (checkboxElem.checked) {
        selectedNum++;
        for (var k = 0; k < playerCreature.length; k++) {
            if (id == playerCreature[k].id) {
                // To be used on the enlistment page, this works by checking the id set by each checkbox made in displayPlayerCreature() and checking if the checkbox is marked, if it is this runs. It then adds an option to a select element classed '.enlistment-select' of the creature selected by the checkbox.
                for (var selectNum = 0; selectNum < 17; selectNum++) {
                    $('#enlistment-select-' + selectNum).append('<option id="enlistment-creature-select-' + selectNum + '" value="' + id + '" class="enlistment-creature-' + id + '">' + playerCreature[k].name + '</option>');
                    }
            }
        }
    } else {
        selectedNum--;
    //    document.getElementsByClassName("enlistment-creature" + id).remove();
        $('.enlistment-creature-' + id).remove();
    }
    document.getElementById("selected-num").innerHTML = selectedNum + "/16";
    console.log(id);
    }

// enlistmentSelection() is used with the select elements on the enlistment page, it is used to select certain creatures to be put in your army
// the html select takes the value and sets it as var select also known as the id
function enlistmentSelection() {
    var select = document.getElementById("enlistment-select-" + finalSelectionLocation).value;
    // when -NONE- is selected
    if (select == 0) {
        document.getElementById("enlistment-img-" + finalSelectionLocation).src = "Images/Beasts/blankLarge.png";
        document.getElementById("enlistment-hp-" + finalSelectionLocation).innerHTML = "HP:";
        document.getElementById("enlistment-sane-" + finalSelectionLocation).innerHTML = "SANE:";
    //    console.log("Selected none.");        // WORKS
        
    }
    else {
        for (var l = 0; l < playerCreature.length; l++) {
            if (select == playerCreature[l].id) {
            //    console.log(playerCreature[l].name);      // works
                document.getElementById("enlistment-img-" + finalSelectionLocation).src = playerCreature[l].picture;
                document.getElementById("enlistment-hp-" + finalSelectionLocation).innerHTML = "HP:" + playerCreature[l].hp;
                document.getElementById("enlistment-sane-" + finalSelectionLocation).innerHTML = "SANE:" + playerCreature[l].sane;
                // removes the selection so it isn't selected twice, should not remove it from the one selected. Goes through selectNum 1 through 16 and not finalSelectionLocation. And should remove the id connected to each select.
                for (var locationNum = 0; locationNum < 17; locationNum++) {
                    if (locationNum !== finalSelectionLocation) {
                        $('#enlistment-creature-select-' + locationNum).remove();
                    }
                }
            //    $('#enlistment-select-' + finalSelectionLocation).append('<option value="' + select + '" id="enlistment-creature-' + select + '" value="' + select + '">' + playerCreature[l].name + '</option>');
                //    document.getElementById("enlistment-creature-" + select).click();     // doesn't work
            }
        }
    }
}
var finalSelectionLocation = 0;
function enlistmentSelectionLocation(location) {
    finalSelectionLocation = location;
//    console.log(finalSelectionLocation);      // WORKS
}

//    /*      // Use this to test code from this script
$(document).ready(function () {
    // worked
//    console.log(playerCreature[0].name + " This shows the creature script is working.");
    displayPlayerCreature();
});     
// */