function isPalindrome(s: string) {
    let low = 0,
        high = s.length - 1;

    while (low < high) {
        if (s[low] !== s[high]) return false;
        low++;
        high--;
    }

    return true;
}

function longestPalindrome(s: string): string {
    let maxSubstr = s[0];

    for (let i = 0; i < s.length; i++) {
        let currSubstr = "";
        for (let j = i; j < s.length; j++) {
            currSubstr += s[j];
            if (
                isPalindrome(currSubstr) &&
                currSubstr.length > maxSubstr.length
            ) {
                maxSubstr = currSubstr;
            }
        }
    }

    return maxSubstr;
}
