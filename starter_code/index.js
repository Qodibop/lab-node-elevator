const Elevator = require("./elevator.js");
const Person = require("./person.js");
var ele = new Elevator();

var testElevator = function() {
  for (var i = 0; i < ele.MAXFLOOR; i++) {
    ele.floorDown();
    ele.log();
  }
};

testElevator();
