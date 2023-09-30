function minOperations(nums: number[], k: number): number {
    const set = new Set<number>();
    let count = 0;
    while (set.size !== k && nums.length > 0) {
        let temp = nums.pop() as number;
        if (temp <= k) {
            set.add(temp);
        }
        count++;
    }
    return count;
}
