let school = require('./manageSchool')

/**
 * To export to manageSchool in the next step
 */
let spells = {
   experliamus(playerOne, playerTwo){
    school.topPlayers[playerOne].score += 10; 
    school.playerOne.health -= 5 ;
    school.playerTwo.score += 5; 
    school.playerTwo.health -= 10;
    console.log(playerOne);
    console.log(playerTwo);
  },
  // -- attack spells
  bombataMaxima(playerOne, playerTwo){
    school.playerOne.score += 8;
    school.playerOne.health -= 5;
    school.playerTwo.score += 5;
    school.playerTwo.health -= 8;
    console.log(playerOne);
    console.log(playerTwo);
  },
  sectumsempra(playerOne, playerTwo){
    school.playerOne.score += 15;
    school.playerOne.health -= 20;
    school.playerTwo.score += 20
    school.playerTwo.health -= 15;
    console.log(playerOne);
    console.log(playerTwo);
  },
  rictusempra(playerOne, playerTwo){
    school.playerOne.score += 3;
    school.playerOne.health -= -3;
    school.playerTwo.score += 8;
    school.playerTwo.health -= -8;
    console.log(playerOne);
    console.log(playerTwo);
  },
  stupefy(playerOne, playerTwo){
    school.playerOne.score += 0;
    school.playerOne.health -= 0;
    school.playerTwo.score += 0;
    school.playerTwo.health -= 5;
    console.log(playerOne);
    console.log(playerTwo);
  },
  everteStatum(playerOne, playerTwo){
    school.playerOne.score += 2
    school.playerOne.health -= 1;
    school.playerTwo.score += 1
    school.playerTwo.health -= 3;
    console.log(playerOne);
    console.log(playerTwo);
  },
  // -- defense spells
  fly(playerOne, playerTwo){
    school.playerOne.score += 5;
    school.playerOne.health -= 0;
    school.playerTwo.score += 0
    school.playerTwo.health -= 0;
    console.log(playerOne);
    console.log(playerTwo);
  },
  expectoPatronus(playerOne, playerTwo){
    school.playerOne.score += 10
    school.playerOne.health -= 5;
    school.playerTwo.score += 5
    school.playerTwo.health -= 10;
    console.log(playerOne);
    console.log(playerTwo);
  },
  protegoTotalum(playerOne, playerTwo){
    school.playerOne.score += 5;
    school.playerOne.health -= -5;
    school.playerTwo.score += 5;
    school.playerTwo.health -= 5;
    console.log(playerOne);
    console.log(playerTwo);
  },
  salvioHexia(playerOne, playerTwo){
    school.playerOne.score += 10;
    school.playerOne.health -= -10;
    school.playerTwo.score += 10
    school.playerTwo.health -= 10;
    console.log(playerOne);
    console.log(playerTwo);
  },
  levicorpus(playerOne, playerTwo){
    school.playerOne.score += 5;
    school.playerOne.health -= 2;
    school.playerTwo.score += 3;
    school.playerTwo.health -= 5;
    console.log(playerOne);
    console.log(playerTwo);
  },
  // -- heal spells
  reparo(playerOne, playerTwo){
    school.playerOne.score += 10;
    school.playerOne.health += 15;
    school.playerTwo.score += 0;
    school.playerTwo.health -= 0;
    console.log(playerOne);
    console.log(playerTwo);
  },
  rennervate(playerOne, playerTwo){
    school.playerOne.score += 25;
    school.playerOne.health += 25 ;
    school.playerTwo.score += 0;
    school.playerTwo.health -= 0;
    console.log(playerOne);
    console.log(playerTwo);
  }
}

module.exports = spells;

