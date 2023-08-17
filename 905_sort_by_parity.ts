function sortArrayByParity(nums: number[]): number[] {
    const evens = nums.filter((num) => num % 2 === 0);
    const odds = nums.filter((num) => num % 2 === 1);
    return [...evens, ...odds];
}
