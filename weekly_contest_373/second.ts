const isVowel = (s: string) =>
    s === "a" || s === "e" || s === "i" || s === "o" || s === "u";

function beautifulSubstrings(s: string, k: number): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let vowel = 0;
        let notVowel = 0;
        let currSubstr = "";
        for (let j = i; j < s.length; j++) {
            currSubstr += s[j];
            if (isVowel(s[j])) vowel++;
            else notVowel++;

            if (vowel === notVowel && (vowel * notVowel) % k === 0) {
                count++;
            }
        }
    }
    return count;
}
