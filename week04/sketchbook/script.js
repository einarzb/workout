
window.onload = function () {

// *************************SWAP MENU TABS ***********************************************
  //
  // var swapMenuBtn = document.getElementById("admin");
  // swapMenuBtn.addEventListener("click", swapMenu);
  //
  // function swapMenu(){
  //   var adminMenu = document.getElementById('canvas');
  //       if(adminMenu.style.backgroundColor === "gray") {
  //          adminMenu.style.backgroundColor = "pink";
  //       } else {
  //         adminMenu.style.backgroundColor = "gray"
  //       }
  // }
  //
  // var swapMenuBtn = document.getElementById("design");
  // swapMenuBtn.addEventListener("click", swapMenu);

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
     return createCorners(shape);
  }


  // *************************CREATE SHAPE HANDLERS PART ***********************************************

  function createCorners(shape){
    //create 4 divs
          cornerUpLeft = document.createElement("div");
          cornerUpRight = document.createElement("div");
          cornerBtmLeft =  document.createElement("div");
          cornerBtmRight =  document.createElement("div");
   //style
          cornerUpLeft.className = "corners cornerUpLeft";
          cornerUpRight.className = "corners cornerUpRight";
          cornerBtmLeft.className = "corners cornerBtmLeft";
          cornerBtmRight.className = "corners cornerBtmRight";
    //append it to shape
          shape.appendChild(cornerUpLeft);
          shape.appendChild(cornerUpRight);
          shape.appendChild(cornerBtmLeft);
          shape.appendChild(cornerBtmRight);

      //hide corners
        function removeCorners(shape){
          var corners = document.getElementsByClassName("corners");
          var len = corners.length;
          while (len>0){
              corners[0].classList.remove("corners");
              --len;
          }
        }
        //show corners
        shape.addEventListener("click", function(event){
            var corners = this.children;
            removeCorners(shape);
            for (var i=0; i<corners.length;++i){
                corners[i].classList.toggle("corners");
            }
          }
        );

      return shape;}

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
