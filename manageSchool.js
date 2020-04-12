let readline = require('readline-sync');
let spells = require('./spells')

let playerOne = {
  name: "Gino",
  description: "He is a slytherin ",
  health: 50,
  score: 0,
  animal: "cat",
  house: "slytherin ",
  caract: {
    quiddich: 30,
    spells: 10,
    cunning: 15,
  },
  armes: [
    ["wand", 18],
    ["broom", 25],
  ]
}
let playerTwo = {
  name: "Carl",
  health: 50,
  score: 0,
  animal: "frog",
  description: "He is a ravenclaw",
  house: "ravenclaw",
  caract: {
    quiddich: 0,
    spells: 40,
    cunning: 25,
   
  },
  armes: [
    ["wand", 18],
    ["broom", 25],
  ]
}
let playerThree = {
  name: "Pete",
  health: 50,
  score: 0,
  animal: "rat",
  description: "He is a Gryffindor",
  house: "Gryffindor",
  caract: {
    quiddich: 10,
    spells: 15,
    cunning: 30,
  },
  armes: [
    ["wand", 18],
    ["broom", 25],
  ]
}
  let playerFour = {
    name: "Sanchez",
    health: 50,
    score: 0,
    animal: "Owl",
    description: "He is a hufflepuff",
    house: "hufflepuff",
    caract: {
      quiddich: 10,
      spells: 15,
      cunning: 30,
    },
    armes: [
      ["wand", 18],
      ["broom", 25],
    ]
}

let school = {
  name: "Hogwart",
  students: 500,
  location: "Scotland",
  houses: [
    ["Gryffindor", 0], 
    ["ravenclaw", 0], 
    ["slytherin", 0],
    ["hufflepuff", 0]
  ], 
  lastWinnerCupFam: "slytherin",
  topPlayers: [playerOne, playerTwo, playerThree, playerFour],

  /**
   * 
   */
  displayMenu(){
    let display = "1/ Display Players" + "\n";
        display += "2/ Display School" + "\n";
        display += "3/ Match" + "\n";
        display += "4/ Add A Student" + "\n";
        display += "5/ Delete A Student" + "\n";
        display += "0/ Leave A Student" + "\n";
        console.log(display)
  },

  /**
   * 
   */
  displayTopPlayers(){
    for(let i = 0; i < this.topPlayers.length; i++){
      console.log("**************")
      console.log("Player : " + (i + 1))
      console.log("Name : " + this.topPlayers[i].name) 
      console.log("Description : " + this.topPlayers[i].description)
      console.log("Family : " + this.topPlayers[i].house)
      console.log("score : " + this.topPlayers[i].score)
      console.log("Animal : " + this.topPlayers[i].animal )
      console.log("--------------")
      console.log("Armes : " );
      for(let j = 0; j < this.topPlayers[i].armes.length; j++){
      console.log("Arme : " +this.topPlayers[i].armes[j][0]);
      console.log("power : " +this.topPlayers[i].armes[j][1]+ "\n");
      }
      
    }
    console.log("**************")
  },

  /**
   * 
   */
  displayTheScoolInfos(){
    console.log("******* The " + this.name + " School *******")
    console.log("There are " + this.students + " students")
    console.log("located in a big castle in " + this.location)
    console.log("There are 4 Houses :" + "\n")
    for(let i = 0; i < this.houses.length; i++){
       console.log("House Name :" + this.houses[i][0])
       console.log("House score :" + this.houses[i][1] + "\n")
    }
  },

  /**
   * 
   */
  displayTheLastWinner(){
    console.log("******** THE LAST HOUSE WHO WON IS: " + this.lastWinnerCupFam + "********" + "\n")
  },

  /**
   * Function to add a Student
   * @param {variable} n,  is variable enter with readline in the main.js case 4 - addStudent
   * @param {variable} s is variable enter with readline in the main.js case 4 - addStudent
   * @param {variable} a is variable enter with readline in the main.js case 4 - addStudent
   * @param {variable} h is variable enter with readline in the main.js case 4 - addStudent
   * @param {variable} desc is variable enter with readline in the main.js case 4 - addStudent
   * @param {variable} ar is variable enter with readline in the main.js case 4 - addStudent
   * @return the value of the player we created in the array of TopPlayers
   */
  AddStudent(n,s,a,h,desc,ar){
    let newPlayer = {
      name: n,
      score: s,
      animal: a,
      house: h,
      description: desc,
      armes: [ar]
    }
    this.topPlayers.push(newPlayer);
  },
  /**
   * function to delete a student 
   * @param {string} name is variable enter with readline in the main.js case 5 (delete)
   * @return the value of the student we want to delete
   */
  deleteStudent(name){
    if(this.topPlayers.length > 0){
      for(let i = 0; i < this.topPlayers.length; i++){
        if(this.topPlayers[i].name === name){
          console.log("*************")
          console.log("this student was successfully removed")
          console.log("*************")
          return this.topPlayers.splice([i], 1);
        }
      }
    }else {
      console.log("there is no more players!")
    }
  },

  /**
   * function to display the Match Menu
   */
  displayMatchMenu(){
    let display = "0/Back to Main Menu" + "\n";
        display += "1/Find An Oponent" + "\n";
        display += "2/Attack" + "\n";
        display += "3/Defense" + "\n";
        display += "4/Heal" + "\n";
        console.log(display)
  },
  
   getMyPlayer(player){
    player = readline.question("Which players do you want to be? (Pete|Sanchez|Gino|Carl) ")
    for(let i = 0; i < school.topPlayers.length; i++){
      if(school.topPlayers[i].name === player){
        player = school.topPlayers[i];
         return player;
      }
    }
    return "The player you want doesn't seem to exist!"
   },
   /**
   * function to get a random number 
   * @param {number} min 
   * @param {number} max 
   * @return a random number between two value
   */
   getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

   getTheOponent(oponent){
     oponent = this.getRandomArbitrary(0, 4)
  
        if(oponent === 0){
           oponent = school.topPlayers[0];
          return oponent.name;
        }else if(oponent === 1) {
            oponent = school.topPlayers[1];
           return oponent.name;
        }else if(oponent === 2) {
            oponent = school.topPlayers[2];
           return oponent.name;
        }else if(oponent === 3) {
            oponent = school.topPlayers[3];
           return oponent.name;
        }else {
           return "Not found";
        }
   },

/**
 * function do a main Menu Match into The Main Menu
 *
*/
  menuMatch(){
    let actions = -1;
    while(actions !== 0){
      this.displayMatchMenu()
      let actions = readline.questionInt("What do you want to do? ")
      let myPlayer = this.getMyPlayer.myPlayer;
      let theOponent = "";        
        switch(actions){
          case 0: console.log("Back to The Menu")
          break;

          case 1:
            console.log("You are in the Match Mode!")
            console.log("***********")
            let match = "";
             myPlayer = this.getMyPlayer(); // myPlayer is an Object
             theOponent = this.getTheOponent();
             console.log(theOponent);
            if(myPlayer !== theOponent){
              console.log("My player is: " + myPlayer.name)
              console.log("Your Oponent will be : " + theOponent);
              console.log("*************")
              match += myPlayer.name + " VS " + theOponent;
              
            }else {
              this.getTheOponent();
            } 
            console.log(match);
            console.log("*************************************")
            console.log("*********** LET'S FIGHT! ************")
          break;

          case 2:
          
          this.attack(myPlayer, theOponent)
          break;
          case 3: 
          this.defense(myPlayer, theOponent)
          break;
          case 4: 
          this.heal(myPlayer, theOponent)
          break;
          default : console.log("not found")
        }
      }
    },

  /**
   * 
   */
  displayMenuAttack(){
    let display = "0/ Back to fight!" + "\n";
    display += "1/ Expelliarmus" + "\n";
    display += "2/ Bombata maxima" + "\n";
    display += "3/ Sectumsempra" + "\n";
    display += "4/ Rictusempra " + "\n";
    display += "5/ Stupefy" + "\n";
    display += "6/ Everte Statum" + "\n";
    console.log(display)
  },
  /**
   * function to allow an attack in a match
   * @param {Object} player the player the user choosen among topPlayers
   * @param {Object} oponent the random oponent from topPlayers
   */
  attack(player, oponent){
    let actions = -1;
    while(actions !== 0){
      this.displayMenuAttack()
      actions = readline.questionInt("What do you want to do? ")
      switch(actions){
        case 0: console.log("Back to fight!!!")
        break;
        case 1: console.log("Expelliarmus!!")
        
        spells.experliamus(player, oponent)
        console.log("Score of " + player.name + " is :" + player.score)
        console.log("Health of " + player.name + " is :" + player.Health)
        console.log("Score of " + player.name + " is :" + oponent.score)
        console.log("Score of " + player.Health + " is :" + oponent.Health)
        break;
        case 2: console.log("Bombata maxima!!")
        break;
        case 3: console.log("Rictusempra!!")
        break;
        case 4: console.log("Stupefy!!")
        break;
        case 5: console.log("Everte Statum!!")
        break;
        default : console.log("not found")
      }
    }
  },
  
  /**
   * 
   * @param {*} playerOne 
   * @param {*} playerTwo 
   */
  experliamus(playerOne, playerTwo){
    playerOne.score -= 10; 
    playerTwo.score -= 15; 
  },
  /**
   * 
   */
  displayMenuDefense(){
    let display = "0/ Back to fight!" + "\n";
        display += "1/ Take a flight" + "\n";
        display += "2/ Expecto Patronum" + "\n";
        display += "3/ Protego totalum" + "\n";
        display += "4/ Salvio Hexia" + "\n";
        display += "5/ levicorpus" + "\n";
        console.log(display)
  },
  /**
   * 
   */
  defense(){
    let actions = -1;
    while(actions !== 0){
      this.displayMenuDefense()
      actions = readline.questionInt("What do you want to do? ")
      switch(actions){
        case 0: console.log("Back to fight!!!")
        break;
        case 1: console.log("Catch me If you can!!")
        break;
        case 2: console.log("Expecto Patronum!!")
        break;
        case 3: console.log("Protego totalum!!")
        break;
        case 4: console.log("Salvio Hexia!!")
        break;
        case 5: console.log("levicorpus!!")
        break;
        default : console.log("not found")
      }
    }
  },
  /**
   * 
   */
  displayMenuHeal(){
    let display = "0/ Back to fight!" + "\n";
        display += "1/ Reparo" + "\n";
        display += "2/ rennervate" + "\n";
        console.log(display)
  }, 
  /**
   * 
   */
  heal(){
    let actions = -1;
    while(actions !== 0){
      this.displayMenuHeal()
      actions = readline.questionInt("What do you want to do? ")
      switch(actions){
        case 0: console.log("Back to fight!");
        break;
        case 1: console.log("Reparo!!")
        break;
        case 2: console.log("Renervate!")
        break;
        default : console.log("not found")
      }
    }
  },
  /**
   * 
   */
  displayTheHousesRanking(){

  },

}

module.exports = school;
