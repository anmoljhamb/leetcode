function util(arr: number[], low: number, high: number) {
    let sum = 0;
    const k = Math.min(arr[low], arr[high]);
    for (let i = low + 1; i < high; i++) {
        sum += Math.max(k - arr[i], 0);
    }
    return sum;
}

function trap(arr: number[]): number {
    let ans = 0;
    const left = [...arr];
    const right = [...arr];

    for (let i = 1; i < arr.length; i++) {
        left[i] = Math.max(left[i], left[i - 1]);
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i], right[i + 1]);
    }

    // console.log(arr);
    // console.log(left);
    // console.log(right);
    left[0] = 0;
    right[right.length - 1] = 0;

    arr.forEach((height, index) => {
        let temp = Math.min(left[index], right[index]) - height;
        if (temp < 0) {
            temp = 0;
        }
        ans += temp;
    });

    return ans;
}

export default trap;
