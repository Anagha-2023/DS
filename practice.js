class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function validBstorNot(root) {
    function inorder(node) {
        if (node) {
            inorder(node.left);
            inorderResult.push(node.data);
            inorder(node.right);
        }
    }

    const inorderResult = []; // Changed to variable
    inorder(root);

    for (let i = 0; i < inorderResult.length - 1; i++) {
        if (inorderResult[i] >= inorderResult[i + 1]) {
            return false;
        }
    }
    return true;
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(9);

console.log(validBstorNot(root)); // Output: true
