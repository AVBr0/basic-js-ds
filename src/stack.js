const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arrStack = [];
  }
  push(element) {
    this.arrStack.push(element);
    return this.arrStack;
  }

  pop() {
    return this.arrStack.pop();
  }

  peek() {
    let l = this.arrStack.length-1;
    return this.arrStack[l];
  }
}

module.exports = {
  Stack
};
