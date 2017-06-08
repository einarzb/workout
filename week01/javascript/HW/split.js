/***********************************************
3) Write a strSplit function.
-The function will split a string
-using a single character split pattern.
-Split function will return an array.

    function strSplit(str, splitChar)
Example:

var arr = strSplit("abbcbcbbcbcbccbbddd", 'c');
 //["abb","b","bb","b","b" ,"","bbddd"]
**********************************************/

//require node packages
var readlineSync = require('readline-sync');

//convert user's input (string) onto an array
function strSplit () {
    //initial
    var arr = []; //empty array that will store the splitted string
    var userInput = readlineSync.question('Please enter a text to split > ');
    var splitChar = readlineSync.question('Please enter a char to split by > ');

    //rockenroll
    for (var i = 0; i < userInput.length; ++i) {
          //if you reach
          if(userInput[i] == splitChar) {
            arr += userInput[i];
          } else {
            userInput[i] = " "
          }
        }
        console.log(arr);
  }

strSplit();
