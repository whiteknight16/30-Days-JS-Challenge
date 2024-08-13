// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value) {
    this.value = value; // Value of the node
    this.next = null; // Pointer to the next node
  }
}

// Example usage:
const node1 = new Node(10);
console.log(node1.value); // Logs: 10
console.log(node1.next); // Logs: null
// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.head = null; // Head of the linked list
  }

  // Method to add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove a node from the end of the list
  remove() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  // Method to display all nodes in the list
  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.display(); // Logs: 10, 20, 30
list.remove();
list.display(); // Logs: 10, 20
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to pop an element off the stack
  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  // Method to peek at the top element of the stack
  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Logs: 20
console.log(stack.pop()); // Logs: 20
console.log(stack.peek()); // Logs: 10
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseStringUsingStack(str) {
  const stack = new Stack();

  // Push all characters onto the stack
  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";

  // Pop characters off the stack to build the reversed string
  while (stack.peek() !== null) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

console.log(reverseStringUsingStack("hello")); // Logs: "olleh"
console.log(reverseStringUsingStack("world")); // Logs: "dlrow"
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
  }

  // Method to enqueue an element into the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Method to dequeue an element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }

  // Method to view the front element of the queue
  front() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[0];
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // Logs: 10
console.log(queue.dequeue()); // Logs: 10
console.log(queue.front()); // Logs: 20
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  // Method to add a print job to the queue
  addPrintJob(job) {
    this.queue.enqueue(job);
    console.log(`Added print job: ${job}`);
  }

  // Method to process the next print job in the queue
  processPrintJob() {
    const job = this.queue.dequeue();
    if (job) {
      console.log(`Processing print job: ${job}`);
    } else {
      console.log("No print jobs in the queue.");
    }
  }
}

// Example usage:
const printer = new PrinterQueue();
printer.addPrintJob("Document1.pdf");
printer.addPrintJob("Document2.pdf");
printer.processPrintJob(); // Logs: Processing print job: Document1.pdf
printer.processPrintJob(); // Logs: Processing print job: Document2.pdf
printer.processPrintJob(); // Logs: No print jobs in the queue.
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  // Method to add a print job to the queue
  addPrintJob(job) {
    this.queue.enqueue(job);
    console.log(`Added print job: ${job}`);
  }

  // Method to process the next print job in the queue
  processPrintJob() {
    const job = this.queue.dequeue();
    if (job) {
      console.log(`Processing print job: ${job}`);
    } else {
      console.log("No print jobs in the queue.");
    }
  }
}

// Example usage:
const printer = new PrinterQueue();
printer.addPrintJob("Document1.pdf");
printer.addPrintJob("Document2.pdf");
printer.processPrintJob(); // Logs: Processing print job: Document1.pdf
printer.processPrintJob(); // Logs: Processing print job: Document2.pdf
printer.processPrintJob(); // Logs: No print jobs in the queue.
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
  constructor(value) {
    this.value = value; // Value of the node
    this.left = null; // Left child
    this.right = null; // Right child
  }
}

// Example usage:
const node = new TreeNode(10);
console.log(node.value); // Logs: 10
console.log(node.left); // Logs: null
console.log(node.right); // Logs: null
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
  constructor() {
    this.root = null; // Root of the binary tree
  }

  // Method to insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Method to perform in-order traversal and display nodes
  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);

tree.inOrderTraversal(); // Logs: 5, 7, 10, 15
