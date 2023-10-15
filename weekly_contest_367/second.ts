function shortestBeautifulSubstring(s: string, k: number): string {
    let shortest = Infinity;
    for (let i = 0; i < s.length; i++) {
        let substr = "";
        let currOnes = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] === "1") {
                currOnes++;
            }
            substr += s[j];
            if (currOnes === k) {
                shortest = Math.min(shortest, substr.length);
            }
        }
    }
    if (shortest === Infinity) return "";
    const outputs: string[] = [];
    console.log(shortest);
    for (let i = 0; i < s.length; i++) {
        let substr = "";
        let currOnes = 0;
        for (let j = i; j < s.length; j++) {
            if (s[j] === "1") {
                currOnes++;
            }
            substr += s[j];
            if (currOnes === k && substr.length === shortest) {
                outputs.push(substr);
            }
        }
    }
    return outputs.sort()[0];
}
