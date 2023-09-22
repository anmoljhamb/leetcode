function isSubsequence(s: string, t: string): boolean {
    let left = 0,
        right = 0;

    while (left < s.length && right < t.length) {
        while (right < t.length && s[left] !== t[right++]) {}
        left++;
    }

    if (left === s.length && right === t.length) {
        if (s[left - 1] === t[right - 1]) return true;
    }

    return right < t.length;
}

console.log(isSubsequence("xab", "baab"));
console.log(isSubsequence("ab", "baab"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
console.log(isSubsequence("abc", "abhgdc"));
console.log(isSubsequence("a", "b"));
