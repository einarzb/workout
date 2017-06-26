
window.onload = function () {

  var rectBtn = document.getElementById("rectMaker");
  rectBtn.addEventListener("click", createRect);

  var ovalBtn = document.getElementById("ovalMaker");
  ovalBtn.addEventListener("click", createOval);

  var deleteBtn = document.getElementById("delete");
  deleteBtn.addEventListener("click", removeShape);

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

  function removeShape(){
    console.log("remove me");
    var shape = createRandomShape();
    document.getElementById('canvas').removeChild(shape);
  }

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
    console.log("screen width " + window.innerWidth); //1013-250
    console.log("screen height " + window.innerHeight);//786

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
    return shape;
  }

}
