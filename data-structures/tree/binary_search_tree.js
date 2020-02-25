class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  traverse() {
    this.root.visit();
  }

  search(item) {
    return this.root.search(item);
  }

  addNode(item) {
    let node = new Node(item);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addChild(node);
    }
  }
}

class Node {
  constructor(item) {
    this.item = item;
    this.leftChild = null;
    this.rightChild = null;
  }

  addChild(node) {
    if (node.item < this.item) {
      if (this.leftChild === null) {
        this.leftChild = node;
      } else {
        this.leftChild.addChild(node);
      }
    } else if (node.item > this.item) {
      if (this.rightChild === null) {
        this.rightChild = node;
      } else {
        this.rightChild.addChild(node);
      }
    }
  }

  visit() {
    if (this.leftChild !== null) {
      this.leftChild.visit();
    }
    console.log(`Item: ${this.item}`);

    if (this.rightChild !== null) {
      this.rightChild.visit();
    }
  }

  search(item) {
    if (this.item === item) {
      return this;
    } else if (item < this.item && this.leftChild !== null) {
      return this.leftChild.search(item);
    } else if (item > this.item && this.rightChild !== null) {
      return this.rightChild.search(item);
    }
    return null;
  }
}

module.exports.Node = Node;
module.exports.BinarySearchTree = BinarySearchTree;