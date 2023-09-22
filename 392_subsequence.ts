function isSubsequence(s: string, t: string, low = 0, prev = ""): boolean {
    const freq: Record<string, number[]> = {};
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (char in freq) {
            freq[char].push(i);
        } else {
            freq[char] = [i];
        }
    }

    let prevIndex = -Infinity;

    for (const char of s) {
        if (!(char in freq)) {
            return false;
        }

        if (freq[char].length === 0) return false;

        let temp = freq[char][0];
        while (freq[char].length > 0 && temp < prevIndex) {
            temp = freq[char].shift() as number;
        }

        if (temp < prevIndex) {
            return false;
        }

        prevIndex = temp;
        freq[char].shift();
    }

    return true;
}

console.log(isSubsequence("ab", "baab"));
