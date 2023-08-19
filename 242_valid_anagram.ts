function isAnagram(s: string, t: string): boolean {
    const freq1: Record<string, number> = {};
    const freq2: Record<string, number> = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in freq1) {
            freq1[s[i]] += 1;
        } else {
            freq1[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (t[i] in freq2) {
            freq2[t[i]] += 1;
        } else {
            freq2[t[i]] = 1;
        }
    }

    console.log(freq1);
    console.log(freq2);

    return Object.keys(freq1).reduce((prev, curr) => {
        return prev && freq1[curr] === freq2[curr];
    }, true);
}
