const {BinarySearchTree} = require('./BST')
const {BinaryTree} = require('./BT')

function numbersTree() {
    const BST = new BinarySearchTree()

    BST.insert(3, 3)
    BST.insert(1, 1)
    BST.insert(4, 4)
    BST.insert(6, 6)
    BST.insert(9, 9)
    BST.insert(2, 2)
    BST.insert(5, 5)
    BST.insert(7, 7)

    return BST
}

// numbersTree()

//I misplaced 5 because when I got to 4, I saw it had no left node, so I put it there,
//even though 5 is bigger than 4 so it needed to go on the right.

function lettersTree() {
    const BST = new BinarySearchTree()

    BST.insert("E", "E")
    BST.insert("A", "A")
    BST.insert("S", "S")
    BST.insert("Y", "Y")
    BST.insert("Q", "Q")
    BST.insert("U", "U")
    BST.insert("E", "E")
    BST.insert("S", "S")
    BST.insert("T", "T")
    BST.insert("I", "I")
    BST.insert("O", "O")
    BST.insert("N", "N")

    return BST
}

// lettersTree()

//I misplaced the second E and S (and the nodes that would become children of the
//second E and S) because I misunderstood how the tree would deal with repeating
//nodes. I also misplaced O because I seem to have totally forgotten to include it.

/*

What does this program do?

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

It adds up all of the values in the tree until it has reached the ends.

It's O(n)

*/

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

// console.log(tree(numbersTree()))


function tinyTree() {
    const BST = new BinarySearchTree()

    BST.insert(3, 3)

    return BST
}

function simpleTree() {
    const BST = new BinarySearchTree()

    BST.insert(2, 2)
    BST.insert(4, 4)
    BST.insert(3, 3)
    BST.insert(5, 5)


    return BST
}

function treeHeight(tree, height = 0) {
    if (!tree) return height;
    const leftHeight = treeHeight(tree.left, height + 1);
    const rightHeight = treeHeight(tree.right, height + 1);
    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

// console.log(treeHeight(simpleTree()))

function MessyNumbersTree() {
    const BST = new BinaryTree()

    BST.insert(3, 3)
    BST.insert(1, 1)
    BST.insert(4, 4)
    BST.insert(6, 6)
    BST.insert(9, 9)
    BST.insert(2, 2)
    BST.insert(5, 5)
    BST.insert(7, 7)

    return BST
}

// MessyNumbersTree()


function isItABST(tree, answer = true) {
    if (!tree) return answer

    const left = isItABST(tree.left, answer)
    const right = isItABST(tree.right, answer)
}

// console.log(isItABST(numbersTree()))

function largest(tree, rank) {
    for (let i = 0; i < rank ; i++) {
        let node = tree.right
        while (tree.left || tree.right) {
            if (!node.right) {
                break
            }
            node = node.right
        }
        if (i === rank - 1) {
            return node.value
        }
        tree.remove(node.value)
    }
}

console.log(largest(numbersTree(), 3))