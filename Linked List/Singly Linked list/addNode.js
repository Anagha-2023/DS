class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addNode(data){
    const newNode = new Node(data);

    if(this.head===null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;

  }

  print(){
    if(this.head===null){
      console.log("Empty");
      return;
    }

    let temp = this.head;
    const Values = [];
    while (temp!==null){
      Values.push(temp.data)
      temp = temp.next;
    }
    console.log(Values.join('->'))
  }
}

const linkedlist = new LinkedList()
// linkedlist.print();
linkedlist.addNode(10);
linkedlist.addNode(20);
linkedlist.addNode(30);
linkedlist.print();