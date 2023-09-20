const makeKey = (x: number, low: number, high: number) =>
    `${x} - ${low} - ${high}`;

function ans(
    arr: number[],
    x: number,
    low: number,
    high: number,
    memo: Record<string, number> = {}
) {
    if (makeKey(x, low, high) in memo) return memo[makeKey(x, low, high)];

    if (x === 0) return 0;
    if (x < 0 || low > high) return -1;

    const left = ans(arr, x - arr[low], low + 1, high, memo);
    const right = ans(arr, x - arr[high], low, high - 1, memo);

    if (left === -1 && right === -1) {
        memo[makeKey(x, low, high)] = -1;
    } else {
        memo[makeKey(x, low, high)] =
            Math.min(
                left === -1 ? Infinity : left,
                right === -1 ? Infinity : right
            ) + 1;
    }

    return memo[makeKey(x, low, high)];
}

function minOperations(nums: number[], x: number): number {
    return ans(nums, x, 0, nums.length - 1);
}

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
