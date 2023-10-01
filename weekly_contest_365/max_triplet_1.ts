function maximumTripletValue(arr: number[]): number {
    let maxResult = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                maxResult = Math.max(
                    maxResult,
                    Math.max((arr[i] - arr[j]) * arr[k], 0)
                );
            }
        }
    }
    return maxResult;
}
