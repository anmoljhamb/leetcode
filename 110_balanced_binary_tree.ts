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

function isBalanced(root: TreeNode | null): boolean {
    let ans = true;
    function dfs(node: TreeNode | null) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);

        ans = ans && Math.abs(left - right) <= 1;

        return Math.max(left, right) + 1;
    }
    dfs(root);
    return ans;
}
