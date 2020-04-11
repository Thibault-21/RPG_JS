let school = require('./manageSchool')
let readline = require('readline-sync')

/**
 * A page to test 
 * 
 */

    // ----------------------------------------------
    function getADuel(){
      let match = "";
        let myPlayer = school.getMyPlayer();
        let theOponent = school.getTheOponent();
        if(myPlayer !== theOponent){
          console.log("My player is: " + myPlayer)
          console.log("Your Oponent will be : " + theOponent);
          console.log("*************")
          match += myPlayer + " VS " + theOponent;
         return match;
        }else {
          school.getTheOponent();
        } 
   }
   console.log(getADuel().myPlayer)

