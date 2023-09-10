const canSum = (target: number, arr: number[]) => {
    const dp: boolean[] = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < target; i++) {
        if (dp[i]) {
            for (let num of arr) {
                dp[i + num] = true;
            }
        }
    }

    return dp[target];
};

console.log(canSum(7, [5, 3, 4]));
console.log(canSum(8, [2, 4]));
