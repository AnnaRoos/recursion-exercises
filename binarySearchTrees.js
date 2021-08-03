// Node class
export class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

//Binary search tree

const insertValueToBinarySearchTree = (root, data) => {
  if (root === null) {
    root = new Node();
    root.data = data;
    return root;
  }
  if (root.data < data) {
    root.right = insertValueToBinarySearchTree(root.right, data);
  } else {
    root.left = insertValueToBinarySearchTree(root.left, data);
  }
  return root;
};



//Print leaf nodes in Binary Search Tree
const printLeaves = (root) => {
  if (root === null) {
    return;
  }
  if (root.left === null && root.right === null) {
    console.log(root.data);
    return;
  }
  if (root.left != null) {
    printLeaves(root.left);
  }
  if (root.right != null) {
    printLeaves(root.right);
  }
};

const newTree = new BinarySearchTree();
newTree.root = new Node(100);
insertValueToBinarySearchTree(newTree.root, 80);
insertValueToBinarySearchTree(newTree.root, 30);
insertValueToBinarySearchTree(newTree.root, 70);
insertValueToBinarySearchTree(newTree.root, 180);
insertValueToBinarySearchTree(newTree.root, 60);
insertValueToBinarySearchTree(newTree.root, 200);

printLeaves(newTree.root);
