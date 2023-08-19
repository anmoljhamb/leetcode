function containsDuplicate(arr: number[]): boolean {
    const set = new Set<number>();
    arr.forEach((num) => set.add(num));
    return set.size !== arr.length;
}
