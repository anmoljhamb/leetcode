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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const ans = new ListNode(0, head);
    let dummy: ListNode | null = ans;
    let tail: ListNode | null = head;

    while (tail) {
        tail = head;
        for (let i = 0; i < k - 1; i++) {
            if (!tail) break;
            tail = tail.next;
        }
        if (!tail) {
            dummy!.next = head;
            break;
        }
        let temp = tail!.next;
        tail!.next = null;
        dummy!.next = reverseLL(head);
        dummy = head;
        head = temp;
    }

    return ans.next;
}
