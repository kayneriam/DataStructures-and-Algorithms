class Queue {
  constructor() {
    this.body = new Array();
  }

  isEmpty() {
    return this.body.length === 0;
  }

  enqueue(item) {
    this.body[this.body.length] = item;
  }

  dequeue(item) {
    if (this.isEmpty()) {
      throw new Error(`Queue is empty!`);
    } else {
      return this.body.splice(0, 1)[0];
    }
  }

  length() {
    return this.body.length;
  }

  peek() {
    return this.body[0];
  }

  toString() {
    return this.body.toString();
  }
}