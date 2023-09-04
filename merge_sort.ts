const merge_sort = (arr: number[], low: number, high: number) => {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);

    // console.log(`(${low}, ${high}) : mid=${mid}`);
    // console.log(arr);

    merge_sort(arr, low, mid);
    merge_sort(arr, mid + 1, high);

    const temp: number[] = [];
    let x = low;
    let y = mid + 1;
    while (x <= mid && y <= high) {
        if (arr[x] < arr[y]) {
            temp.push(arr[x]);
            x++;
        } else {
            temp.push(arr[y]);
            y++;
        }
    }

    while (x <= mid) {
        temp.push(arr[x]);
        x++;
    }

    while (y <= high) {
        temp.push(arr[y]);
        y++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    // console.log(arr);
};

const sort = (arr: number[]): void => {
    merge_sort(arr, 0, arr.length - 1);
};

export default sort;
