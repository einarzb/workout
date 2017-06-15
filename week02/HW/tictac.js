//require node packages
var readlineSync = require('readline-sync');

//ui function
function ticTacToe(){
  //settings
  var player = readlineSync.question('Please enter your name > ');
  console.log("hello " + player + " you will play with X");

  //2D array
  var board = [[1,2,3],
               [4,5,6],
               [7,8,9]];

  var turn = 0; //turn counter
  displayBoard();
  userTurn();//user would always start FIRST and would be assinged with X

/*************************************** user turn function ******************************************************/

  function userTurn() {
      while(turn < 9){
      var move = readlineSync.questionInt(player + ", please choose spot on the board >> " );
                setXo(move,'X',0)
                }//end if
             }//end nested for loop

/*************************************** computer turn function ******************************************************/

  function computerTurn() {
      while(turn < 9) { // 8 b/c user starts first!
                //var computerMove =(Math.floor(Math.random() * (9 + 1))); // 9 + 1 make this start from 0
                //console.log("\n computer made a move on cell number: " + computerMove);
                //setXo(computerMove,'O',1);
        //      }
var options=[];
var k=0;
  for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board.length; j++) {
        if(!isNaN(board[i][j]))
        {
          options[k]=board[i][j];
        }
  }
  }
  var computerMove = options[(Math.floor(Math.random() * (k-1 + 1)))];
  console.log("\n computer made a move on cell number: " + computerMove);

setXo(computerMove,'O',1);
    }
}

/*************************************** display board function ******************************************************/

   function displayBoard(){
     console.log("-------------------------");
     for (var i = 0; i < 3  ; i++) {
          console.log(board[i]);
      }
      console.log("-------------------------");
    }

/*************************************** display board function ******************************************************/
 function setXo(move,xOrY,checkPlayer){
     for (var i = 0; i < board.length; i++) {
         for (var j = 0; j < board.length; j++) {

           if (move === board[i][j]) {
               board[i][j] = xOrY;
               turn++;
               displayBoard();
               if(checkPlayer){
                  userTurn();
              }
                else {
                  computerTurn();
                }

               //checkWin() if turn is 5
           }
       }
     }
 }
   return 0; //not sure about it , me 2
}




/*************************************** logic function ******************************************************/

function playTicTacToe(ticTacToe){
    console.log("im playing")
    function newGame(){
        return {
            newGame: newGame,
            play:play
          }

      }
      //invoke
      var game = ticTacToe()
      game.newGame();
      game.play(5);

  }



//would reset the function
// function resetTicTacToe(ticTacToe){
//   var board = [[1,2,3],
//                [4,5,6],
//                [7,8,9]];
// console.log(board);/
//}
 // displayBoard();


//invoke the game
ticTacToe();
