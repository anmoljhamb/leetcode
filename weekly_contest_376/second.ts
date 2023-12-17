function divideArray(arr: number[], k: number): number[][] {
    arr.sort((a, b) => a - b);

    const res: number[][] = [];
    for (let i = 0; i < arr.length; i += 3) {
        if (arr[i + 2] - arr[i] > k) return [];
        res.push([arr[i], arr[i + 1], arr[i + 2]]);
    }

    return res;
}

console.log(divideArray([6, 10, 5, 12, 7, 11, 6, 6, 12, 12, 11, 7], 2));
