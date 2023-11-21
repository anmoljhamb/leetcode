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

function goodNodes(root: TreeNode | null): number {
    let count = 0;
    const maxVal = root!.val;

    function helper(node: TreeNode | null, max = maxVal) {
        if (!node) return;

        const temp = Math.max(node.val, max);
        if (node.val >= max) count++;
        helper(node.left, temp);
        helper(node.right, temp);
    }

    helper(root);
    return count;
}
