let DynamicArray = require('./dynamic_array');

class DynamicStack {
  constructor() {
    this.array = new DynamicArray();
    this.lastElementIndex = -1;
  }

  push(element) {
    this.array.set(++this.lastElementIndex, element);
  }

  pop() {
    return this.array.get(this.lastElementIndex--);
  }

  toString() {
    let string = "";
    for (let i = 0; i <= this.lastElementIndex; i++) {
      string += this.array.get(i).toString();
      if (i !== this.lastElementIndex) {
        string += ",";
      }
    }
    return string;
  }
}