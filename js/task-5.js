"use trict"
class Car {
	constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
		this._speed = speed;
		this._price = price;
		this._maxSpeed = maxSpeed;
		this._isOn = isOn;
		this._distance = distance;
	}
	static getSpecs(car) {
		const dateCar = {
			speed: car._speed,
			maxSpeed: car._maxSpeed,
			isOn: car._isOn,
			distance: car._distance,
			price: car._price
		};
		console.table(dateCar);
	}
	
	get price() {
		return this._price;
	}
	set price(value) {
		this._price = value;
	}


	turnOn() {
		if (!this._isOn) this._isOn = true; 
	}

	turnOff() {
		if (this._isOn) this._isOn = false;
	}

	accelerate(value) {
		if (value <= this._maxSpeed) this._speed += value; 
	}
	accelerate1(value) {
		if (value <= this._maxSpeed) {
			this._speed += value;
		} else {
			this._speed = this._maxSpeed; 
		}
	}
	
	decelerate(value) {
		if (this._speed - value > -1) this._speed -= value; 
	}

	
	drive(hours) {
		if (this._isOn) this._distance = hours *= this._speed; 
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);



mustang.decelerate(20);
mustang.drive(2);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price); 
mustang.price = 4000;
Car.getSpecs(mustang);
console.log(mustang.price); 