class Person {
  constructor(name, originFloor, destinationFloor) {
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

module.exports = Person;

var Arthur = new Person("Arthur", 2, 0);
var Qodibop = new Person("Qodibop", 0, 9);
