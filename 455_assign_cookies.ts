function findContentChildren(children: number[], cookies: number[]): number {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let count = 0;
    let cookieIdx = 0;
    for (
        let i = 0;
        i < children.length && cookieIdx < cookies.length;
        i++, cookieIdx++
    ) {
        if (children[i] <= cookies[cookieIdx]) count++;
        else {
            while (
                cookieIdx < cookies.length &&
                children[i] > cookies[cookieIdx]
            ) {
                cookieIdx++;
            }
            if (cookieIdx === cookies.length) break;
            count++;
        }
    }

    return count;
}
