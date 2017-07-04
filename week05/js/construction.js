var keepthis;

function Plane(planeModel) {
  this.model = planeModel;
  keepthis = this;
  return {};
}
//create new object and gives it this properties
var bowing = new Plane("bowing");
bowing.Plane();

///// another try
function Car(carModel){
  this.model = carModel;
  this.PrintCar = function(){
    console.log("Car " + this.model);
  }
}

var audi = new Car("Audi");
var volks = new Car("Volksvagen");

audi.PrintCar();
volks.PrintCar();

console.log(audi.PrintCar == volks.PrintCar); //false
