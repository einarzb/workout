window.onload = function () {
    var canvas = document.getElementById("canvas");
    var makerec = document.getElementById("rec");
    makerec.addEventListener("click", makeRec);

    var makeov = document.getElementById("ov");
    makeov.addEventListener("click", makeOval);

    canvas.addEventListener("click", change);


    var deleteitem = document.getElementById("delete");
    deleteitem.addEventListener("click", deleteItem);


}

function deleteItem() {
    var child = canvas.children;
    var len = child.length;
    for (var i = 0; i < len; ++i) {
        if ((child[i].classList.contains("shape")) && (child[i].classList.contains("selected"))) {
            canvas.removeChild(child[i]);
            --i;
        }
    }
}


function startDrag(event) {

    var diffX = event.clientX - this.offsetLeft;
    var diffY = event.clientY - this.offsetTop;
    var current = this;
    this.style.cursor = "move";

    this.addEventListener('mouseup', stopDrag);
    this.addEventListener('mousemove', moveAlong);

    function moveAlong(event) {
        var left = parseInt(event.clientX - diffX);
        var top = parseInt(event.clientY - diffY);

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

        current.style.left = left + 'px';
        current.style.top = top + 'px';
    }

    function stopDrag() {
        this.removeEventListener('mousemove', moveAlong);
        this.removeEventListener('mouseup', stopDrag);
        this.removeEventListener('mousedown', startDrag);
    this.style.cursor = "auto";
    }
}




function resize() {
    var me = event.target;
    me.parentNode.removeEventListener('mousedown', startDrag);
    me.addEventListener('mouseup', stopChange);
    me.addEventListener("mousemove", changeSize);

    function changeSize(movemouse) {
        var head = document.getElementById("head");


        if (this.classList.contains("BR")) {
            this.parentNode.style.height = movemouse.clientY - parseInt(this.parentNode.style.top) - parseInt(head.scrollHeight) + 'px';
            this.parentNode.style.width = movemouse.clientX - parseInt(this.parentNode.style.left) + 'px';

        } else if (this.classList.contains("BL")) {
            this.parentNode.style.height = movemouse.clientY - parseInt(this.parentNode.style.top) - parseInt(head.scrollHeight) + 'px';
            this.parentNode.style.width = parseInt(this.parentNode.style.width) + (parseInt(this.parentNode.style.left) - movemouse.clientX) + 'px';
            this.parentNode.style.left = movemouse.clientX + 'px';

        } else if (this.classList.contains("TR")) {
            this.parentNode.style.width = movemouse.clientX - parseInt(this.parentNode.style.left) + 'px';
            this.parentNode.style.height = parseInt(this.parentNode.style.height) - movemouse.clientY + parseInt(this.parentNode.style.top) + parseInt(head.scrollHeight) + 'px';
            this.parentNode.style.top = movemouse.clientY - parseInt(head.scrollHeight) + 'px';

        } else if (this.classList.contains("TL")) {
            this.parentNode.style.height = parseInt(this.parentNode.style.height) - movemouse.clientY + parseInt(this.parentNode.style.top) + parseInt(head.scrollHeight) + 'px';
            this.parentNode.style.top = movemouse.clientY - parseInt(head.scrollHeight) + 'px';

            this.parentNode.style.width = parseInt(this.parentNode.style.width) + (parseInt(this.parentNode.style.left) - movemouse.clientX) + 'px';
            this.parentNode.style.left = movemouse.clientX + 'px';
        }
    }


    function stopChange() {
        me.removeEventListener('mousemove', change);
        me.removeEventListener("mousemove", changeSize);
        me.removeEventListener('mouseup', stopChange);
        me.parentNode.classList.remove("selected");
        removeSelectors(me.parentNode);
        me.removeEventListener('mousedown', resize);
    }
}



function makeShape() {
    var makeNewShape = document.createElement("div");
    makeNewShape.style.backgroundColor = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
    makeNewShape.style.height = randomSize() + 'px';
    makeNewShape.style.width = randomSize() + 'px';
    makeNewShape.style.margin = '5px';

    makeNewShape.style.position = "absolute";
    var width = document.getElementById("canvas").offsetWidth;
    var height = document.getElementById("canvas").offsetHeight;
    makeNewShape.style.left = Math.floor((Math.random() * width) + 1) + 'px';
    makeNewShape.style.top = Math.floor((Math.random() * height) + 1) + 'px';

    return makeNewShape;
}

function addSelectors(shape) {
    var boxLT = document.createElement('div');
    var boxRT = document.createElement('div');
    var boxLB = document.createElement('div');
    var boxRB = document.createElement('div');
    shape.appendChild(boxLT).classList.add("TL");
    shape.appendChild(boxRT).classList.add("TR");
    shape.appendChild(boxLB).classList.add("BL");
    shape.appendChild(boxRB).classList.add("BR");
}

function removeSelectors(shape) {
    var child = shape.children;
    var len = child.length;
    for (var i = 0; i < len; ++i) {
        shape.removeChild(child[0]);
    }
}


function makeRec() {
    var rec = makeShape();
    canvas.appendChild(rec).classList.add("shape");
}

function makeOval() {
    var oval = makeShape();
    oval.style.borderRadius = '100%';
    canvas.appendChild(oval).classList.add("shape");
}

function randomColor() {
    var num = Math.floor((Math.random() * 255) + 1);
    return num;
}

function randomSize() {
    var num = Math.floor((Math.random() * 300) + 15);
    return num;
}


function change() {
    var me = event.target;
    if (me.classList.contains("shape")) {
        if (me.classList.contains("selected")) {
            me.style.zIndex = "initial";
            removeSelectors(me);
            me.classList.remove("selected");
        } else {
            me.style.zIndex = "1";
            addSelectors(me);
            me.classList.add("selected");
            document.getElementById("crimson").addEventListener("click", changeColor);
            document.getElementById("dodgerblue").addEventListener("click", changeColor);
            document.getElementById("gold").addEventListener("click", changeColor);
            document.getElementById("springgreen").addEventListener("click", changeColor);


            var draggable = document.getElementsByClassName("shape");
            var dragCount = draggable.length;

            if (dragCount > 0) {
                for (var i = 0; i < dragCount; ++i) {
                    draggable[i].addEventListener("mousedown", startDrag);
                }
            }

            me.children[0].addEventListener('mousedown', resize);
            me.children[1].addEventListener('mousedown', resize);
            me.children[2].addEventListener('mousedown', resize);
            me.children[3].addEventListener('mousedown', resize);

        }
    }
}


function changeColor() {
    var color = this.id;
    var DIV = canvas.getElementsByTagName("DIV");
    for (var i = 0; i < DIV.length; ++i) {
        if (DIV[i].classList.contains("selected")) {
            DIV[i].style.backgroundColor = color;
            DIV[i].classList.remove("selected");
            DIV[i].style.zIndex = "initial";
            removeSelectors(DIV[i]);
        }
    }
}
