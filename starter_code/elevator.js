class Elevator {
  constructor() {
    this.floor = 10;
    this.MAXFLOOR = 10;
    this.requests = [0];
    this.direction = "";
  }

  start() {
    setInterval(function() {
      this.update();
    }, 1000);
  }

  stop() {
    setTimeout(function() {
      this.start();
    }, 1000);
  }

  update() {
    return this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}

  floorUp() {
    this.floor === this.MAXFLOOR ? (this.floor = this.MAXFLOOR) : this.floor++;
  }

  floorDown() {
    this.floor === 0 ? (this.floor = 0) : this.floor--;
  }

  call() {
    this.requests.push(...Person);
  }

  log() {
    if (this.floor < this.requests[0]) {
      this.direction = "up";
    } else if (this.floor > this.requests[0]) {
      this.direction = "down";
    }
    console.log(`Direction: ${this.direction} Floor: ${this.floor}`);
  }
}
module.exports = Elevator;
