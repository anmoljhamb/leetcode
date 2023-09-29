const isIncreasing = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
};

const isDecreasing = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) return false;
    }
    return true;
};

function isMonotonic(nums: number[]): boolean {
    return isDecreasing(nums) || isIncreasing(nums);
}
