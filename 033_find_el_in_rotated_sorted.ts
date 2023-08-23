function search(arr: number[], target: number): number {
    let low = 0,
        high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;

        if (arr[low] <= arr[mid]) {
            // left sorted array.
            if (target > arr[mid] || target < arr[low]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            // right sorted array.
            if (target < arr[mid] || target > arr[high]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    return -1;
}
