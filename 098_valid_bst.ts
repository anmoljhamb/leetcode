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

function isValidLeft(node: TreeNode | null, val: number) {
    if (!node) return true;
    return (
        node.val < val &&
        isValidLeft(node.left, val) &&
        isValidLeft(node.right, val)
    );
}

function isValidRight(node: TreeNode | null, val: number) {
    if (!node) return true;
    return (
        node.val > val &&
        isValidRight(node.left, val) &&
        isValidRight(node.right, val)
    );
}

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true;

    const left = isValidLeft(root.left, root.val);
    const right = isValidRight(root.right, root.val);

    return left && right && isValidBST(root.left) && isValidBST(root.right);
}
