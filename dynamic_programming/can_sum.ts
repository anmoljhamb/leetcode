const can_sum = (
    target: number,
    arr: number[],
    memo: Record<number, boolean> = {}
): boolean => {
    if (target in memo) return memo[target];

    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of arr) {
        const remainder = target - num;
        if (can_sum(remainder, arr, memo) === true) {
            memo[target] = true;
            return true;
        }
    }

    memo[target] = false;
    return false;
};

console.log(can_sum(7, [2, 4]));
console.log(can_sum(6, [2, 4]));
console.log(can_sum(4, [2, 4]));
console.log(can_sum(3001, [2, 4, 6, 10, 12]));
console.log(can_sum(7, [2, 4]));
