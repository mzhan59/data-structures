var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    let key = Object.keys(this).length + 1;
    this[key] = value;
  },

  pop: function() {
    //store last value in storage in a variable
    let item = this[Object.keys(this).length];
    //delete that value from storage
    delete this[Object.keys(this).length];
    //return our value stored in the variable
    return item;
  },

  size: function() {
    return Object.keys(this).length;
  }
};


