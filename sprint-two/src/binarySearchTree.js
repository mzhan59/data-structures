var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype)
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = BinarySearchTree(value);
  var search = function(branch) {
    if (branch.left === null && value < branch.value) {
      branch.left = node;
    }
    if (branch.right === null && value > branch.value) {
      branch.right = node;
    }
    if (value < branch.value) {
      search(branch.left);
    }
    if (value > branch.value) {
      search(branch.right);
    };

  };
  search(this)


}

BinarySearchTree.prototype.contains = function(value) {
  var search = function(branch) {
    if (branch.value === value) {
      return true;
    }
    if (value < branch.value && branch.left) {
      return search(branch.left)
    }
    if (value > branch.value && branch.right) {
      return search(branch.right)
    }
    return false;

  }
  return search(this);


}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var execute = function(node) {
    callback(node.value);
    if (node.left) {
      execute(node.left);

    }
    if (node.right) {
      execute(node.right);
    }

  }
  execute(this);


}


/*
 * Complexity: What is the time complexity of the above functions?
 */
