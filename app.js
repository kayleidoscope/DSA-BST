const {BinarySearchTree} = require('./BST')

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

    console.log(BST.right.right)
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

    console.log(BST.right.right.left.right)
}

// lettersTree()

//I misplaced the second E and S (and the nodes that would become children of the
//second E and S) because I misunderstood how the tree would deal with repeating
//nodes. I also misplaced O because I seem to have totally forgotten to include it.