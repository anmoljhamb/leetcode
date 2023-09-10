function subtract(a: number, b: number) {
    return Math.abs(a - b);
}

function isReachableAtTime(
    sx: number,
    sy: number,
    fx: number,
    fy: number,
    t: number
): boolean {
    let d = subtract(sx, fx) + subtract(sy, fy);

    if (d === t) {
        return true;
    }

    if (d === 0 && t === 1) {
        return false;
    }

    if (d > t) {
        d -= Math.min(subtract(sx, fx), subtract(sy, fy));
        if (d > t) {
            return false;
        }
        return true;
    }

    return true;
}
