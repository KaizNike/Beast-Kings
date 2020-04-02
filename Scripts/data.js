// example call - for (var i = 0; i < mapArray.length; i++) {}
// mapArray is an array that is 20 wide x 10 tall, goes from 0 to 9 - see types in the writeup
// Each tile is 50px tall by 80px wide, while small - for example on a small screen it is 20x20
var mapArrayStandardStart = [
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


// This script will contain all of the players creatures, as well as the creatures of enemy armies. It will also govern the Your Creatures and the Enlistment tabs. 
// attackType can have 3 different types, 0 is default attack, 1 is healing, 2 is sanity attack
var playerCreature = [
    {id: 1, name: "Gregarious", type: "Blade Lion", smallPicture: "Images/Beasts/Blade-Lion/bladeLion.png", picture: "Images/Beasts/Blade-Lion/bladeLionLarge.png", lvl: 1, hp: 20, sane: 20, arm: 3, attackType: "Attack", attackValue: 7, range: 1, luck: 3, speed: 6, nature: "Quick", size: "Medium"},
    {id: 2, name: "Toy Dragon", type: "Toy Dragon", smallPicture: "Images/Beasts/Toy-Dragon/toyDragon.png", picture: "Images/Beasts/Toy-Dragon/toyDragonLarge.png", lvl: 1, hp: 3, sane: 50, arm: 8, attackType: "Attack", attackValue: 20, range: 2, luck: 7, speed: 15, nature: "Fearful", size: "Small"},
    {id: 3, name: "Haunter", type: "Scary Bloob", smallPicture: "Images/Beasts/Scary-Bloob/scaryBloob.png", picture: "Images/Beasts/Scary-Bloob/scaryBloobLarge.png", lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
    {id: 4, name: "The Wump", type: "The Wump", smallPicture: "Images/Beasts/The-Wump/theWump.png", picture: "Images/Beasts/The-Wump/theWumpLarge.png", lvl: 6, hp: 55, sane: 5, arm: 5, attackType: "Attack", attackValue: 5, range: 1, luck: 5, speed: 7, nature: "Healthy", size: "Large"}
];

// example call - villageInfo[0].name;
// village information
// speakTo1: various info or village request, speakTo2: text that is disabled when you become more familiar, speakTo3: various info on quest, speakTo4: village request complete, speakTo5: All possible quests and requests complete
//xLocation and yLocation refer to its position in the array
var villageInfo = [
    {id:1, xLocation:17, yLocation:1, name:"Agabdos", hasRequest:"True", speakTo1:"We here fear the army over the mountains.", speakTo1New:"True", speakTo2:"Keep your minions close stranger.", speakTo2New:"True", speakTo3:"Talk to the elder, he has much to offer an outsider.", speakTo3New:"True", speakTo4:"Thank you for removing that pest.", speakTo4New:"True", speakTo5:"We are indebted to you.", speakTo5New:"True"},
];

var mapArray = mapArrayStandardStart;