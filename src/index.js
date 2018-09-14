class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.sortFunc = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var subArr = [];
    indices.sort();

    for (var i in indices) {
      subArr.push(this.arr[indices[i]]);
    }
    
    subArr.sort(this.sortFunc);
    
    var count = 0;

    for (var i in indices) {
      this.arr[indices[i]] = subArr[count];
      count++;
    }
  }

  setComparator(compareFunction) {
    this.sortFunc = compareFunction;
  }
  
}


module.exports = Sorter;