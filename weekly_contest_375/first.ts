function countTestedDevices(batteryPercentages: number[]): number {
    let testDevices = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] > 0) {
            testDevices++;
            for (let j = i + 1; j < batteryPercentages.length; j++) {
                batteryPercentages[j] = Math.max(batteryPercentages[j] - 1, 0);
            }
        }
    }

    return testDevices;
}
