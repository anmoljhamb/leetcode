function findMin(arr: number[]): number {
    let low = 0,
        high = arr.length - 1;
    let min = Infinity;

    while (low < high) {
        if (arr[low] < arr[high]) {
            // if arr is sorted, break out of the loop, and consider it to be one of the answers.
            min = Math.min(min, arr[low]);
            break;
        }

        const mid = Math.floor((low + high) / 2);
        min = Math.min(min, arr[mid]);

        if (arr[low] <= arr[mid]) {
            // if left part is sorted, consider the right part
            low = mid + 1;
        } else {
            // else consider the left part.
            high = mid - 1;
        }
    }

    return Math.min(min, arr[low]);
}

export default findMin;
