class BinaryTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        if (this.key) {
            const num = Math.floor(Math.random() * 2);
            if (num === 0) {
                if (this.left === null) {
                    this.left = new BinaryTree(key, value, this);
                } else {
                    this.left.insert(key, value)
                }
            } else if (num === 1) {
                if (this.right == null) {
                    this.right = new BinaryTree(key, value, this);
                } else {
                    this.right.insert(key, value);
                }
            }
        }
    }
}

module.exports = {BinaryTree}