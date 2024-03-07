class Node{
  constructor(data){
    this.data = data;
    this.prev = null
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode  = new Node(data);

    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode

  }

  DeleteNode(data){
    let temp= this.head;

    if(temp!==null && temp.data == data){
      this.head = temp.next;
      
      if(this.head!==null){
        this.head.prev = null;
      }if(temp===null){
        return;
      }if(temp==this.tail){
        this.tail = null;
      }
      return;
    }

    if(temp!==null && temp.data!==data){
      temp=temp.next;
    }if(temp==null){
      return;
    }if(temp==this.tail){
      this.tail = temp.prev;
      this.tail.next = null;
    }
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
  }

  

  printF(){
    let temp = this.head;
    const values = [];
    
    if(this.head === null){
      log("Empty")
    }

    while(temp!==null){
      values.push(temp.data);
      temp = temp.next
    }
    console.log(values.join('->'));
  }

  printB(){
    let temp = this.tail;
    const values = [];
    
    if(this.head === null){
      log("Empty")
    }

    while(temp!==null){
      values.push(temp.data);
      temp = temp.prev
    }
    console.log(values.join('<-'));
  }
}

const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.DeleteNode(40)
list.printF();
list.printB();