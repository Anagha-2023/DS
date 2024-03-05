class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class ListNode{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode
    }
    this.tail = newNode;
  }

  DeleteNode(data){
    let temp = this.head;
    let prev = null;

    if(temp!==null && temp.data === data){
      this.head = temp.next;
      return;
    }
    while(temp!==null && temp.data!==data){
      prev = temp;
      temp = temp.next;
      
    }
    if(temp === null){
      return
    }
    if(temp===this.tail){
      this.tail = prev;
      this.tail.next = null;
      return;
    }
    prev.next = temp.next;
  }

  insertNode(nextTo,data){
    const newNode = new Node(data);
    let temp = this.head;

    while(temp!==null && temp.data!==nextTo){
      temp = temp.next;
    }
    if(temp === null){
      return;
    }
    if(temp === this.tail){
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = temp.next;
    temp.next = newNode
  }

  print(){
    let temp = this.head;
    const values = [];

    if(this.head === null){
      console.log("Empty");
    }
    while(temp!==null){
      values.push(temp.data);
      temp = temp.next;
    }
    console.log(values.join('->'));
  }
}

let list = new ListNode();
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
list.DeleteNode(40)
list.insertNode(30,100)
list.print()