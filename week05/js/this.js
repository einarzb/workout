/*
default binding:
this points to global object
*/

x=5; //global
function a(){
  console.log("a:x " + this.x);
}

a(); //call-site => a:x 5

/*******************************************************************/

x=5;

function a(){
  var x=9; //function ignores this x!
  console.log("a:x " + this.x); //this.x != x ==> 5 != 9 
}

a(); // call-site => a:x 5

/****************************hoisting********************************/

function a(){
  var x=9;
  console.log("a:x " + this.x);
}

a(); //5 because of hoisting
x = 5;

/*******************************************************************/


//this doesnt refer to the function's object or the object
function funcB(){
  console.log(this.prop2);
}

funcB.prop2 = "im prop2";

funcB;

funcB();//undefined

prop2 = "the real prop2";

// this doesnt refer to the functions' scope (inner func)
// this refers to the call-site

function funcC(){
  function funcC(a){
    var b = 2;
    var c = 3;
    console.log(this.a);
    console.log(this.b);
  }
}

funcC(8);
