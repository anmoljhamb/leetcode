function findMin(arr: number[]): number {
    let low = 0,
        high = arr.length - 1;
    let min = Infinity;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        min = Math.min(arr[mid], min);
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return Math.min(min, arr[low]);
}

export default findMin;
