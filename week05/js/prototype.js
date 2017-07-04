/*******************************************************************************************************
in js we achieve inheritance using protoypes not classes
class != protoype

class = blueprint
protoype = president
/******************************************************************************************************/

function talk(sound){
  console.log(this);
  console.log(this.sound);
}

let animal = {
  talk:talk
}
//when we assigned a property on an object -
//the left part is going to be the THIS of the right side.

//this.functionName();
animal.talk(); //this is the talk:[function: talk]
