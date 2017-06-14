var re = /(ab)+/g;
var re1 = /abcd/g;
var re2 = /<[A-Za-z][A-Za-z0-9]*> /

/*
dicitonary:
? =>  attempt to match the preceding token zero times or once (optional).



*/
var str2 = "ab______________abab_______ab___";

var test = re1.exec(str2);
console.log("test" + test);


var re1 =/(a[0-9]?b)(cd)\1/g;
// \1 at least one more time the experssion that's inside (a[0-9]?b) => a5bcda5b
var re2 =/(a[0-9]?b)(cd)\1\1/g; //2 times the first experssion =>a5bcda5ba5b
//mis match!! a5bcda6b

//ab | abb | a and more than one b (the closest to +)
var re3 = /(ab?)(cd)/g;// a | b |ab the most!
var re4 = /(ab)(cd)\2\2/; // a | b |ab the most!

var str = "----------a7bcda8b----a6bcda6b____abcdab____a1bdda1b";

do{
  var test1 = re2.exec(str);
  var test2 = re3.exec(str); //
  var test4 = re1.exec(str);
} while(test2 != null && test1 != null)

console.log(test2); //null
console.log(test4); //["a6bcda6b", "a6b", "cd"]
console.log(test1);//["abcd", "ab", "cd"]
