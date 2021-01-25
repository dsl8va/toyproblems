class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if (!this.head) return undefined;
    // let runner = this.head;
    // while (runner.next.next !== null) {
    //   runner = runner.next;
    // }
    // runner.next = null;
    // this.tail = runner;
    // this.length--;
    // return runner;

    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

}

let list = new LinkedList()
list.push(1)
list.push(2)
console.log('list1', list)
list.pop()
console.log('list2', list)
list.pop()
console.log('list2', list)