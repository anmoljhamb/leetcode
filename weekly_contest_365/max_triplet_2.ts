function maximumTripletValue(arr: number[]): number {
    let maxResult = -Infinity;

    const leftMax = [...arr];
    const rigthMax = [...arr];

    for (let i = 1; i < arr.length; i++)
        leftMax[i] = Math.max(leftMax[i], leftMax[i - 1]);
    for (let i = arr.length - 2; i > -1; i--)
        rigthMax[i] = Math.max(rigthMax[i], rigthMax[i + 1]);

    for (let j = 1; j < arr.length - 1; j++) {
        const value = (leftMax[j - 1] - arr[j]) * rigthMax[j + 1];
        maxResult = Math.max(maxResult, value);
    }

    return Math.max(maxResult, 0);
}

console.log(maximumTripletValue([18, 15, 8, 13, 10, 9, 17, 10, 2, 16, 17]));
