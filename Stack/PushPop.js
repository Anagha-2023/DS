class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  Push(data){
    const newNode = new Node(data);
    
    if(this.top === null){
      this.top = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  Pop(){
    if(this.top === null){
      console.log("stack underflow");
      return;
    }else{
      this.top = this.top.next;
    }
  }

  Peek(){
    if(this.top === null){
      console.log("Empty");
    }else{
      console.log("Peek: ",this.top.data);
    }
  }

  isEmpty(){
    return this.top === null;
  }

  print(){
    let temp = this.top;

    if(this.top===null){
      console.log("Empty");
    }
    while(temp!==null){
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const myStack = new Stack();
myStack.Push(10);
myStack.Push(20)
myStack.Push(30)
myStack.Push(40);
myStack.Pop()
myStack.Peek()
console.log(myStack.isEmpty());
myStack.print();


