class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarysearchTree {
  constructor() {
      this.root = null;
  }

  insertNode(data) {
      const newNode = new Node(data)
      let currentNode = this.root;

      if (currentNode === null) {
          this.root = newNode;
          return;
      }
      while (true) {
          if (data < currentNode.data) {
              if (currentNode.left === null) {
                  currentNode.left = newNode;
                  break;
              } else {
                  currentNode = currentNode.left;
              }
          } else {
              if (currentNode.right === null) {
                  currentNode.right = newNode;
                  break;
              } else {
                  currentNode = currentNode.right;
              }
          }
      }
  }

  findClosestvalue(target){
    if(!this.root){
      return null;
    }

    let currentNode = this.root;
    let closest = currentNode.data;

    while (currentNode!==null) {
      if(Math.abs(target-closest) > Math.abs(target-currentNode.data)){
        closest = currentNode.data;
      }
      if(target < currentNode.data){
        currentNode = currentNode.left;
      }
      else if(target > currentNode.data){
        currentNode = currentNode.right;
      }else{
        break;
      }
    }
    return closest
  }

  
}

const tree = new BinarysearchTree();
tree.insertNode(20);
tree.insertNode(10);
tree.insertNode(30);
tree.insertNode(5);
tree.insertNode(11);

const target = 4;
console.log("closest value is:",tree.findClosestvalue(target));
