const best_sum = (
    target: number,
    arr: number[],
    memo: Record<number, number[] | null> = {}
): number[] | null => {
    if (target in memo) return memo[target];

    if (target === 0) return [];
    if (target < 0) return null;

    let bestResult: number[] | null = null;
    let bestResultLength = Infinity;

    for (let num of arr) {
        const remainder = target - num;
        let result = best_sum(remainder, arr, memo);

        if (result !== null) {
            result = [...result, num];
            if (result.length < bestResultLength) {
                bestResultLength = result.length;
                bestResult = result;
            }
        } else {
        }
    }

    memo[target] = bestResult;
    return bestResult;
};

console.log(best_sum(8, [2, 3, 5]));
console.log(best_sum(8, [1, 4, 5]));
console.log(best_sum(100, [1, 2, 5, 25]));
console.log(best_sum(3001, [2, 4, 6, 10, 12]));
