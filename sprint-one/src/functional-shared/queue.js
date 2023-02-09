var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {}
  _.extend(storage, queueMethods)
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    let key = Object.keys(this)[Object.keys(this).length - 1] + 1;
    this[key] = value;
  },

  dequeue: function() {
    let item = this[Object.keys(this)[3]];
    delete this[Object.keys(this)[3]];
    return item;
  },

  size: function() {
    return Object.keys(this).length - 3;
  }
};


