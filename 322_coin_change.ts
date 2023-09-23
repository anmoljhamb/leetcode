function coinChange(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a);
    let count = 0;

    for (let i = 0; i < coins.length && amount > 0; i++) {
        const prev = amount;
        amount = amount % coins[i];
        if (prev !== amount) {
            count += Math.floor(prev / coins[i]);
        }
    }

    if (amount === 0) return count;
    return -1;
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
