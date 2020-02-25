let StaticArray = require('./static_array');

class StaticStack {
  constructor(size) {
    this.array = new StaticArray(size);
    this.size = size;
    this.lastElementIndex = -1;
  }

  push(element) {
    this.array.set(++this.lastElementIndex, element);
  }

  pop() {
    return this.array.get(this.lastElementIndex--);
  }
}

module.exports = StaticStack;