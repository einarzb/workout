/*
 Object.create() method:
  creates new object with the specified prototype object and properties.
*/

//Classical inheritance with Object.create()

//superclass
function Shape (){
  this.x = 0;
  this.y = 0;
}

//superclass method
Shape.prototype.move = function(x,y){
  this.x += x;
  this.y += y;
  console.log("shaped move");
}
