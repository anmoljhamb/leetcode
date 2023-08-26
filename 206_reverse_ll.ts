class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let temp: ListNode | null = null;
    let low: ListNode | null = null;
    while (head && head?.val !== null) {
        temp = head.next;
        head.next = low;
        low = head;
        head = temp;
    }
    return low;
}
