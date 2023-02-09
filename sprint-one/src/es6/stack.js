class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }


  push(value) {
    let key = Object.keys(this).length + 1;
    this[key] = value;

  }

  pop() {
    let item = this[Object.keys(this).length];
    delete this[Object.keys(this).length];
    return item;
  }

  size() {
    return Object.keys(this).length;
  }


}