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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0;
    function helper(node: TreeNode | null) {
        if (!node) return 0;

        const left = helper(node.left);
        const right = helper(node.right);

        // Value of current diameter is obv going to be 2+left+right
        ans = Math.max(ans, left + right + 1);

        return 1 + Math.max(left, right);
    }
    helper(root);
    return ans - 1;
}
