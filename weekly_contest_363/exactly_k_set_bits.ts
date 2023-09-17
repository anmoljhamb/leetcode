function setBits(n: number) {
    let count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
}

function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (setBits(i) === k) {
            sum += nums[i];
        }
    }
    return sum;
}

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
