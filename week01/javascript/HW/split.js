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
function strSplit (str, splitChar) {
    //initial
    var tempChar;
    var arr = []; //empty array that will store the splitted string

    // var userInput = readlineSync.question('Please enter a text to split > ');
    // var splitChar = readlineSync.question('Please enter a char to split by > ');
    console.log(str);

    //rockenroll
    for (var i = 0; i < str.length; ++i) {
          //if you find the dividor char push the char to the array
          if(str[i] == splitChar) {
            console.log(str[i]);
              str[i] = " " //swap other chars with " "
              console.log(str[i]);

              // arr += str[i];
          } else {
            tempChar = str[i];

          }
        }
        return arr;
        console.log(arr);
  }

var arr = strSplit("abbcbcbbcbcbccbbddd", 'c');
//["abb","b","bb","b","b" ,"","bbddd"]
