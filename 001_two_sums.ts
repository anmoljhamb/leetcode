interface Dict {
    [num: number]: number[];
}

function twoSum(nums: number[], target: number): number[] {
    const dict: Dict = {};
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        if (!(temp in dict)) {
            dict[temp] = [i];
        } else dict[temp].push(i);
    }

    Object.keys(dict).forEach((value) => {
        const x = Number.parseInt(value);
        const y = target - x;
        if (y in dict) {
            if (x === y) {
                result = [dict[x][0], dict[x][1]];
            } else {
                result = [dict[x][0], dict[y][0]];
            }
        }
    });

    return result;
}
