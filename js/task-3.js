"use strict";

class Storage {
  constructor(product) {
    this.products = product;
  }
}

const getItems = function () {
  return this.products;
};
Storage.prototype.getItems = getItems;

const addItem = function (item) {
  this.products.push(item);
};
Storage.prototype.addItem = addItem;

const removeItem = function (item) {
  let items = this.products.filter((items) => items !== item);
  this.products.splice(0);
  this.products.push(...items);
};
Storage.prototype.removeItem = removeItem;

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(items);

storage.removeItem("Пролонгер");
console.table(items);

class Storage1 {
  constructor(product) {
    this.products = product;
  }
}

const getItems1 = function () {
  return this.products;
};
Storage1.prototype.getItems1 = getItems1;

const addItem1 = function (item) {
  this.products.push(item);
};
Storage1.prototype.addItem1 = addItem1;

const removeItem1 = function (item) {
  this.products = this.products.filter((items) => items !== item);
};
Storage1.prototype.removeItem1 = removeItem1;

const storage1 = new Storage1([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
const items1 = storage1.getItems1();
console.table(storage1.getItems1());
storage1.addItem1("Дроид");
console.table(storage1.getItems1());
storage1.removeItem1("Пролонгер");
console.table(storage1.getItems1());
