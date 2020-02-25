let StaticArray = require('./static_array');

class DynamicArray extends StaticArray {
  constructor() {
    super(1000);
  }

  get(index) {
    if (index > this.size - 1) {
      this.resize(index - this.size + 1);
    }
    return super.get(index);
  }

  set(index, value) {
    if (index > this.size - 1) {
      this.resize(index - this.size + 1);
    }
    super.set(index, value);
  }

  resize(newSize) {
    this.body = new Array(...this.body);
    this.size += newSize;
  }
}

module.exports = DynamicArray;