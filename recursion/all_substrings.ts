function substrings(s: string) {
    for (let i = 0; i < s.length; i++) {
        let ans = "";
        for (let j = i; j < s.length; j++) {
            ans += s[j];
            console.log(ans);
        }
    }
}

function substringsRecur(s: string, low = 0, prev = "") {
    if (low === s.length) {
        console.log(prev);
        return;
    }
    console.log(s[low]);
    substringsRecur(s, low + 1, prev + s[low]);
}

substringsRecur("babad");
