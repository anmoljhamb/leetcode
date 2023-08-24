const getPos = (s: string) => {
    const t = s.toUpperCase();
    let temp = t.charCodeAt(0) - "A".charCodeAt(0);

    if (
        s.charCodeAt(0) >= "A".charCodeAt(0) &&
        s.charCodeAt(0) <= "Z".charCodeAt(0)
    ) {
        return temp + 26;
    }

    return temp;
};

const hashString = (s: string) => {
    const hashMap: number[] = new Array(52).fill(0);
    for (let i = 0; i < s.length; i++) {
        hashMap[getPos(s[i])]++;
    }
    return hashMap;
};

const compare = (arr1: number[], arr2: number[]) => {
    for (let i = 0; i < 52; i++) {
        if (arr1[i] < arr2[i]) {
            return false;
        }
    }
    return true;
};

function minWindow(s: string, t: string): string {
    const hash1 = hashString(t);
    const hash2: number[] = new Array(52).fill(0);

    let low = 0,
        high = 0;
    let minStringLen = Infinity;
    let minString = "";

    while (high < s.length) {
        hash2[getPos(s[high])]++;
        while (compare(hash2, hash1)) {
            if (high - low + 1 <= minStringLen) {
                minStringLen = high - low + 1;
                minString = s.substring(low, high + 1);
            }
            hash2[getPos(s[low])]--;
            low++;
        }
        high++;
    }

    return minString;
}

export default minWindow;
