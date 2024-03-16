class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  Enqueue(data) {
    const newNode = new Node(data);
    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
      return;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  DeQueue(){
    if(this.front === null){
      console.log("Empty");
    }
    this.front = this.front.next;

    if(this.front === null){
      this.rear = null;
    }
  }

  peek(){
    if(this.isEmpty()){
      return "Empty"
    }
    return this.front.data;
  }

  isEmpty(){
    return this.front === null && this.rear === null;
    
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
myQueue.Enqueue(10);
myQueue.Enqueue(20);
myQueue.Enqueue(30);
myQueue.Enqueue(40);
console.log("Peek:",myQueue.peek());
console.log(myQueue.isEmpty());
myQueue.print() 