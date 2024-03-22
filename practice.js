class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(data){
    const newNode = new Node(data);
    if(this.rear === null){
      this.front = newNode;
      this.rear = newNode;
      return
    }else{
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(){
    if(this.front===null){
      console.log("EMpty");
    }
    this.front = this.front.next;
    if(this.front===null){
      this.rear = null;
    }
  }

  print() {
    let temp = this.front;

    if (this.front === null) {
      console.log("Empty");
    }
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.print();