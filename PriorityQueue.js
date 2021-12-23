function PriorityQueue() {
  this.collection = [
    ["human", 2],
    ["kitten", 3],
    ["dog", 6],
    ["rabbit", 8],
  ];
  this.printCollection = function () {
    console.log(this.collection);
  };
  this.enqueue = function (val) {
    if (this.size() === 0) {
      return this.collection.push(val);
    }

    const indexOfNewValue = this.collection.findIndex((elem) => {
      console.log(`${val[1]} vs ${elem[1]}`);
      return val[1] <= elem[1];
    });
    console.log(indexOfNewValue);
    if (indexOfNewValue === -1) {
      return this.collection.push(val);
    } else {
      return this.collection.splice(indexOfNewValue, 0, val);
    }
  };
  this.dequeue = function () {
    if (this.isEmpty()) {
      return "The queue is empty.";
    } else {
      return this.collection.shift()[0];
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.push = function (val) {
    return this.collection.push(val);
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
}

const queue = new PriorityQueue();
console.log(queue.enqueue(["h", 1]));
console.log(queue.printCollection());
