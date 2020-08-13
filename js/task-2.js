"use strict";

const User = function({ name = 'пусто', age = 'пусто', followers = 'пусто' }) {
	this.name = name;
	this.age = age;
	this.followers = followers;
};

const Info = function() {
	console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
};

User.prototype.getInfo = Info;

const mango = new User({
	name: 'Mango',
	age: 2,
	followers: 20
});

mango.getInfo();

const poly = new User({
	name: 'Poly',
	age: 3,
	followers: 17
});

poly.getInfo();