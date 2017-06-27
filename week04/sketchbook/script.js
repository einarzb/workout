
window.onload = function () {

  // var swapMenuBtn = document.getElementById("admin");
  // swapMenuBtn.addEventListener("click", swapMenu);
  //
  // function swapMenu(){
  //   var adminMenu = document.getElementById('canvas');
  //   if(adminMenu.style.backgroundColor === "gray") {
  //       adminMenu.style.backgroundColor = "pink";
  //   } else {
  //     adminMenu.style.backgroundColor = "gray"
  //   }
  // }

  // *************************CREATE SHAPES PART ***********************************************
  var rectBtn = document.getElementById("rectMaker");
  rectBtn.addEventListener("click", createRect);

  var ovalBtn = document.getElementById("ovalMaker");
  ovalBtn.addEventListener("click", createOval);

  function createRect(){
    var shape = createRandomShape();
    shape.classList.add("rectShape");
    document.getElementById('canvas').appendChild(shape);
  }

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
    InitDragDrop(); //why the fuck would canvas move also

    // return shape;
     return shape;
  }

// *************************function SELECT / DESELECT item ***********************************************

var canvas = document.getElementById("canvas");
var selected = document.getElementsByClassName("selected");
canvas.addEventListener("click", change)

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

//*****************************   DRAG  ***************************************************
// MOUSE starting positions
var startX = 0;
var startY = 0;
// SELECTED element offset
var offsetX = 0;
var offsetY = 0;
// the dragged element that is being passed from startDrag to dragFunc
var dragElement;
// we temporarily increase the z-index during drag
var oldZIndex = 0;
// InitDragDrop();

function InitDragDrop(){
  //invoke functions of start and stop drag
  document.onmousedown = startDrag; //when pressing a mouse button over
  document.onmouseup = stopDrag; //when mouse button is released
}

//this happens on everything!! whyyyyy
function startDrag(e){
      // e.preventDefault();
      //the selected object containing left and top value of the div
      var target = e.target;
      /*if mouse button that was pressed is left or wheel
      and choosen element contains drag class ====>*/
      if (target.className != 'draggable'){
        //mouse position
        startX = e.clientX; //Get horizontal coordinate
        startY = e.clientY; //Get vertical coordinate
        console.log("mouse position is: x: " + startX, " y: " + startY);

        //clicked-element's position
        //offset is invoking function that pass as an argument the left & top coordinate
        offsetX = ExtractNumber(target.style.left);
        offsetY = ExtractNumber(target.style.top);
        console.log("element position is left: " + offsetX , " and top is: " + offsetY);

        // make clicked element on front while being dragged
        oldZIndex = target.style.zIndex;
        target.style.zIndex = 10000;

        /* reassign target DRAGGED element to a new object that would be
        passed to next function OnMouseMove */
        dragElement = target;

        // invoking moving function when mouse is moving
        document.onmousemove = dragFunc;
    }
}

function dragFunc(e) {
  //mouse coordinate + clicked element position  -  coordinate mouse position
    dragElement.style.left = (offsetX + e.clientX - startX) + 'px';
    dragElement.style.top = (offsetY + e.clientY - startY) + 'px';
  }

function stopDrag(e) {
    if (dragElement != null) {
        dragElement.style.zIndex = oldZIndex;

        // initialze back
        document.onmousemove = null;
        document.onselectstart = null;
        dragElement.ondragstart = null;
        dragElement = null;

    }
}

function ExtractNumber(value){
  //element position
    var n = parseInt(value); //parse int to round the number
    return n == null || isNaN(n) ? 0 : n;
}

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

// *************************DELETE SHAPES PART ***********************************************

    var deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", removeShape);

    function removeShape(){
      var canvas = document.getElementById("canvas");
      var deletedShape = document.getElementsByClassName('selected');

      for (var i = 0; i < deletedShape.length; i++) {
        canvas.removeChild(deletedShape[i]);
      }
    }

// *************************COLOR CHANGES PART ***********************************************
  var colorChangeBtn = document.getElementById("color");
  colorChangeBtn.addEventListener("click", colorChange);

//reveals color pallete - change to toggle method
function colorChange(){
    var pallete = document.getElementById('pallete');
    if (pallete.style.display === "block") {
        pallete.style.display = "none";
    } else {
      pallete.style.display = "block"
    }
  }

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



}//end main function
