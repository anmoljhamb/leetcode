const bestSum = (target: number, arr: number[]) => {
    const dp: Array<number[] | null> = new Array(target + 1).fill(null);

    dp[0] = [];

    for (let i = 0; i <= target; i++) {
        if (dp[i] !== null) {
            const curr = dp[i] as number[];
            for (let num of arr) {
                const temp = dp[i + num];
                if (temp) {
                    if (temp.length > curr.length + 1)
                        dp[i + num] = [...curr, num];
                } else {
                    dp[i + num] = [...curr, num];
                }
            }
        }
    }

    return dp[target];
};

console.log(bestSum(7, [1, 2, 4]));
console.log(bestSum(99, [1, 2, 4]));
console.log(bestSum(8, [1, 2, 4, 8]));
