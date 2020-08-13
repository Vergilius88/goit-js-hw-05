"use strict";
const Account = function ({ login = null, email = null }) {
  this.login = login;
  this.email = email;
};

const Info = function () {
  console.log(this.login, this.email);
};

Account.prototype.getInfo = Info;
console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();
console.log("Всё что есть в манго --", mango);

const poly = new Account({
  email: "poly@mail.com",
  login: "Poly",
});

poly.getInfo();
console.log("Всё что есть в поли --", poly);

const Account1 = function (login = null, email = null) {
  this.login = login;
  this.email = email;
};

const Info1 = function () {
  console.log(this.login, this.email);
};

Account1.prototype.getInfo1 = Info1;
console.log(Account1.prototype.getInfo1);

const mango1 = new Account1("mango@dog.woof", "Mangozedog");

mango1.getInfo1();
console.log("Всё что есть в манго --", mango1);
