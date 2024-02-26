class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class ListNode{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode = new Node (data);
    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  insertBefore(nextTo,data){
    const newNode = new Node (data);
    let temp = this.head;

    while(temp!==null && temp.data!==nextTo){
      temp = temp.next;
    }
    if(temp === null){
      return;
    }
    if(temp !==this.head){
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
  

  print(){
    let temp = this.head;
    const values = []
    if(this.head === null){
      console.log("Empty");  
    }
    while(temp!==null){
      values.push(temp.data)
      temp = temp.next;
    }
    console.log(values);
  }

  printBack(){
    let temp = this.tail;
    let values = []
    if(this.head === null){
      console.log("Empty");  
    }
    while(temp!==null){
      values.push(temp.data)
      temp = temp.prev;
    }
    console.log(values);

  }
  
}

const list = new ListNode();
list.addNode(5);
list.addNode(10);
list.addNode(15);
list.addNode(20);
list.insertBefore(5,111)
list.print();
list.printBack();