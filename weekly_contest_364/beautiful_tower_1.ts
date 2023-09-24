function maximumSumOfHeights(maxHeights: number[]): number {
    let bestAns = 0;
    let bestIndexAns = -1;
    for (let currIndex = 0; currIndex < maxHeights.length; currIndex++) {
        // make the current index to be the mountain.
        let ans = 0;
        let currMaximum = maxHeights[currIndex];
        for (let i = currIndex - 1; i >= 0; i--) {
            currMaximum = Math.min(currMaximum, maxHeights[i]);
            ans += currMaximum;
        }

        ans += maxHeights[currIndex];

        let currMinimum = maxHeights[currIndex];
        for (let i = currIndex + 1; i < maxHeights.length; i++) {
            currMinimum = Math.min(currMinimum, maxHeights[i]);
            ans += currMinimum;
        }
        if (ans > bestAns) {
            bestAns = ans;
            bestIndexAns = currIndex;
        }
        // console.log(`ans[${currIndex}]=${ans}`);
    }
    return bestAns;
}

console.log(maximumSumOfHeights([5, 3, 4, 1, 1]));
console.log(maximumSumOfHeights([6, 5, 3, 9, 2, 7]));
console.log(maximumSumOfHeights([3, 2, 5, 5, 2, 3]));
