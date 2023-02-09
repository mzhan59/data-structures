var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let key = Object.keys(storage)[Object.keys(storage).length - 1] + 1;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    let item = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];

    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
