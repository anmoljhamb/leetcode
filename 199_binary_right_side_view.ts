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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const queue: (TreeNode | null)[] = [root];
    const ansList: number[] = [];

    while (queue.length) {
        let currentLength = queue.length;
        let ans = 0;
        while (currentLength--) {
            const curr = queue.shift() as TreeNode;
            ans = curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        ansList.push(ans);
    }

    return ansList;
}
