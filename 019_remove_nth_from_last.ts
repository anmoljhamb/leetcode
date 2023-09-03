class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);

    let left: ListNode | null = dummy;
    let right: ListNode | null = dummy.next;

    while (n--) {
        right = right!.next;
    }

    while (right) {
        right = right!.next;
        left = left!.next;
    }

    left!.next = left!.next!.next;

    return dummy.next;
}
