var currentCharacterSelect = 0;
function characterSelect(value) {
 //   console.log(avatars[0].name)  //works
    currentCharacterSelect = currentCharacterSelect + value;
    if (currentCharacterSelect < 0) {
        currentCharacterSelect = avatars.length - 1;
    }
    else if (currentCharacterSelect > avatars.length - 1) {
        currentCharacterSelect = 0;
    }
//    console.log(currentCharacterSelect)   //works
    displayCharacter(avatars[currentCharacterSelect].picture, avatars[currentCharacterSelect].name, currentCharacterSelect, avatars[currentCharacterSelect].tidbit);
//    console.log(value)        // works
}

function displayCharacter(image, name, number, background) {
    document.getElementById("storySelect").src = image;
    document.getElementById("storyName").innerHTML = name;
    document.getElementById("selectBackgroundTidbit").innerHTML = avatars[currentCharacterSelect].tidbit;
//    console.log(avatars[currentCharacterSelect].tidbit)    //Works
    if (number == 0) {
        //Left
        document.getElementById("storySelectLeft").src = avatars[2].smallPicture
        //Right
        document.getElementById("storySelectRight").src = avatars[currentCharacterSelect+1].smallPicture
    }
    else if (number == avatars.length - 1) {
        //Left
        document.getElementById("storySelectLeft").src = avatars[currentCharacterSelect-1].smallPicture
        //Right
        document.getElementById("storySelectRight").src = avatars[0].smallPicture
    }
    // if not edge case
    else {
        //Left
        document.getElementById("storySelectLeft").src = avatars[currentCharacterSelect-1].smallPicture
        //Right
        document.getElementById("storySelectRight").src = avatars[currentCharacterSelect+1].smallPicture
    }
}

var step1 = false;
function initializeStory(optionStart) {
//    console.log("Button pushed.")
    if (optionStart == "Story") {
    //    console.log("NOW!")
        document.getElementById("Start-Story").style.visibility = "visible"; 
        document.getElementById("Start-Battle").style.visibility = "visible";
        step1 = true;
        document.getElementById("defaultOpen").click();
        document.getElementById("Story-Start-Selection").click();
        
    }
    else if (optionStart == "Standard") {
        let x = document.getElementsByClassName("tablinks");
        let i = 0;
        while (x[i]) {
            document.getElementsByClassName("tablinks")[i].style.visibility = "visible";
            i++;
        }
    }
}

function startGame() {
    if (firstTime == true) {
    //    console.log("test");
        let x = document.getElementsByClassName("tablinks");
        let i = 0;
        while (x[i]) {
            document.getElementsByClassName("tablinks")[i].style.visibility = "hidden";
            i++;
        //    console.log(i)
        }
        
    }
    // load the game from file or cloud
    else {
        
    }
}

$(document).ready(function () {
    startGame();
    displayCharacter(avatars[currentCharacterSelect].picture, avatars[currentCharacterSelect].name, currentCharacterSelect);
});

setInterval( startGame(), 0.01 );
