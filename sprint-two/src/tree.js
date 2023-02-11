var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var isTrue = false;

  if (this.value === target) {
    return true;
  }

  this.children.forEach(function(child) {
    if (isTrue === true) {
      return true;
    }
    isTrue = child.contains(target);

  })

  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
