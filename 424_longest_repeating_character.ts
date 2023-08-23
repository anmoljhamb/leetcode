const getPos = (s: string) => {
    return s.charCodeAt(0) - "A".charCodeAt(0);
};

function characterReplacement(s: string, k: number): number {
    let low = 0,
        high = 0;
    let maxLength = 0;
    const hashMap: number[] = new Array(26).fill(0);

    while (high < s.length) {
        hashMap[getPos(s[high])]++;
        while (high - low + 1 - Math.max(...hashMap) > k) {
            hashMap[getPos(s[low])]--;
            low++;
        }
        maxLength = Math.max(maxLength, high - low + 1);
        high++;
    }

    return maxLength;
}
