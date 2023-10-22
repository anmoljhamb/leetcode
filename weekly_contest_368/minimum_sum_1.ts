function minimumSum(nums: number[]): number {
    let minAns = Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[k] < nums[j]) {
                    minAns = Math.min(minAns, nums[i] + nums[j] + nums[k]);
                }
            }
        }
    }

    return minAns === Infinity ? -1 : minAns;
}
