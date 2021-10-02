// Controls the start of the game
// false for testing, true for playtesting, should be false after start.
var firstTime = false;

var maxStats = {
    normal: 255, lvl: 20, luck: 20, sane: 55, arm: 20, atk: 35, hp: 255, range: 7, size: "Huge"
}

// example call - for (var i = 0; i < mapArray.length; i++) {}
// mapArray is an array that is 20 wide x 10 tall, goes from 0 to 9 - see types in the writeup
// Each tile is 50px tall by 80px wide, while small - for example on a small screen it is 20x20
// should be changed in order to support future maps // TO FIX
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

// example call console.log(battleMapArray.storyStart[0][0])
// battlemap is similar to adventure map, 20 wide by 10 tall
var battleMapArray = {
    storyStart: [
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
    ]
};

// Duel maps are smaller than regular maps, at 3 tiles tall
var duelMapArray = {
    grassyPlains: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    mountainPath: [
        [0, 0, 0, 0, 0, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 8, 9, 8, 9, 9, 9, 9, 8, 9, 8, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 9, 8, 0, 0, 0, 0, 0]
    ]
};

var mapArray = mapArrayStandardStart; var duelArray = duelMapArray.mountainPath;

var beastDatabase = {
    BladeLion: {
        baseId: 0, type: "Blade Lion", attackType: "Attack", smallPicture: "Images/Beasts/Blade-Lion/bladeLion.png", picture: "Images/Beasts/Blade-Lion/bladeLionLarge.png", commonNature: "Brave", size: "Medium", range: 1,
        startStats: {
            lvl: 1, hp: 20, sane: 20, arm: 3, attackValue: 7, luck: 3, speed: 6
        },
        terrain: [
            "Grass"
        ]
    },
    LuckyStar: {
        baseId: 1, type: "Lucky Star", attackType: "Attack", smallPicture: "Images/Beasts/Lucky-Star/luckyStar.png", picture: "Images/Beasts/Lucky-Star/luckyStarLarge.png", commonNature: "Lucky", size: "Small", range: 1,
        startStats: {
            lvl: 13, hp: 8, sane: 35, arm: 0, attackValue: 5, luck: 20, speed: 1
        },
        terrain: [
            "Beach"
        ]
    },
    BugTurtle: {
        baseId: 2, type: "Bug Turtle", attackType: "Attack", smallPicture: 
        "Images/Beasts/Bug-Turtle/bugTurtle.png", picture: "Images/Beasts/Bug-Turtle/bugTurtleLarge.png", commonNature: "Protected", size: "Small", range: 1,
        startStats: {
            lvl: 1, hp: 5, sane: 10, arm: 12, attackValue: 2, luck: 7, speed: 4
        },
        terrain: [
            "Beach", "River", "Water"
        ]
    },
    GigaSnake: {
        baseId: 3, type: "Giga Snake", attackType: "Attack", smallPicture: 
        "Images/Beasts/Giga-Snake/gigaSnake.png", picture: "Images/Beasts/Giga-Snake/gigaSnakeLarge.png", commonNature: "Cursed", size: "Very Large", range: 2,
        startStats: {
            lvl: 8, hp: 35, sane: 12, arm: 6, attackValue: 17, luck: 0, speed: 5
        },
        terrain: [
            "Grass"
        ]
    },
    ToyDragon: {
        baseId: 4, type: "Toy Dragon", attackType: "Attack", smallPicture: 
        "Images/Beasts/Toy-Dragon/toyDragon.png", picture: "Images/Beasts/Toy-Dragon/toyDragonLarge.png", commonNature: "Fearful", size: "Small", range: 2,
        startStats: {
            lvl: 1, hp: 3, sane: 50, arm: 8, attackValue: 20, luck: 7, speed: 15
        },
        terrain: [
            "Snow"
        ]
    },
    ScaryBloob: {
        baseId: 5, type: "Scary Bloob", attackType: "Fear", smallPicture: 
        "Images/Beasts/Scary-Bloob/scaryBloob.png", picture: "Images/Beasts/Scary-Bloob/scaryBloobLarge.png", commonNature: "Special Technique", size: "Very Large", range: 2,
        startStats: {
            lvl: 20, hp: 10, sane: 1, arm: 10, attackValue: 8, luck: 3, speed: 6
        },
        terrain: [
            "Marsh"
        ]
    },
    TheWump: {
        baseId: 6, type: "The Wump", attackType: "Attack", smallPicture: 
        "Images/Beasts/The-Wump/theWump.png", picture: "Images/Beasts/The-Wump/theWumpLarge.png", commonNature: "Healthy", size: "Large", range: 1,
        startStats: {
            lvl: 6, hp: 55, sane: 5, arm: 5, attackValue: 5, luck: 5, speed: 7
        },
        terrain: [
            "Snow"
        ]
    },
    Monkfish: {
        baseId: 7, type: "Monkfish", attackType: "Heal", smallPicture: 
        "Images/Beasts/Monk-Fish/monkFish.png", picture: "Images/Beasts/Monk-Fish/monkFishLarge.png", commonNature: "Healthy", size: "Medium", range: 1,
        startStats: {
            lvl: 1, hp: 15, sane: 35, arm: 8, attackValue: 7, luck: 10, speed: 2
        },
        terrain: [
            "Water"
        ]
    }
};

// This variable will contain all of the players creatures, as well as the creatures of enemy armies. It will also govern the Your Creatures and the Enlistment tabs. 
// attackType can have 3 different types, 0 is default attack, 1 is healing, 2 is sanity attack (Now executed as either "Attack", "Heal", or "Fear")
var playerCreature = [
    {id: 1, name: "Gregarious", type: "Blade Lion", smallPicture: "Images/Beasts/Blade-Lion/bladeLion.png", picture: beastDatabase.BladeLion.picture, lvl: 1, hp: 20, sane: 20, arm: 3, attackType: "Attack", attackValue: 7, range: 1, luck: 3, speed: 6, nature: "Quick", size: "Medium"},
    {id: 2, name: "Toy Dragon", type: "Toy Dragon", smallPicture: "Images/Beasts/Toy-Dragon/toyDragon.png", picture: "Images/Beasts/Toy-Dragon/toyDragonLarge.png", lvl: 1, hp: 3, sane: 50, arm: 8, attackType: "Attack", attackValue: 20, range: 2, luck: 7, speed: 15, nature: "Fearful", size: "Small"},
    {id: 3, name: "Haunter", type: "Scary Bloob", smallPicture: "Images/Beasts/Scary-Bloob/scaryBloob.png", picture: "Images/Beasts/Scary-Bloob/scaryBloobLarge.png", lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
    {id: 4, name: "The Wump", type: "The Wump", smallPicture: "Images/Beasts/The-Wump/theWump.png", picture: "Images/Beasts/The-Wump/theWumpLarge.png", lvl: 6, hp: 55, sane: 5, arm: 5, attackType: "Attack", attackValue: 5, range: 1, luck: 5, speed: 7, nature: "Healthy", size: "Large"}
];

var storyEnemyCreature = {
    storyStart: [
            {id: 0, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 1, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 2, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 3, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 4, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 5, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 6, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        //Giga Snake
            {id: 7, name: "Aspenator", type: beastDatabase.GigaSnake.type, smallPicture: beastDatabase.GigaSnake.smallPicture, picture: beastDatabase.GigaSnake.picture, lvl: 20, hp: beastDatabase.GigaSnake.startStats.hp, sane: beastDatabase.GigaSnake.startStats.sane, arm: beastDatabase.GigaSnake.startStats.arm, attackType: beastDatabase.GigaSnake.attackType, attackValue: beastDatabase.GigaSnake.startStats.attackValue, range: beastDatabase.GigaSnake.range, luck: beastDatabase.GigaSnake.startStats.luck, speed: beastDatabase.GigaSnake.startStats.speed, nature: "Special Technique", size: "Very Large"},
        
            {id: 8, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 9, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 10, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        // Giga Snake
            {id: 11, name: "Striker", type: beastDatabase.GigaSnake.type, smallPicture: beastDatabase.GigaSnake.smallPicture, picture: beastDatabase.GigaSnake.picture, lvl: 20, hp: beastDatabase.GigaSnake.startStats.hp, sane: beastDatabase.GigaSnake.startStats.sane, arm: beastDatabase.GigaSnake.startStats.arm, attackType: beastDatabase.GigaSnake.attackType, attackValue: beastDatabase.GigaSnake.startStats.attackValue, range: beastDatabase.GigaSnake.range, luck: beastDatabase.GigaSnake.startStats.luck, speed: beastDatabase.GigaSnake.startStats.speed, nature: "Special Technique", size: "Very Large"},
        
            {id: 12, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 13, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        
            {id: 14, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
        // Last Enemy
            {id: 15, name: "Shadley", type: "Scary Bloob", smallPicture: beastDatabase.ScaryBloob.smallPicture, picture: beastDatabase.ScaryBloob.picture, lvl: 20, hp: 10, sane: 1, arm: 10, attackType: "Fear", attackValue: 8, range: 1, luck: 3, speed: 6, nature: "Special Technique", size: "Very Large"},
    ]
};

var testingCreatures = {
    player: [
        {id: 0, name: "Kimba", type: "Blade Lion", smallPicture: beastDatabase.BladeLion.smallPicture, picture: beastDatabase.BladeLion.picture, lvl: 1, hp: 20, sane: 20, arm: 3, attackType: "Attack", attackValue: 7, range: 1, luck: 3, speed: 6}
    ],
    enemy: [
        {id: 0, name: "Simba", type: "Blade Lion", smallPicture: beastDatabase.BladeLion.smallPicture, picture: beastDatabase.BladeLion.picture, lvl: 1, hp: 20, sane: 20, arm: 3, attackType: "Attack", attackValue: 7, range: 1, luck: 3, speed: 6}
    ]
    
};

// Change here to select creature on the battle map
/* for start
var enlistedCreatures = playerCreature; var enlistedEnemyCreatures = storyEnemyCreature.storyStart;
*/
var enlistedCreatures = testingCreatures.player; var enlistedEnemyCreatures = testingCreatures.enemy;

// example call - villageInfo[0].name;
// village information
// speakTo1: various info or village request, speakTo2: text that is disabled when you become more familiar, speakTo3: various info on quest, speakTo4: village request complete, speakTo5: All possible quests and requests complete
//xLocation and yLocation refer to its position in the array
var villageInfo = [
    {id:1, xLocation:17, yLocation:1, name:"Agabdos", hasRequest:"True", speakTo1:"We here fear the army over the mountains.", speakTo1New:"True", speakTo2:"Keep your minions close stranger.", speakTo2New:"True", speakTo3:"Talk to the elder, he has much to offer an outsider.", speakTo3New:"True", speakTo4:"Thank you for removing that pest.", speakTo4New:"True", speakTo5:"We are indebted to you.", speakTo5New:"True"},
];
// First is original, second is man, third is miny.
var avatars = [
    {id:"0", smallPicture:"Images/Adventure/Characters/smallGuy.png", picture:"Images/Adventure/Characters/smallGuyLarge.png", name:"Shaulok Bitterskin", tidbit:"Not a well known fellow around these parts, but the few that recall him have such stories to tell. One frail man spoke of how he was one day like a hero, and the next he killed his pet Monkfish. Perhaps the average is chaotic neutral."},
    {id:"1", smallPicture:"Images/Adventure/Characters/smallMan.png", picture:"Images/Adventure/Characters/smallManLarge.png", name:"Exercise Caution", tidbit:"A brawler from the southern tribes, he left to make his way in the world. Nowadays we hear stories of how one village was saved by him. But dare be the man who gets in his way. Lawful chaotic at best."},
    {id:"2", smallPicture:"Images/Adventure/Characters/smallMiny.png", picture:"Images/Adventure/Characters/smallMinyLarge.png", name:"Nomad Waterlocker", tidbit:"A small fellow, he makes it up in wit. I met him once, he asked for a cup of water. Not feeling charitable, he then called it an insult to his name and challenged me to a duel. A true neutral if ever I saw one."}
]

// The start options as variables, saved in data.js
var selectedAvatar; var storySelected;

var tileGrass; var tileEnemyGrass; var tileEnemySnow; var tilePlayerGrass; var tilePlayerSnow; var tileSettlement; var tileSnow; var tileMountain;
tilesMain = [
    tileGrass = {id: 0, name: "Grass", advDetail: '<div class="grass"></div>'},
    tileEnemyGrass = {id: 1, name: "Enemy Grass", advDetail: '<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>'},
    tileEnemySnow = {id: 1.8, name: "Enemy Snow", advDetail: '<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/enemyArmy.gif"></div>'},
    tilePlayerGrass = {id: 2, name: "Player Grass", advDetail: '<div class="grass"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>'},
    tilePlayerSnow = {id: 2.8, name: "Player Snow", advDetail: '<div class="snow"><img class="adv-img" src="Images/Adventure/Characters/smallGuy.png"></div>'},
    tileSettlement = {id: 4, name: "Settlement", advDetail: '<div class="settlement"><img class="adv-img" src="Images/Adventure/Impassible/settlementPic.png"></div>'},
    tileSnow = {id: 8, name: "Snow", advDetail: '<div class="snow"></div>'},
    tileMountain = {id: 9, name: "Moutain", advDetail: '<div class="mountain"><img class="adv-img" src="Images/Adventure/Impassible/mountainPic.png"></div>'}
    
]

// console.log(battleMapArray.storyStart[0][0])
console.log(storyEnemyCreature.storyStart[11])