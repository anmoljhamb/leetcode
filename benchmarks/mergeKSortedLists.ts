class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function convertArrayToLL(arr: number[]) {
  const dummy = new ListNode();
  let tail = dummy;

  arr.forEach((x) => {
    tail.next = new ListNode(x);
    tail = tail.next;
  });

  return dummy.next;
}

function printLL(head: ListNode | null) {
  while (head) {
    console.log(head.val);
    head = head.next!;
  }
}

function mergeKSorted1(lists: Array<ListNode | null>): number {
  let count = 0;

  return count;
}

function mergeKSorted2(lists: Array<ListNode | null>): number {
  let count = 0;

  return count;
}

function main() {
  const k = 5;
  const n = 10;
  const arr: number[][] = [...new Array(k)].map(() => {
    return [...new Array(n)].map((_, i) => i + 1);
  });

  const lists: Array<ListNode | null> = arr.map(convertArrayToLL);
  const method1 = mergeKSorted1(lists);
  const method2 = mergeKSorted2(lists);

  console.log(`for k=${k} and n=${n}`);
  console.log(`method1, comparisons: ${method1}`);
  console.log(`method2, comparisons: ${method2}`);
}

main();
