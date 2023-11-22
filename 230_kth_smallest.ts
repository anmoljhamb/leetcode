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

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let val = 0;
    function dfs(node: TreeNode | null) {
        if (!node) return;
        dfs(node.left);

        if (++count === k) {
            val = node.val;
            return;
        }

        dfs(node.right);
    }

    dfs(root);
    return val;
}
