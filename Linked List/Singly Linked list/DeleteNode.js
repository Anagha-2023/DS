class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class ListNode{
  constructor(){
    this.head = null;
    this.tail = null
  }

  addNode(data){
    const newNode = new Node(data);
      if (this.head === null){
        this.head = newNode;
      }else{
        this.tail.next = newNode;
      }
      this.tail = newNode;
  }

  print(){
    if(this.head === null){
      console.log("Empty");
    }

    let temp = this.head;
    const values = [];
    while (temp!==null){
      values.push(temp.data);
      temp = temp.next
    }
    console.log(values.join('->'));
  }

  DeleteNode(data){
    let temp = this.head;
    let prev = null;

    if (temp!==null && temp.data == data){
      this.head = temp.next;
      return;
    }

    while (temp!== null && temp.data!== data){
      prev = temp;
      temp = temp.next;
    }

    if(temp == null){
      return;
    }
    if (temp == this.tail){
      tail = prev;
      this.tail.next = null;
      return;
    }
    prev.next = temp.next
  }  

}

const listnode = new ListNode();
listnode.addNode(10);
listnode.addNode(20);
listnode.addNode(30);
listnode.addNode(40);
listnode.DeleteNode(10)
listnode.print();
