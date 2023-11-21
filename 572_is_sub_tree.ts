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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // structural check.
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    // value check
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // if (!root && !subRoot) return true;
    if (!root) return false;

    if (root.val === subRoot!.val && isSameTree(root, subRoot)) return true;
    if (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
        return true;
    return false;
}