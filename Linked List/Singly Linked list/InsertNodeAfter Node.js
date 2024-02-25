class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class ListNode {
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
    }
    this.tail = newNode;
  }


  InsertAfter(nextTo,data){
    const newNode = new Node(data);
    let temp = this.head

    while(temp!==null && temp.data!==nextTo){
      temp = temp.next;
    }
    if(temp == null){
      return;
    }
    if (temp == this.tail){
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode
  }

  

  DeleteNode(data) {
    let temp = this.head;
    let prev = null;

    if (temp !== null && temp.data == data) {
      this.head = temp.next;
      return;
    }

    while (temp !== null && temp.data !== data) {
      prev = temp;
      temp = temp.next;
    }
    if (temp == null) {
      return;
    }
    if (temp == this.tail) {                                                                       
      this.tail = prev;
      this.tail.next = null;
      return;
    }
    prev.next = temp.next;
  }



  print() {
    let temp = this.head;
    const values = [];

    if (this.head === null) {
      console.log("Empty");
    }
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.next;
    }
    console.log(values.join("->"));
  }


}

const list = new ListNode();
list.addNode(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
// list.DeleteNode(300);
list.InsertAfter(400,10)
list.print();