

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);

  } else {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var result
    this._storage.get(index).forEach(function(item) {
      if (item[0] === k) {
        result = item[1];
      }
    })
    return result;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  if (bucket) {
    bucket.forEach(function(item, position) {
      if (item[0] === k) {
        bucket.splice(position, 1);

      }
    })
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


