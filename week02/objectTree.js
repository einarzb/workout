//everyone nested in functions - knows every other function in their closure
var BF = function(){

  var memory = []; //local for bf and global for function memortinit

  //initiaize memory with 1000 spaces of 0
  function memoryInit(memory){
    for (var i = 0; i < 1000; i++) {
      memory[i] = 0;
      return;
    }
  }

  //compile
  function compileBF (programStr) {
  var tempProg = []; //local var that holds the array
  return tempProg;
  }

  //run
   function runBF(compiledProg){
     memoryInit(memory);
  }
    //an object
    var funcs = {};
    funcs.compileBF = compileBF;
    funcs.runBF = runBF;
    return funcs;
  }

var myProg = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."

//the user compiled string
var myBF = BF(); //you call her and ger in returns gets an object
var myBin = myBF.compileBF(myProg); //compel
myBF.runBF(myBin);
