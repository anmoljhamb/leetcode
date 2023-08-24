const getPos = (s: string) => {
    return s.charCodeAt(0) - "A".charCodeAt(0);
};

function characterReplacement(s: string, k: number): number {
    let low = 0,
        high = 0;
    let maxLength = 0;
    const hashmap = new Array(26).fill(0);
    let maxFreq = 0;

    for (high = 0; high < s.length; high++) {
        hashmap[getPos(s[high])]++;
        maxFreq = Math.max(maxFreq, ...hashmap);

        while (high - low + 1 - maxFreq > k) {
            hashmap[getPos(s[low])]--;
            low++;
        }

        maxLength = Math.max(maxLength, high - low + 1);
    }

    return maxLength;
}
