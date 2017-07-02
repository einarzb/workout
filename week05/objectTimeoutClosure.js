function doTry(){

  var myDoAll = {
    doSomething: function(){
      console.log("do something");
      storage.save("hi there")
    }
  };

  var storage = {
    'save':function(name) {
      console.log(name);
    }
  };
  setTimeout(function(){
    myDoAll.doSomething();
  }, 1000);
  console.log("aaa");
}

console.log("b4");
doTry();
console.log("end");


/*
b4
aaa
end
do something
hi there
*/
