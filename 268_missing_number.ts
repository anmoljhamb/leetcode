function missingNumber(arr: number[]): number {
    let sum = arr.reduce((prev, curr) => prev + curr, 0);
    return (arr.length * (arr.length + 1)) / 2 - sum;
}
