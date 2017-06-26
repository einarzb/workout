
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
    //insert event listener to the shape
    shape.addEventListener("click", handlerShow);
    //styling of shape
    shape.style.width = randomSize();
    shape.style.height = randomSize();
    shape.style.backgroundColor = randomColor();
    shape.style.left = randomLocationWidth();
    shape.style.top = randomLocationTop();
    // return shape;
     return createHandlers(shape);
  }


  // *************************CREATE SHAPE HANDLERS PART ***********************************************

//creates 4 handlers
    function createHandlers(shape){
      var handlers = [];
      for (var i = 0; i < 5; i++) {
           //create 4 handlers
            handlers = document.createElement("div");
            //style them each i(1-4) is different corner
            handlers.classList.add("handlers" + i);
            //append them to shape
            shape.appendChild(handlers);
          }
          return shape;
        }
//refactor with Andrey or Assaf
  //make squares appear only when div is pressed
        function handlerShow(){
          var showHandler = document.getElementsByClassName('selected')
          // var showHandler = document.querySelectorAll('.handlers1, .handlers2, .handlers3, .handlers4');
          for (var i = 0; i < showHandler.length; i++) {
            if (showHandler[i].style.display === "block") {
                showHandler[i].style.display = "none";
            } else {
                showHandler[i].style.display = "block"
            }
          }
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

  function colorChange(){
    var pallete = document.getElementById('pallete');
    if (pallete.style.display === "block") {
        pallete.style.display = "none";
    } else {
      pallete.style.display = "block"
    }
  }

  // function makePink(){
  //     alert("pink me");
  // }
  //
  // function makeBlack(){
  //     alert("black me");
  // }
  //
  // function makeRed(){
  //     alert("red me");
  // }
  //
  // function makeGreen(){
  //     alert("green me");
  // }
}
