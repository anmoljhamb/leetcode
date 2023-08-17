function threeSum(arr: number[]): number[][] {
    const ans: number[][] = [];

    arr = arr.sort((a, b) => a - b);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (i >= 0 && arr[i - 1] === arr[i]) {
            continue;
        }
        let low = i + 1;
        let high = arr.length - 1;
        while (low < high) {
            const temp = arr[i] + arr[low] + arr[high];
            if (temp === 0) {
                ans.push([arr[i], arr[low], arr[high]]);
                low++;
                while (arr[low] === arr[low - 1] && low < high) {
                    low++;
                }
            } else if (temp > 0) {
                high--;
            } else {
                low++;
            }
        }
    }

    return ans;
}
