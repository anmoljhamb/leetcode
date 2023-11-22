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

function isValidBST(
    node: TreeNode | null,
    leftBoundary = -Infinity,
    rightBoundary = Infinity
): boolean {
    if (!node) return true;
    if (!(node.val < rightBoundary && node.val > leftBoundary)) return false;

    const left = isValidBST(node.left, leftBoundary, node.val);
    const right = isValidBST(node.right, node.val, rightBoundary);

    return left && right;
}
