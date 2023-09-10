const how_sum = (
    target: number,
    arr: number[],
    memo: Record<number, number[] | null> = {}
): number[] | null => {
    if (target in memo) return memo[target];

    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of arr) {
        const remainder = target - num;
        const result = how_sum(remainder, arr, memo);
        if (result !== null) {
            memo[remainder] = [...result, num];
            return memo[remainder];
        }
        memo[remainder] = result;
    }

    memo[target] = null;
    return memo[target];
};

console.log(how_sum(8, [2, 3]));
console.log(how_sum(12, [2, 3]));
console.log(how_sum(15, [2, 3]));
console.log(how_sum(3001, [2, 4]));
