//require node packages
var readlineSync = require('readline-sync');

//ui function
function ticTacToe(){
  //settings
  //console.log(player + " choose spot " + move);
  //var player = readlineSync.question('Please enter your name > ');
  // console.log("hello " + player + " you will play with X");

  var board = [[1,2,3],
               [4,5,6],
               [7,8,9]]; //2D array
  var turn = 0; //turn counter
  displayBoard(); //render func
  userTurn();//user would always start FIRST and would be assinged with X

  function userTurn() {
      while(turn < 9){
      var move = readlineSync.questionInt('choose spot on board >');
      for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board.length; j++) {
            if (move === board[i][j]) {
                board[i][j] = "x";
                computerTurn();
                turn++;
                break;
                }//end if
             }//end nested for loop
           }//end for loop
        }//end while
      } //end of userTurn function

  function computerTurn() {
      while(turn < 8) { // 8 b/c user starts first!
      var computerMove = (Math.floor(Math.random() * 9 + 1)); // 9 + 1 make this start from 0
      console.log("comp move is " + computerMove);
      for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board.length; j++) {
            if (computerMove === board[i][j]) {
                board[i][j] = "O";
                displayBoard();
                userTurn();
                turn++;
                break;
            }
        }
      }
    }
  } //end of  computerTurn function


   function displayBoard(){
     for (var i = 0; i < board.length; i++) {
          console.log(board[i]);
      }
    }


  return playTicTacToe(ticTacToe);

  function playTicTacToe(ticTacToe){
    console.log("im playing");
    function newGame(){
        return {
            newGame: newGame,
            play:play
          }
        }
      }
      //invoke
      var game = ticTacToe()
      game.newGame();
      game.play(5);
}



//all the algorithem
function newticTacToe(ticTacToe){

  var player; //string name
  var computer; //empty obj
  var playerScore = 0;
  var computerScore = 0;
}

//invoke the game
ticTacToe(newticTacToe());
