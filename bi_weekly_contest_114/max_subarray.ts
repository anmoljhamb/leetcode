function maxSubarrays(arr: number[]): number {
    const leftArr = [...arr];

    for (let i = 1; i < arr.length; i++) {
        leftArr[i] = leftArr[i] & leftArr[i - 1];
    }
    if (leftArr[leftArr.length - 1] > 0) return 1;

    let count = 0;
    let start = 0;

    while (start < arr.length) {
        let curr = arr[start];
        let i = start + 1;
        for (i; curr !== 0 && i < arr.length; i++) {
            curr = curr & arr[i];
        }
        start = i;
        if (curr === 0) count++;
    }

    return count;
}

console.log(maxSubarrays([9, 11, 13, 14]));
console.log(maxSubarrays([1, 0, 2, 0, 1, 2, 3]));
// console.log(maxSubarrays([1, 0, 2, 0, 1, 2]));
