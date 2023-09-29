const ord = (a: string): number => a.charCodeAt(0);

const isAlphaNum = (s: string) => {
    const temp = ord(s);
    return (
        (temp >= ord("0") && temp <= ord("9")) ||
        (temp >= ord("a") && temp <= ord("z")) ||
        (temp >= ord("A") && temp <= ord("Z"))
    );
};

function isPalindrome(s: string) {
    let low = 0,
        high = s.length - 1;

    while (low < high) {
        while (low < high && !isAlphaNum(s[low])) low++;
        while (low < high && !isAlphaNum(s[high])) high--;

        if (s[low].toLowerCase() !== s[high].toLowerCase()) return false;
        low++;
        high--;
    }

    return true;
}
