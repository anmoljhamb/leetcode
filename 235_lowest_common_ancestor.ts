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

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    let ans: TreeNode | null = root;
    const pVal = p!.val;
    const qVal = q!.val;

    function helper(node: TreeNode | null) {
        if (!node) return;
        // The answer node is the one where both split into different branches.

        if (
            !(
                (pVal < node.val && qVal < node.val) ||
                (pVal > node.val && qVal > node.val)
            )
        ) {
            ans = node;
            return;
        }

        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return ans;
}
