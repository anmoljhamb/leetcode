const charCode = (s: string) => {
    return s.charCodeAt(0) - "a".charCodeAt(0);
};

const hashmap = (s: string) => {
    const hash: number[] = new Array(26).fill(0);
    for (const char of s) {
        hash[charCode(char)]++;
    }
    return hash;
};

function findTheDifference(s: string, t: string): string {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const hash1 = hashmap(s);
    const hash2 = hashmap(t);

    for (let i = 0; i < 26; i++) {
        if (hash1[i] !== hash2[i]) {
            return letters[i];
        }
    }

    return "a";
}
