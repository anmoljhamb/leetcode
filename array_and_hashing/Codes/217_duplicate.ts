function containsDuplicate(arr: number[]): boolean {
    const set = new Set<number>();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return true;
        }
        set.add(arr[i]);
    }
    return false;
}
