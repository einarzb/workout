function action1(data){
      console.log(data);
};

function action2(data){
      if(data != "2222") {
        throw "Error in 2"; //the text would be CATCH argument
      } else {
        console.log(data);
      } //if error it wont get here and won't continue to third action
      console.log("end of action 2");
};

function action3(data){
      console.log(data);
};

(function doMe(){
  try {
        action1("1111");
        action2("222");
        action3("3333");
      }

  catch(error){
    console.log('error '+ error);
  }

  console.log("code would run here even if theres an error on the try/catch block");
})();

/* (FUNCTION(){CODE CODE CODE})();
 iife (SELF INVOKED FUNCTION)
*/
