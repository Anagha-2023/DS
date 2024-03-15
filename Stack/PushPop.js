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
      console.log("Stack Underflow");
      return;
    }else{
      this.top = this.top.next;
    }
  }

  print(){
    let temp  = this.top;

    if(this.top==null){
      console.log("Empty");
    }

    while (temp!==null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const stack = new Stack();
stack.Push(1)
stack.Push(2)
stack.Push(3)
stack.Push(4)
stack.Push(5)
stack.Pop()
stack.print()
