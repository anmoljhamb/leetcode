function minimumRightShifts(arr: number[]): number {
    let index = -1;
    let flag = true;
    for (let i = 1; i < arr.length; i++) {
        if (flag && arr[i] < arr[i - 1]) {
            flag = false;
            index = i;
        } else if ((!flag && arr[i] > arr[index - 1]) || arr[i] < arr[i - 1]) {
            return -1;
        }
    }
    if (flag) return 0;
    return arr.length - index;
}

console.log(minimumRightShifts([92, 84, 37, 19, 16, 85, 20, 79, 25, 89]));
console.log(minimumRightShifts([3, 4, 5, 1, 2]));
console.log(minimumRightShifts([3, 4, 5, 1, 2, 6]));
