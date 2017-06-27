
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
    // return shape;
     return shape;
  }

// *************************function SELECT / DESELECT item ***********************************************

var canvas = document.getElementById("canvas");
var selected = document.getElementsByClassName("selected");

canvas.addEventListener("click", change)

function change() {

  //A reference to the object that dispatched the event
  var choosen = event.target;

  //Find out if shapes classes is a descendant of a choosen element:
  if(choosen.classList.contains("ovalShape") || choosen.classList.contains("rectShape")) {

    //if item was already selected
      if(choosen.classList.contains("selected")){
          choosen.style.zIndex = "initial";
          removeHandlers(choosen);
          choosen.classList.remove("selected");
      }else{
    //if item was not selected before
          choosen.style.zIndex = "1";
          showHandlers(choosen)
          //delete
          //color
          choosen.classList.add("selected");
      }
   }
};

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
}

var pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click", makePink);

function makePink(){
  var colored = document.getElementsByClassName('selected');
  for (var i = 0; i < colored.length; i++) {
    colored[i].style.backgroundColor = "pink";
  }
}
