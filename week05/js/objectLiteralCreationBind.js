
//object literal - has method that is binded to data
let dog = {
  sound: "woof", //property
  talk: function(){ //method
    console.log(this.sound);
  }
}
dog.talk(); //woof

/***********************************************************************************************************************
when reassigning method to var -->
it turns to be a function, NOT a method connected to an object!
it doesn't know dog's this anymore b/c this. is effected by call-site.
SOLUTION: binding
************************************************************************************************************************/

let talkFunction = dog.talk;
talkFunction(); //undefined cause he doesnt know this anymore

/***************
SOLUTION: binding -- syntax -- functionName.bind(obj)
****************/
let boundFunction = talkFunction.bind(dog); //forces this to be dog!
boundFunction(); //woof

/***************************************************another example***********************************************************************/

let button = document.getElementById("myBtn");
button.addEventListener("click",dog.talk); //this is going to be the window object
/**solution**/
button.addEventListener("click",dog.talk.bind(dog)); //this is going to be the dog!
