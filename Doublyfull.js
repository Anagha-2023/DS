class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode = new Node(data);
    let temp = this.head;

    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  deleteNode(data){
    let temp = this.head;

    if(temp!==null && temp.data === data){
      this.head = temp.next
      if(this.head!==null){
        this.head.prev = null;
      }if(temp === null){
        return;
      }if(temp === this.tail){
        this.tail = null
      }
      return;
    }

    while(temp!==null && temp.data!==data){
      temp = temp.next
    }
    if(temp === null){
      return;
    }
    if(temp === this.tail){
      this.tail = temp.prev;
      this.tail.next = null;
    }else{
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev
    }
  }

  insertAfter(nextTo,data){
    const newNode = new Node(data);
    let temp = this.head;

    while(temp!==null && temp.data!==nextTo){
      temp = temp.next
    }
    if(temp===null){
      return;
    }
    if(temp!==this.tail){
      newNode.prev = temp
      newNode.next = temp.next
      temp.next.prev = newNode;
      temp.next = newNode;
    }else{
      newNode.prev = temp;
      temp.next = newNode;
      this.tail = newNode
    }

  }

  insertbefore(nextTo,data){
    const newNode = new Node(data);
    let temp = this.head;

    while(temp!==null &&  temp.data!==nextTo){
      temp = temp.next;
    }if(temp === null){
      return;
    }
    if(temp!==this.head){
      newNode.next = temp;
      newNode.prev = temp.prev;
      temp.prev.next = newNode;
      temp.prev = newNode;
    }else{
      newNode.next = temp;
      temp.prev = newNode;
      this.head = newNode;

    }
  }

  printforward(){
    let temp = this.head;
    const values = [];

    if(this.head === null){
      console.log("Empty");
    }

    while(temp!==null){
      values.push(temp.data)
      temp = temp.next
    }
    console.log(values);
  }

  printbackward(){
    let temp = this.tail;
    const values = [];

    if(this.head === null){
      console.log("Empty");
    }

    while(temp!==null){
      values.push(temp.data);
      temp = temp.prev
    }
    console.log(values);
  }
}

let list = new LinkedList();
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)
list.deleteNode(40)
list.insertAfter(30,100)
list.insertbefore(100,500)
list.printforward();
list.printbackward();