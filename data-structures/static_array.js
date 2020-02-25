class StaticArray {
  constructor(size) {
    if (size < 0) {
      throw new Error(`Negative size: ${size}`);
    } else {
      this.size = size;
      this.body = [];
    }
  }

  get(index) {
    if (index > this.size - 1) {
      throw new Error(`Index(${index}) out of array size(${index})`);
    } else if (index < 0) {
      throw new Error(`Negative index: ${index}`);
    } else {
      return this.body[index];
    }
  }

  set(index, value) {
    if (index > this.size - 1) {
      throw new Error(`Index(${index}) out of array size(${index})`);
    } else if (index < 0) {
      throw new Error(`Negative index: ${index}`);
    } else {
      this.body[index] = value;
    }
  }

  toString() {
    return this.body.toString();
  }
}

module.exports = StaticArray;