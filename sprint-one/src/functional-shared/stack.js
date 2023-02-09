var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = {}
  _.extend(storage, stackMethods)
  return storage;
};

var stackMethods = {
  push: function(value) {
    let key = Object.keys(this).length + 1;
    this[key] = value;
  },

  pop: function() {

    let item = this[Object.keys(this).length];
    delete this[Object.keys(this).length];
    return item;

  },

  size: function() {
    return Object.keys(this).length - 3;
  }

};


