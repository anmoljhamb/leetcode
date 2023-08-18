function productExceptSelf(arr: number[]): number[] {
    const product = arr.reduce((prev, curr) => prev * curr, 1);
    const leftArr = [...arr];
    for (let i = 1; i < arr.length; i++) {
        leftArr[i] *= leftArr[i - 1];
    }
    const rightArr: number[] = [...arr];
    for (let i = arr.length - 2; i >= 0; i--) {
        rightArr[i] *= rightArr[i + 1];
    }
    return arr.map((num, index) => {
        const left = index === 0 ? 1 : leftArr[index - 1];
        const right = index === arr.length - 1 ? 1 : rightArr[index + 1];
        return left * right;
    });
}
