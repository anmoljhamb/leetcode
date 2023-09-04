function findDuplicate(arr: number[]): number {
    let slow = 0;
    let fast = 0;

    // convert it into a linked list, and stop it when it detects the loop.
    while (true) {
        slow = arr[slow];
        fast = arr[arr[fast]];
        if (slow === fast) {
            break;
        }
    }

    // Use the floyd's algorithm.

    let slow2 = 0;
    while (true) {
        slow = arr[slow];
        slow2 = arr[slow2];
        if (slow === slow2) {
            return slow;
        }
    }
}
