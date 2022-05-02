const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addNodeWithin(node, value) {
      if (!node) {
       return new Node(value);
    }
     if (value < node.data) {
       node.left = addNodeWithin(node.left, value);
    } else {
      node.right = addNodeWithin(node.right, value);
    }
     return node;
    }
    this.rootNode = addNodeWithin(this.rootNode, data);
  }

  has(data) {
    let node = this.rootNode;
    while (node) {
      if (node.data === data) return true;
      if (node.data < data) {
        node = node.right;
      } else if (node.data > data) {
        node = node.left;
      }
    }
    return false;
  }

  find(data) {
    let node = this.rootNode;
    while (node) {
      if (node.data === data) return node;
      if (node.data < data) {
        node = node.right;
      } else if (node.data > data) {
        node = node.left;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, value) {
      if (!node) return null;

      if (node.data > value ) {
        node.left = removeNode(node.left, value);
        return node;
      }

      if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      }

      if (value === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.right) return node.left;
        if (!node.left) return node.right;

        let desNode = node.left;

        while (desNode.right) {
          desNode = desNode.right;
        }

        node.data = desNode.data;
        node.left = removeNode(node.left, desNode.data);

        return node;
      } 
    }
  }

  min() {
    let node = this.rootNode;
    if (!this.rootNode) return null;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    if (!this.rootNode) return null;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};