function minProcessingTime(processorTime: number[], tasks: number[]): number {
    let maxTime = -Infinity;
    tasks = tasks.sort((a, b) => a - b);
    processorTime = processorTime.sort((a, b) => a - b);

    let right = tasks.length - 1;
    for (let i = 0; i < processorTime.length; i++) {
        let currMax = -Infinity;
        let j = right;
        for (j = right; j > right - 4; j--) {
            currMax = Math.max(currMax, tasks[j]);
        }
        right = j;
        maxTime = Math.max(maxTime, currMax + processorTime[i]);
    }

    return maxTime;
}
