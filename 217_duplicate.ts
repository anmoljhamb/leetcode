function containsDuplicate(arr: number[]): boolean {
    const freq: Record<number, number> = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in freq) {
            return true;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return false;
}
