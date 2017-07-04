/********************************************* FLAGS & defineProperty ********************************************************/
/*
1. writable – if true, can be changed, otherwise it’s read-only.
2. enumerable – if true, then listed in loops, otherwise not listed. (IN CONSOLE LOG THE OBJECT)
3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

When we create a property like that: obj.name = "x" =>
 all of them are TRUE.
But we also can change them any time.
*/

var obj = {
  name: "orev"
}




//we cn change flags with defineProperty ==>

Object.defineProperty(obj, "name", {  //(obj, propertyName, descriptor) == The object and property to work on.
  //Property descriptor to apply.
  // if a flag is not supplied, it is assumed false.
  value: "orev"
});

Object.defineProperty(obj, 'x', {
  enumerable:false //make 'x' not appear and it's writeable
});

obj; //won't display x

//it's unrewriteable
obj.name; //orev
obj.name = "orvanit";
obj.name;//orev

obj; //won't display the new property we've made

//writable properties
Object.defineProperty(obj, "lname", {
  //descriptor
  //by default writeable is false and confugurablity is false
  value: "w3",
  writable:true
});

obj.lname; //w3
obj.lname = "bar"; //bar
obj.lname;//bar







//EX.03 - property name MODIFIED with all TRUTHY flags:

let user2 = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user2, 'name'); //(obj, propertyName)

console.log(JSON.stringify(descriptor,null,2));
/*
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

//EX.04 - property name CREATED with all falsy flags:

let myUser = {};

Object.defineProperty(myUser, "name", {
  //descriptor
  value: "Einar"
});

let descriptor2 = Object.getOwnPropertyDescriptor(myUser, 'name');

console.log( JSON.stringify(descriptor2, null, 2 ) );
/*
{
  "value": "Einar",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
