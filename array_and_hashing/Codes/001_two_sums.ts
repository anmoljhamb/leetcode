interface Dict {
    [num: number]: number;
}

function twoSum(nums: number[], target: number): number[] {
    const dict: Dict = {};
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let y = target - x;
        if (y in dict) {
            return [dict[y], i];
        }
        if (!(x in dict)) {
            dict[x] = i;
        }
    }

    return result;
}
