class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Binarysearch{
  constructor(){
    this.root = null;
  }

  //AddNode

  insertnode(data){
    const newNode = new Node(data);
    let currentNode = this.root;

    if(currentNode==null){
      this.root = newNode;
      return;
    }
    while(true){
      if(data<currentNode.data){
        if(currentNode.left==null){
          currentNode.left = newNode;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else{
        if(currentNode.right==null){
          currentNode.right = newNode;
          break;
        }else{
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  //Check

  contains(data){
    let currentNode = this.root;
    while(currentNode!==null){
        if(data<currentNode.data){
            currentNode = currentNode.left;
        }else if(data>currentNode.data){
            currentNode = currentNode.right;
        }else{
            return true; // Node with data found
        }
    }
    return false; // Node with data not found
}


  delete(data){
    this.root = this.deleteNode(this.root,data)
  }

  deleteNode(root,data){
    if(this.root === null){
      return root;
    }
    if(data<root.data){
      root.left = this.deleteNode(root.left,data)
    }else if(data>root.data){
      root.right = this.deleteNode(root.right,data)
    }else{
      if(root.left==null && root.right==null){
        return null;
      }
      if(root.left==null){
        return root.right;
      }
      if(root.right==null){
        return root.left;
      }
      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right,root.data)
    }
    return root;
  }

  min(root){
    if(!root.left){
      return root.data;
    }else{
      return this.min(root.left)
    }
  }

  PreOrder(){
    this.PreOrderHelper(this.root)
  }
  PreOrderHelper(node){
    if(node){
      console.log(node.data);
      this.PreOrderHelper(node.left);
      this.PreOrderHelper(node.right)
    }
  }

  InOrder(){
    this.InorderHelper(this.root);
  }
  InorderHelper(node){
    if(node){
      this.InorderHelper(node.left);
      console.log(node.data);
      this.InorderHelper(node.right);
    }
  }

  postOrder(){
    this.postOrderHelper(this.root);
  }

  postOrderHelper(node){
    if(node){
    this.postOrderHelper(node.left);
    this.postOrderHelper(node.right);
    console.log(node.data);
    }
    
  }
}

const tree = new Binarysearch();
tree.insertnode(10);
tree.insertnode(5);
tree.insertnode(20);
console.log("Inorder:");
tree.InOrder();
console.log("PreOrder");
tree.PreOrder();
console.log("postOrder:");
tree.postOrder()
tree.delete(10)
console.log("Present in Tree? ",tree.contains(10));