'use strict';

/*

Your tasks: 
1.	Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property) 
2.	Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo' 
3.	Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%' 
4.	Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉 
Test data: 
 Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% 


*/

/////////////

// Solution

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
  console.log(
    `This ${this.make} is currently going ${this.speed} with a battery charge of ${this.charge}`
  );

  EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`The battery has been charged to ${this.charge}%`);
  };

  EV.prototype.accelerateEV = function () {
    this.speed += 20;
    this.charge--;
    console.log(
      `The ${this.make} is now going ${this.speed}km/h, with a charge of ${this.charge}%`
    );
  };

  EV.prototype.completeStop = function () {
    this.speed = 0;
    this.charge--;
    console.log(
      `The ${this.make}'s speed has been reduced to ${this.speed}km/h and is now static. Please engage the parking break and switch off the engine prior to exiting the vehicle. Thank you and have a nice day :)`
    );
  };
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 110, 34);
console.log(tesla);
tesla.accelerateEV();
tesla.accelerateEV();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerateEV();
tesla.completeStop();
