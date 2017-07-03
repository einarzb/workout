/*get
binds an object property to a function that will be called when that property is looked up.

*/

var o = {
  x:5,
  get twox () {
  return (2*this.x);
  }
}

Object.defineProperty(o, 'plus5', {
  get: function(){
    return (this.x + 5)},
    enumerable:true //makes this property shown in the obj properties
});

console.log(o); //{ x: 5, twox: [Getter], plus5: [Getter] }
console.log(o.plus5);
console.log(o.x);
console.log(o.twox); //its not a function it is a GETTER
console.log(typeof o.twox); //number (not a function)

////////////////////////////////////another example of get//////////////////////////////////////////////////

function funcA(){
  console.log("im A");
}

funcA();

Object.defineProperty(funcA, "stam", {
  get:function(){
    return "stam value";
  }
});

funcA.stam; //stam value
console.log(funcA.stam);
