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

    printForward() {
      let temp = this.head;
      const values = []
      while (temp) {
        values.push(temp.data)          
          temp = temp.next;
      }
      console.log(values.join('->'));
  }

    printBackward() {
      let temp = this.tail;
      const values = [];

      while(temp!==null){
        values.push(temp.data);
        temp = temp.prev;
      }
      console.log(values.join('->'));
    }
}

const List = new DLlist();
List.addNode(1)
List.addNode(2)
List.addNode(3)
List.addNode(4)
List.printForward()
List.printBackward()


