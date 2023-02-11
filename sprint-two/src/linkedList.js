var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  let storage = {};
  let counter = 0;

  list.addToTail = function(value) {
    let newNode = Node();
    list.tail = newNode;
    newNode.value = value;

    storage[counter] = newNode;
    counter++;

    if (list.head === null) {
      list.head = newNode;
    }
    storage[counter - 1].next = list.tail;
;
  };

  list.removeHead = function() {
    let currentHead = storage[0].value;
    delete storage[0];
    counter--;
    for (let i = 0; i < counter; i++) {
      storage[i] = storage[i + 1];
    }

    list.head = storage[0];
    return currentHead;
  };

  list.contains = function(target) {
    for (let key in storage) {
      if (storage[key] === undefined) {
        return false;
      } else if (storage[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
