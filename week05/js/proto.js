/* __ ==> convention for private. don't touch - use function
1. every object has a prototype
2. __proto__ = functions prototype // getter
3. Constructor function has __proto__ and it points(refers) to the object 's prototype.
4.__proto__ is an explicit property of Function which refers to the prototype of it's objects.
If a prototype is not specified for an object explicitly, then the default value for __proto__: Object.prototype.
*/

var obj01 = {};
obj01.__proto__ // {}

var obj02 = {};
obj02.__proto__ // {}

obj01.__proto__.num = 17;

console.log(obj01.__proto__.num); //17
console.log(obj02.__proto__.num); //17
console.log(obj01.num); //17

//num is a shared property between objects

console.log(obj01 == obj02); //false
console.log(obj01.__proto__ == obj02.__proto__); //true


/************************************************* ANOTHER EXAMPLE prototype CHAIN *****************************************************************************
object a stores this common part of both b and c objects
This kind of inheritance is called a delegation based inheritance
b and c store just their own additional properties or methods.
** if a property or a method is not found in the object itself
(i.e. the object has no such an own property) ===> then there is an attempt to find this property/method in the prototype chain

 a found property is called inherited property.
 If the property is not found after the whole prototype chain lookup, then undefined value is returned.
************************************************************************************************************************************/



var a = {
  x: 10, //this.x
  //function that would be passed to objects B & C
  calculate: function (z) {
    return this.x + this.y + z;
  }
};

//this in an inherited method set to the original object >> but not to the prototype object where the method is found.
//this.y is taken from b and c, but not from a

var b = {
  y: 20,
  //have access to the calculate method which is defined in a objec
  __proto__: a
};

var c = {
  y: 30,
  //have access to the calculate method which is defined in a objec
  __proto__: a
};

/************************************************************************************************************************************
 alternative way via Object.create();
 ************************************************************************************************************************************/
//syntax: Object.create(parentObjectName, {{key:value});
var b = Object.create(a, {
  y: {value: 20}
});

var c = Object.create(a,
   {y: {value: 30}
 });


// call the inherited method
b.calculate(30); // 60
c.calculate(40); // 80
