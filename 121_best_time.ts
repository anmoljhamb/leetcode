function maxProfit(arr: number[]): number {
    let low = 0,
        high = 1;

    let maxProfit = 0;

    while (high < arr.length) {
        const profit = arr[high] - arr[low];
        if (profit < 0) {
            low++;
        } else {
            maxProfit = Math.max(profit, maxProfit);
            high++;
        }
    }

    return maxProfit;
}
