class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {

    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;

  }

  DeleteNode(data) {
    let temp = this.head;

    if (temp !== null && temp.data == data) {
      this.head = temp.next;
      if (this.head !== null) {
        this.head.prev = null;
      } if (temp == null) {
        return
      } if (temp == this.tail) {
        this.tail = null;
      }
      return;
    }

    while (temp !== null && temp.data !== data) {
      temp = temp.next;
    }
    if (temp === null) {
      return;
    }
    if (temp == this.tail) {
      this.tail = temp.prev;
      this.tail.next = null;
    } else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
    }
  }

  printForward() {
    let temp = this.head;
    const values = [];
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.next
    }
    console.log(values);
  }

  printBackward() {
    let temp = this.tail;
    const values = [];
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.prev;
    }
    console.log(values);
  }
}

const list = new Linkedlist();
list.addNode(5);
list.addNode(10);
list.addNode(15);
list.addNode(20);
list.DeleteNode(20)
list.printForward();
list.printBackward();

