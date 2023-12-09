function maxSubarrayLength(arr: number[], k: number): number {
    let maxSize = 0;
    const hash: Record<number, number> = {};
    let idx = 0;
    const queue: number[] = [];

    while (idx < arr.length) {
        if (arr[idx] in hash) hash[arr[idx]]++;
        else hash[arr[idx]] = 1;
        queue.push(arr[idx]);

        while (hash[arr[idx]] > k) {
            let top = queue.shift() as number;
            hash[top]--;
        }

        maxSize = Math.max(maxSize, queue.length);
        idx++;
    }

    return maxSize;
}

maxSubarrayLength([2, 1, 1, 3], 1);
// maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 1);
// maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4);
// maxSubarrayLength([3, 3, 2], 1);
