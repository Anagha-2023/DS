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
    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  print(){
    let temp = this.head;
    if(this.head === null){
      console.log("Empty");
    }
    while(temp!==null){
      console.log(temp.data);
      temp = temp.next;
    }
    
  }
}

function mergedList(list1,list2){
  const mergedList = new LinkedList();
  let temp1 = list1.head;
  let temp2 = list2.head;

  while (temp1 && temp2) {
    if(temp1.data <= temp2.data){
      mergedList.addNode(temp1.data);
      temp1 = temp1.next;
    }else{
      mergedList.addNode(temp2.data);
      temp2 = temp2.next;
    }
  }

  while (temp1!==null) {
    mergedList.addNode(temp1.data);
    temp1 = temp1.next;
  }

  while (temp2!==null) {
    mergedList.addNode(temp2.data);
    temp2 = temp2.next;
  }
  return mergedList;
}

const list1 = new LinkedList;
list1.addNode(1);
list1.addNode(2);
list1.addNode(3);
list1.addNode(4);

const list2 = new LinkedList;
list1.addNode(5);
list1.addNode(6);
list1.addNode(7);
list1.addNode(8);

const Merge = mergedList(list1,list2);
Merge.print()


