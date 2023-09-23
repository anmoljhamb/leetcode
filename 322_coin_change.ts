function coinChange(
    coins: number[],
    amount: number,
    memo: Record<number, number> = {}
): number {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let shortestCoin = Infinity;
    for (let coin of coins) {
        const remainder = amount - coin;
        let result = coinChange(coins, remainder, memo);
        if (result !== -1) {
            result += 1;
            shortestCoin = Math.min(result, shortestCoin);
        }
    }

    memo[amount] = shortestCoin === Infinity ? -1 : shortestCoin;
    return memo[amount];
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 10000));
