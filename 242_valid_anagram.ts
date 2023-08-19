function makeKey(str: string): string {
    const temp = "a".charCodeAt(0);
    const count = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        count[str.charCodeAt(i) - temp] += 1;
    }
    return count.join("-");
}

function isAnagram(s: string, t: string): boolean {
    return makeKey(s) === makeKey(t);
}
