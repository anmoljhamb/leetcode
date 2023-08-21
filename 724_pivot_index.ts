function pivotIndex(arr: number[]): number {
    const prefixSum = [...arr];
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] += prefixSum[i - 1];
    }
    const totalSum = prefixSum[prefixSum.length - 1];
    // console.log(`totalSum: ${totalSum}`);
    for (let i = 0; i < prefixSum.length; i++) {
        // console.log(
        //     `i=${i} prefixSum[i-1]=${prefixSum[i - 1]}, prefixSum[i]=${
        //         prefixSum[i]
        //     } totalSum-prefixSum[i]=${totalSum - prefixSum[i]}`
        // );
        if (i === 0 && 0 === totalSum - prefixSum[i]) {
            return i;
        }
        if (prefixSum[i - 1] === totalSum - prefixSum[i]) {
            return i;
        }
    }
    return -1;
}
