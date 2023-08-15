const calc = (arr: number[], i: number, j: number) => {
    return Math.abs(i - j) * Math.min(arr[i], arr[j]);
};

function maxArea(arr: number[]): number {
    let maxArea = 0;
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        maxArea = Math.max(calc(arr, low, high), maxArea);
        if (arr[low] < arr[high]) {
            low++;
        } else {
            high--;
        }
    }

    return maxArea;
}
