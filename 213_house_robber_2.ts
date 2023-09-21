function ans(
    arr: number[],
    low: number,
    high: number,
    memo: Record<string, number> = {}
) {
    if (`${low}-${high}` in memo) return memo[`${low}-${high}`];
    if (low > high) return 0;
    memo[`${low}-${high}`] = Math.max(
        arr[low] + ans(arr, low + 2, low === 0 ? high - 1 : high, memo),
        ans(arr, low + 1, high, memo)
    );
    return memo[`${low}-${high}`];
}

function rob(nums: number[]): number {
    return ans(nums, 0, nums.length - 1);
}
