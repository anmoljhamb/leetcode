function longestConsecutive(nums: number[]): number {
    const arr = new Set(nums);
    let max = 0;

    arr.forEach((num) => {
        if (arr.has(num - 1)) return;

        let count = 1;
        while (arr.has(num + count)) count++;

        max = Math.max(max, count);
    });

    return max;
}
