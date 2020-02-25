class Stack {
  constructor() {
    this.body = new Array();
    this.topItemIndex = 0;
  }

  isEmpty() {
    return this.topItemIndex === 0;
  }

  push(item) {
    this.body[this.topItemIndex++] = item;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error(`Stack is empty!`);
    } else {
      let target = this.body[--this.topItemIndex];
      delete this.body[this.topItemIndex];
      return target;
    }
  }

  length() {
    return this.topItemIndex;
  }

  peek() {
    return this.body[this.topItemIndex - 1];
  }

  toString() {
    return [...this.body].reverse().toString();
  }
}

module.exports = Stack;