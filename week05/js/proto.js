/* __ ==> convention for private. don't touch - use function
1. every object has a prototype
2. __proto__ = functions prototype // getter
3. Constructor function has __proto__ and it points(refers) to the object 's prototype.
4.__proto__ is an explicit property of Function which refers to the prototype of it's objects.
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
