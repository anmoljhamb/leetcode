function util(arr: number[], low: number, high: number) {
    let sum = 0;
    const k = Math.min(arr[low], arr[high]);
    for (let i = low + 1; i < high; i++) {
        sum += k - arr[i];
    }
    return sum;
}

function trap(arr: number[]): number {
    let i = 0;
    let ans = 0;
    while (i < arr.length - 1) {
        // console.log(`Finding the next index for ${i}`);
        let j = i + 1;
        // Find the first j st arr[j] >= arr[i]
        while (j < arr.length && arr[j] < arr[i]) j++;
        if (j !== arr.length) {
            ans += util(arr, i, j);
            // console.log(`(${i}, ${j})`);
            i = j;
        } else {
            i++;
        }
    }
    return ans;
}

export default trap;
