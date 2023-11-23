function singleNumber(arr: number[]): number {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res ^= arr[i];
    }
    return res;
}
