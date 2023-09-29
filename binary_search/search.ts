const search = (arr: number[], target: number) => {
    let low = 0,
        high = arr.length - 1;
    let mid: number;

    while (low <= high) {
        mid = Math.floor(low + high) / 2;
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) high = mid - 1;
        else low = mid + 1;
    }

    return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], -2));
