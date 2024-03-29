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

    contains(data) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data)
    }
    deleteNode(root, data) {
        if (this.root === null) {
            return root;
        }
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        }
        else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.data = this.min(root.right);
            this.right = this.deleteNode(root.right, root.data)
        }
        return root;
    }

    min(root) {
        if (!root.left) {
            return root.data;
        } else {
            return this.min(root.left)
        }
    }

    Inorder(){
        this.Inorderhelper(this.root);
    }
    Inorderhelper(node){
        if(node){
            this.Inorderhelper(node.left);
            console.log(node.data);
            this.Inorderhelper(node.right);
        }
    }

    preorder(){
        this.preorderHelper(this.root);
    }
    preorderHelper(node){
        if(node){
        console.log(node.data);
        this.preorderHelper(node.left);
        this.preorderHelper(node.right);
        }
    }

    postorder(){
        this.postorderHelper(this.root);
    }
    postorderHelper(node){
        if(node){
        this.postorderHelper(node.left);
        this.postorderHelper(node.right);
        console.log(node.data);
        }
    }
}

const tree = new BinarysearchTree();
tree.insertNode(20);
tree.insertNode(10);
tree.insertNode(30);
console.log("preorder:");
tree.preorder();
console.log("Inorder:");
tree.Inorder();
console.log("postOrder:");
tree.postorder()
tree.delete(30)
console.log(tree.contains(30));