class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Linkedlist{
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
    }
    this.tail = newNode
  }

  removeDuplicates() {
    let current = this.head;

    while (current !== null) {
        let nextNode = current.next;

        while (nextNode !== null && nextNode.data === current.data) {
            nextNode = nextNode.next;
        }
        current.next = nextNode;

        if (nextNode === null && current === this.tail) {
            this.tail = current;
        }
        current = nextNode;
    }
}


  print(){
    let temp = this.head;
    const values = []
    if(this.head === null){
      console.log("Empty");
    }
    while(temp!==null){
      values.push(temp.data);
      temp = temp.next;
    }
    console.log(values);
  }
}

const list = new Linkedlist();
list.addNode(5);
list.addNode(10);
list.addNode(10);
list.addNode(15);
list.addNode(15);
list.addNode(20);
list.removeDuplicates()

list.print()