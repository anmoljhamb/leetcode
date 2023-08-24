const getPos = (s: string) => {
    return s.charCodeAt(0) - "a".charCodeAt(0);
};

const stringHash = (s: string) => {
    const hashMap = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        hashMap[getPos(s[i])]++;
    }
    return hashMap;
};

function checkInclusion(s1: string, s2: string): boolean {
    const hash1 = stringHash(s1);

    let low = 0,
        high = 0;

    const hash2 = new Array(26).fill(0);

    for (high = 0; high < s2.length; high++) {
        hash2[getPos(s2[high])]++;
        while (low < high && hash1[getPos(s2[low])] < hash2[getPos(s2[low])]) {
            hash2[getPos(s2[low])]--;
            low++;
        }
        if (hash2.toString() === hash1.toString()) {
            return true;
        }
    }

    return false;
}
