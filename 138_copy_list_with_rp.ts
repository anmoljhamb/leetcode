class ListNode {
    val: number;
    next: ListNode | null;
    random: ListNode | null;
    constructor(val?: number, next?: ListNode, random?: ListNode) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

function copyRandomList(head: ListNode | null): ListNode | null {
    const hash = new Map<ListNode, ListNode>();
    const ans = new ListNode();

    let curr: ListNode | null;
    let currA: ListNode | null;

    curr = head;
    currA = ans;

    while (curr) {
        const copy = new ListNode(curr.val);
        currA.next = copy;
        hash.set(curr, copy);
        curr = curr.next;
        currA = currA!.next;
    }

    curr = head;
    currA = ans.next;

    while (curr) {
        if (curr.random === null) {
            currA!.random = null;
        } else {
            currA!.random = hash.get(curr.random!) ?? null;
        }
        curr = curr.next;
        currA = currA!.next;
    }

    return ans.next;
}
