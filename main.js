let readline = require('readline-sync')
let school = require('./manageSchool')

let actions = -1; 
while(actions !== 0){
  school.displayMenu()
  actions = readline.questionInt("what do you want to do? ")
  switch(actions){
    case 0: console.log("Farewell!");
    break;

    case 1: 
      school.displayTopPlayers();
    break;

    case 2: 
      school.displayTheScoolInfos()
    break;

    case 3: 
      school.menuMatch()
    break;

    case 4: console.log("Add Student");
      let name = readline.question("what is the name? ")
      let score = readline.question("what is the score? ")
      let animal = readline.question("what is the animal? ")
      let house = readline.question("what is the house? ")
      let description = readline.question("what is the description? ")
      let armes = [
        firstArme = readline.question("what is the first arme?(Wand | broom | parselTongue |Portkey) "),
        firstStrenght = readline.questionInt("what is the score' strenght of this arm? "),
        secondArmes = readline.question("what is the second arme?(Wand | broom | parselTongue |Portkey) "),
        secondStrenght = readline.questionInt("what is the score' strenght of this arm?  "),
      ]
      school.AddStudent(name,score,animal,house,description,armes)
    break;

    case 5: console.log("Delete Student");
    let removeStudent = readline.question("Which student do you want to remove? ")
      school.deleteStudent(removeStudent)
    break;

    case 6: console.log("Display the last winner");
      school.displayTheLastWinner()
    break;

    case 7: console.log("Display the last winner");
      school.displayTheHousesRanking()
    break;

    default: console.log("Not found");
  }
}

