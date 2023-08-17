// KADANE'S ALGO
function allNegatvie(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) return false;
    }
    return true;
}

function maxSubArray(arr: number[]): number {
    let sumSoFar = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sumSoFar += arr[i];
        if (sumSoFar > maxSum) {
            maxSum = sumSoFar;
        }
        if (sumSoFar < 0) {
            sumSoFar = 0;
        }
    }
    if (allNegatvie(arr)) {
        maxSum = -Infinity;
        arr.forEach((num) => {
            maxSum = Math.max(maxSum, num);
        });
    }
    return maxSum;
}
