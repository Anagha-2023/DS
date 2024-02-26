class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;

  }
}

class DLlist{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode = new Node(data);
    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;

  }
  

  insertAfter(nextTo,data){
    const newNode = new Node(data)
    let temp = this.head;

    while(temp!==null && temp.data!==nextTo){
      temp=temp.next;
    }
    if (temp == null){
      return;
    }
    if(temp!== this.tail){
      newNode.prev = temp;
      newNode.next = temp.next;
      temp.next.prev = newNode;
      temp.next = newNode;
    }else{
      newNode.prev = temp;
      temp.next = newNode;
      this.tail = newNode
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

const list = new DLlist();
list.addNode(5);
list.addNode(10);
list.addNode(15);
list.addNode(20);
list.insertAfter(20,100)
list.print();
list.printBack();