class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function heightOfNode(node: TreeNode | null) {
    if (!node) return 0;

    const left = heightOfNode(node.left);
    const right = heightOfNode(node.right);

    return Math.max(left, right) + 1;
}

function helper(node: TreeNode | null) {
    if (!node) return 0;

    // get height left of left side
    const left = heightOfNode(node.left);
    // get height of right side
    const right = heightOfNode(node.right);
    const currentDiamater = left + right;

    // console.log(left, right);

    return Math.max(currentDiamater, helper(node.left), helper(node.right));
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    return helper(root);
}
