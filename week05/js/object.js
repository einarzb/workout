/*********************************************GENERAL********************************************************/

/*
- An object is a collection of properties (key:value).
- Object has a single prototype object.
- The prototype can be either:
    1. an object ==> __proto__
    2. null value.
*/

/********************************************* NOTATION ********************************************************/
//dot & bracket notation
var obj = {};
obj.x = "dot notation";
obj["xy z"] = "bracket notation";
obj["xy" + " z"]; //xyz

/********************************************* PROTO ********************************************************/
/*EX.01
an object with 2 explicit properties and 1 hidden implicit __proto__
*/

var myObject = {
  x:10,
  y:20
  //__proto__ ==> reference to the prototype of this object
}

/********************************************* DELETE ********************************************************/

//deletes items from object//
delete obj.x;
delete obj["xy z"];
var arr = [0,3,4];

/********************************************* ARRAY FUNCTION ********************************************************/

//checks if something is an array
Array.isArray(obj);//FALSE
Array.isArray(arr); //TRUE
