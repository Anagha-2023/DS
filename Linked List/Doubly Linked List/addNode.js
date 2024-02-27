class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }



  printForward() {
    let temp = this.head;
    const values = []
    if (this.head === null) {
      console.log("Empty");
    }

    while (temp !== null) {

      values.push(temp.data)

      temp = temp.next;
    }
    console.log(values);
  }

  printBackward() {
    let temp = this.tail;
    const values = []
    while (temp !== null) {
      values.push(temp.data)

      temp = temp.prev;
    }
    console.log(values);
  }
}

const list = new Linkedlist();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.printForward();
list.printBackward()


