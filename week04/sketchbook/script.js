
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

  canvas.addEventListener("click", select)
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

//make this function return an object
function createRandomShape () {
  var shape = document.createElement("div");
  shape.style.width = randomSize();
  shape.style.height = randomSize();
  shape.style.backgroundColor = randomColor();
  shape.style.left = randomLocationWidth();
  shape.style.top = randomLocationTop();
   return shape;
}

// *************************function SELECT / DESELECT item ***********************************

function select(e) {
  var choosen = e.target;
  var corners = choosen.children;

  //Find out if shapes classes is a descendant of a choosen element:
  if(choosen.classList.contains("ovalShape") || choosen.classList.contains("rectShape")) {

    //if item was already selected
      if(choosen.classList.contains("selected")){
          choosen.style.zIndex = "initial";
          choosen.classList.remove("selected");
          choosen.classList.remove("draggable");
          choosen.style.cursor = "auto";
          removeHandlers(choosen);
      }else{
    //if item was not selected before
          choosen.style.zIndex = "1";
          choosen.classList.add("selected");
          choosen.classList.add("draggable");
          choosen.style.cursor = "move";
          showHandlers(choosen);
      }
   }

   var draggable = document.getElementsByClassName("draggable");
   var dragCount = draggable.length;

//the thing that initiates the dragging func - CHANGE IT
   if (dragCount > 0) {
       for (var i = 0; i < dragCount; ++i) {
           draggable[i].addEventListener("mousedown", initDrag);
       }
   }
}


// ****************************** DELETE SHAPES ***********************************************
      function removeShape(){
        var child = canvas.children;

        for (var i = 0; i < child.length; i++) {
          if ((child[i].classList.contains("selected"))) {
          canvas.removeChild(child[i]);
          i--;
        }
      }
    }

//*****************************   DRAG AROUND ***************************************************

function initDrag(e) {
    //initial
    var draggedItem = this;
    //calc position (mouse - object)
    var moveX = e.clientX - draggedItem.offsetLeft;
    var moveY = e.clientY - draggedItem.offsetTop;

    draggedItem.addEventListener('mouseup', stopDrag);
    draggedItem.addEventListener('mousemove', dragging);

    function dragging(e) {
        var left = parseInt(e.clientX - moveX);
        var top = parseInt(e.clientY - moveY);

        if (top < 0) {
            top = 0;
        }
        if (left < 0) {
            left = 0;
        }
        if (top > window.innerHeight - 1) {
            top = window.innerHeight - 1;
        }
        if (left > window.innerWidth - 1) {
            left = window.innerWidth - 1;
        }

        draggedItem.style.left = left + 'px';
        draggedItem.style.top = top + 'px';
    }

    function stopDrag() {
        draggedItem.removeEventListener('mousemove', dragging);
        draggedItem.removeEventListener('mouseup', stopDrag);
        draggedItem.removeEventListener('mousedown', initDrag);
    }
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
          //invoke resizing
          handlers.addEventListener('mousedown', resizeShape);
          //append them to shape
          choosen.appendChild(handlers);
        }
        return choosen;
  }

  // *********************************RESIZE ******* ***********************************************

  function resizeShape(){
    var resizedItem = this;
    //stop item to move when resizing
    resizedItem.parentNode.removeEventListener('mousedown', initDrag);
    resizedItem.addEventListener('click',resizeOn)

//change to switch case
    function resizeOn(e) {
      var header = document.getElementsByClassName("header");

        if (this.classList.contains("handlers1")) {
          console.log("im left corner");
            this.parentNode.style.height = e.clientY - parseInt(this.parentNode.style.top) - parseInt(header.scrollHeight) + 'px';
            this.parentNode.style.width = e.clientX - parseInt(this.parentNode.style.left) + 'px';

        } else if (this.classList.contains("handlers2")) {
            this.parentNode.style.height = e.clientY - parseInt(this.parentNode.style.top) - parseInt(header.scrollHeight) + 'px';
            this.parentNode.style.width = parseInt(this.parentNode.style.width) + (parseInt(this.parentNode.style.left) - e.clientX) + 'px';
            this.parentNode.style.left = e.clientX + 'px';

        } else if (this.classList.contains("handlers3")) {
            this.parentNode.style.width = e.clientX - parseInt(this.parentNode.style.left) + 'px';
            this.parentNode.style.height = parseInt(this.parentNode.style.height) - e.clientY + parseInt(this.parentNode.style.top) + parseInt(header.scrollHeight) + 'px';
            this.parentNode.style.top = e.clientY - parseInt(header.scrollHeight) + 'px';

        } else if (this.classList.contains("handlers4")) {
            this.parentNode.style.height = parseInt(this.parentNode.style.height) - e.clientY + parseInt(this.parentNode.style.top) + parseInt(header.scrollHeight) + 'px';
            this.parentNode.style.top = e.clientY - parseInt(header.scrollHeight) + 'px';

            this.parentNode.style.width = parseInt(this.parentNode.style.width) + (parseInt(this.parentNode.style.left) - e.clientX) + 'px';
            this.parentNode.style.left = e.clientX + 'px';
        }
    }
}



  // *************************SAVE TO LOCALHOST ***********************************************
function saveDraw(){
  var savedDraw = document.getElementById("canvas");
  localStorage["myDraw"] = JSON.stringify(draw.innerHTML);
}

function loadDraw(){
  var loadedDraw = document.getElementById("canvas");
  loadDraw.innerHTML = JSON.parse(localStorage["myDraw"]);
  for (var i = 0; i < loadDraw.children.length; i++) {
      loadDraw.children[i].addEventListener("click", chosen);
  }
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
