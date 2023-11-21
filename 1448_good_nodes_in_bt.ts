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
    const arr: (number | null)[] = [];
    let count = 1;

    const q = [root];

    while (q.length) {
        const curr = q.shift() as TreeNode | null;
        if (!curr) {
            arr.push(null);
            continue;
        }

        arr.push(curr.val);
        q.push(curr.left);
        q.push(curr.right);
    }

    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) continue;
        const currEl = arr[i]!;
        let j = i;
        let condn = true;
        console.log(`for element ${currEl}`);
        while (j >= 0) {
            j = Math.floor((j - 1) / 2);
            console.log(`child ${arr[j]}`);
            if (j >= 0) condn &&= arr[j]! <= currEl;
            if (!condn) break;
        }
        if (condn) count += 1;
    }

    return count;
}
