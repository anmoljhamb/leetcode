class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
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

function reorderList(head: ListNode | null): void {
    if (!head) return;

    let slow: ListNode | null = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        fast = fast!.next;
        fast = fast!.next;
        slow = slow!.next;
    }

    let secondHalf = slow!.next;
    slow!.next = null;

    secondHalf = reverseLL(secondHalf);

    let curr: ListNode | null = head;
    while (curr && secondHalf) {
        let temp1 = curr.next;
        let temp2 = secondHalf!.next;
        curr.next = secondHalf;
        secondHalf!.next = temp1;
        secondHalf = temp2;
        curr = temp1;
    }
}
