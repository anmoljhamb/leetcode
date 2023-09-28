const charCode = (s: string) => {
    return s.charCodeAt(0) - "a".charCodeAt(0);
};

function isDigit(s: string) {
    return charCode(s) >= charCode("0") && charCode(s) <= charCode("9");
}

function decodeAtIndex(s: string, k: number): string {
    let decodedLength = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (isDigit(char)) {
            decodedLength *= parseInt(char);
        } else {
            decodedLength++;
        }
    }

    for (let i = s.length - 1; i > -1; i--) {
        const char = s[i];

        if (isDigit(char)) {
            decodedLength = Math.floor(decodedLength / parseInt(char));
            k %= decodedLength;
        } else {
            if (decodedLength === 0 || decodedLength === k) return char;
            decodedLength--;
        }
    }

    return "";
}
