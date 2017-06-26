
window.onload = function () {

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

  //random color and size
  function randomSize() {
    return (Math.round(Math.random()*200) + 50) + "px";
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

  function createRandomShape (){
    var shape = document.createElement("div");
    shape.style.width = randomSize();
    shape.style.height = randomSize();
    shape.style.backgroundColor = randomColor();
    shape.style.left = randomLocationWidth();
    shape.style.top = randomLocationTop();
    // return shape;
    return createHandlers(shape);
  }

  // *************************CREATE SHAPE HANDLERS PART ***********************************************
  //make squares appear only when div is pressed
  // var allShapes = document.getElementById("div");
  // allShapes.addEventListener("click", createHandlers);

    function createHandlers(shape){
      var handlers = [];
      for (var i = 0; i < 5; i++) {
        console.log(handlers);
           //create 4 handlers
            handlers = document.createElement("div");
            //style them
            handlers.classList.add("handlers" + i);
            //append them to shape
            shape.appendChild(handlers);
          }
          return shape;
        }

// *************************DELETE SHAPES PART ***********************************************

    var deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", removeShape);

    function removeShape(){
      console.log("remove me");
      var shape = createRandomShape();
      document.getElementById('canvas').removeChild(shape);
    }

// *************************COLOR CHANGES PART ***********************************************
  var colorChangeBtn = document.getElementById("color");
  colorChangeBtn.addEventListener("click", colorChange);
  // colorChangeBtn.addEventListener("click", colorChangeBack);

  var pinkBtn = document.getElementById("pink");
  pinkBtn.addEventListener("click", makePink);

  var blackBtn = document.getElementById("black");
  blackBtn.addEventListener("click", makeBlack);

  var redBtn = document.getElementById("red");
  redBtn.addEventListener("click", makeRed);

  var greenBtn = document.getElementById("green");
  greenBtn.addEventListener("click", makeGreen);

//CHANGE IT TO TOGGLE
  function colorChange(){
    document.getElementById('pallete').style.display = "block";
  }

  // function colorChangeBack(){
  //   document.getElementById('pallete').style.display = "none";
  // }

  function makePink(){
      alert("pink me");
  }

  function makeBlack(){
      alert("black me");
  }

  function makeRed(){
      alert("red me");
  }

  function makeGreen(){
      alert("green me");
  }
}
