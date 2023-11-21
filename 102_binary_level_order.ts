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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let currQ: (TreeNode | null)[] = [root];
    let tempQ: (TreeNode | null)[] = [];
    const ans: number[][] = [];
    while (currQ.length) {
        const currList: number[] = [];
        while (currQ.length) {
            const curr = currQ.shift() as TreeNode;
            currList.push(curr.val);

            if (curr.left) tempQ.push(curr.left);
            if (curr.right) tempQ.push(curr.right);
        }
        currQ = tempQ;
        tempQ = [];
        ans.push(currList);
    }
    return ans;
}
