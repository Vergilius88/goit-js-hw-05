"use strict";

class StringBuilder {
  constructor(value) {
    this.value = [value];
  }

  returnValue() {
    return this.value;
  }

  appEnd(str) {
    this.value.push(str);
  }
  prepEnd(str) {
    this.value.unshift(str);
  }
  pad(str) {
    this.appEnd(str);
    this.prepEnd(str);
  }
}

const builder = new StringBuilder(".");

const items = builder.returnValue();

builder.appEnd("^");
console.log(items.join(""));

builder.prepEnd("^");
console.log(items.join(""));

builder.pad("=");
console.log(items.join(""));
