class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  enqueue(value) {
    let key = Object.keys(this)[Object.keys(this).length - 1] + 1;
    this[key] = value;

  }

  dequeue() {
    let item = this[Object.keys(this)[0]];
    delete this[Object.keys(this)[0]];
    return item;
  }

  size() {
    return Object.keys(this).length;
  }

}
