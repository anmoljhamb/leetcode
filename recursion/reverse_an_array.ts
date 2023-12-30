function reverse(arr: number[]) {
    function recurse(low: number, high: number) {
        if (low >= high) return arr;
        arr[low] = arr[low] ^ arr[high];
        arr[high] = arr[low] ^ arr[high];
        arr[low] = arr[low] ^ arr[high];
        return recurse(low + 1, high - 1);
    }
    return recurse(0, arr.length - 1);
}

console.log(reverse([1, 2, 3, 4, 5]));
