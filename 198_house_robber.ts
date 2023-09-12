function helper(
    low: number,
    arr: number[],
    memo: Record<number, number> = {}
): number {
    if (low in memo) return memo[low];
    if (low >= arr.length) return 0;

    memo[low] = Math.max(
        arr[low] + helper(low + 2, arr, memo),
        helper(low + 1, arr, memo)
    );
    return memo[low];
}

function rob(nums: number[]): number {
    return helper(0, nums);
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
console.log(
    rob([
        183, 219, 57, 193, 94, 233, 202, 154, 65, 240, 97, 234, 100, 249, 186,
        66, 90, 238, 168, 128, 177, 235, 50, 81, 185, 165, 217, 207, 88, 80,
        112, 78, 135, 62, 228, 247, 211,
    ])
);
