const charCode = (s: string) => {
    return s.charCodeAt(0) - "a".charCodeAt(0);
};

function findTheDifference(s: string, t: string): string {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let sum1 = 0;
    for (const char of s) {
        sum1 += charCode(char);
    }

    let sum2 = 0;
    for (const char of t) {
        sum2 += charCode(char);
    }

    return letters[sum2 - sum1];
}
