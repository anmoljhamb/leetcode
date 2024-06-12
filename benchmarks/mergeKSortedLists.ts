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

function mergeTwo(list1: ListNode | null, list2: ListNode | null) {
  const dummy = new ListNode();
  let tail = dummy;

  let count = 0;

  while (list1 && list2) {
    count++;
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next!;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next!;
  }

  if (list1) {
    tail.next = list1;
  }

  if (list2) {
    tail.next = list2;
  }

  return [dummy.next, count];
}

function printLL(head: ListNode | null) {
  while (head) {
    console.log(head.val);
    head = head.next!;
  }
}

function mergeKSorted1(lists: Array<ListNode | null>): number {
  let count = 0;

  if (lists.length == 0) return 0;

  let dummy: ListNode | null = lists[0];

  for (let i = 1; i < lists.length; i++) {
    const [temp1, temp2] = mergeTwo(dummy, lists[i]);
    count += temp2 as number;
    dummy = temp1 as ListNode | null;
  }

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
