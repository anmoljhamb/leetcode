function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const original = x;
    let reversed = 0;
    let tens = Math.floor(Math.log10(x));
    while (x > 0) {
        reversed += Math.pow(10, tens) * (x % 10);
        x = Math.floor(x / 10);
        tens -= 1;
    }
    return original === reversed;
}
