class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseLL(head: ListNode | null) {
    let prev: ListNode | null = null;
    let temp = head;

    while (head) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
}

function printLL(head: ListNode | null): void {
    let curr = head;
    const arr: number[] = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    console.log(arr);
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let curr = reverseLL(head);
    let temp = curr;
    // printLL(curr);

    if (curr!.next === null) {
        return null;
    }

    let count = 1;

    if (n === 1) {
        return reverseLL(curr!.next);
    }

    while (++count <= n - 1) {
        curr = curr!.next;
    }
    // printLL(curr);

    curr!.next = curr!.next!.next;
    // printLL(curr);
    // printLL(temp);

    return reverseLL(temp);
}
