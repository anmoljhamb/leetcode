function numberOfPoints(nums: number[][]): number {
    const arr: number[] = [...new Array(101).fill(0)];

    for (let i = 0; i < nums.length; i++) {
        for (let low = nums[i][0]; low <= nums[i][1]; low++) {
            if (arr[low] === 0) {
                arr[low] = 1;
            }
        }
    }

    return arr.reduce((prevVal, curr) => {
        return prevVal + curr;
    }, 0);
}
