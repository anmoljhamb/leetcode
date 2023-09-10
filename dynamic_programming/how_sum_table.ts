type NullArray = number[] | null;

const howSum = (target: number, arr: number[]) => {
    const dp: NullArray[] = [...new Array(target + 1)].map(() => null);
    dp[0] = [];

    for (let i = 0; i <= target; i++) {
        if (dp[i] !== null) {
            const curr = dp[i] as number[];

            for (let num of arr) {
                dp[i + num] = [...curr, num];
            }
        }
    }

    return dp[target];
};

console.log(howSum(7, [1, 2, 4]));
console.log(howSum(8, [2, 4]));
