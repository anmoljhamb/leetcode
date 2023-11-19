function findMinimumOperations(s1: string, s2: string, s3: string): number {
    const n = Math.min(s1.length, s2.length, s3.length);
    let i = 0;
    for (; i < n; i++) {
        if (!(s1[i] === s2[i] && s2[i] === s3[i])) {
            if (i === 0) return -1;
            break;
        }
    }
    return s1.length - i + s2.length - i + s3.length - i;
}

console.log(findMinimumOperations("a", "aabc", "a"));
console.log(findMinimumOperations("dac", "bac", "cac"));
console.log(findMinimumOperations("a", "a", "a"));
