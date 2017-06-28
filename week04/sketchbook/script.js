
window.onload = function () {

// ***************************** initialze ***********************************************

  var canvas = document.getElementById("canvas");
  var pallete = document.getElementById('pallete');
  var selected = document.getElementsByClassName("selected");

// ***************************** ALL-BUTTONS EVENT LISTENING **********************************

  var rectBtn = document.getElementById("rectMaker");
  rectBtn.addEventListener("click", createRect);

  var ovalBtn = document.getElementById("ovalMaker");
  ovalBtn.addEventListener("click", createOval);

 var deleteBtn = document.getElementById("delete");
 deleteBtn.addEventListener("click", removeShape);

  //delete VIA keyboard
  window.onkeypress = function(event) {
       if (event.keyCode == 127) {
          removeShape();
       }
    }

  var colorChangeBtn = document.getElementById("color");
  colorChangeBtn.addEventListener("mouseover", colorChange);

  canvas.addEventListener("click", change)
}

//********************************** end main ONLOAD function **********************************

function createRect(){
    var shape = createRandomShape();
    shape.classList.add("rectShape");
    document.getElementById('canvas').appendChild(shape);
  };

function createOval(){
  var shape = createRandomShape();
  shape.classList.add("ovalShape");
  document.getElementById('canvas').appendChild(shape);
}

//random color size and position
function randomSize() {
  return (Math.round(Math.random()*100) + 50) + "px";
}

function randomColor() {
    return '#'+ Math.round(0xffffff * Math.random()).toString(16);
}

function randomLocationWidth(){
  return ((Math.random() * (window.innerWidth)/2 + "px"));
}

function randomLocationTop(){
  return ((Math.random() * (window.innerHeight)/2 + "px"));
}

function createRandomShape () {
  //create new shape
  var shape = document.createElement("div");
  //styling of shape
  shape.style.width = randomSize();
  shape.style.height = randomSize();
  shape.style.backgroundColor = randomColor();
  shape.style.left = randomLocationWidth();
  shape.style.top = randomLocationTop();
   return shape;
}

// *************************function SELECT / DESELECT item ***********************************

function change(e) {
  //A reference to the object that dispatched the event
  var choosen = event.target;

  //Find out if shapes classes is a descendant of a choosen element:
  if(choosen.classList.contains("ovalShape") || choosen.classList.contains("rectShape")) {

    //if item was already selected
      if(choosen.classList.contains("selected")){
          choosen.style.zIndex = "initial";
          removeHandlers(choosen);
          choosen.classList.remove("selected");
          choosen.classList.remove("draggable");
      }else{
    //if item was not selected before
          choosen.style.zIndex = "1";
          choosen.classList.add("selected");
          choosen.classList.add("draggable");
          showHandlers(choosen);
      }
   }
};

// ****************************** DELETE SHAPES ***********************************************
      function removeShape(){
        var deletedShape = document.getElementsByClassName('selected');

        for (var i = 0; i < deletedShape.length; i++) {
          canvas.removeChild(deletedShape[i]);
        }
      }

//*****************************   DRAG  ***************************************************


  // *************************CREATE SHAPE HANDLERS PART ***********************************************

  function removeHandlers() {
  }

  function showHandlers(choosen) {
    var handlers = [];
    for (var i = 0; i < 5; i++) {
         //create 4 handlers
          handlers = document.createElement("div");
          //style them each i(1-4) is different corner
          handlers.classList.add("handlers" + i);
          //append them to shape
          choosen.appendChild(handlers);
        }
        return choosen;
  }


// *************************COLOR CHANGES PART ***********************************************

//reveals color pallete - change to toggle method
function colorChange(){
    if (pallete.style.display === "block") {
        pallete.style.display = "none";
    } else {
      pallete.style.display = "block"
    }

  // When the user clicks anywhere outside of the modal, close pallete
  // window.onclick = function(event) {
  //     if (event.target == pallete) {
  //         pallete.style.display = "none";
  //     }
  // }


var pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click", makePink);

function makePink(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "pink";
  }
}

var blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", makeBlack);

function makeBlack(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "black";
  }
}

var redBtn = document.getElementById("red");
redBtn.addEventListener("click", makeRed);

function makeRed(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "red";
  }
}

var greenBtn = document.getElementById("green");
greenBtn.addEventListener("click", makeGreen);

function makeGreen(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "green";
  }
}

var purpleBtn = document.getElementById("purple");
purpleBtn.addEventListener("click", makePurple);

function makePurple(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "purple";
  }
}

var whiteBtn = document.getElementById("white");
whiteBtn.addEventListener("click", makeWhite);

function makeWhite(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "white";
  }
}
}
