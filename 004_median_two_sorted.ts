function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const a = nums1.length < nums2.length ? nums1 : nums2;
    const b = nums1.length < nums2.length ? nums2 : nums1;

    const total = a.length + b.length;
    const half = Math.floor(total / 2);

    let low = 0,
        high = a.length - 1;

    while (true) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = half - mid1 - 2;

        const a_left = mid1 >= 0 ? a[mid1] : -Infinity;
        const a_right = mid1 + 1 < a.length ? a[mid1 + 1] : Infinity;

        const b_left = mid2 >= 0 ? b[mid2] : -Infinity;
        const b_right = mid2 + 1 < b.length ? b[mid2 + 1] : Infinity;

        if (a_left <= b_right && b_left <= a_right) {
            if (total % 2 === 1) {
                return Math.min(a_right, b_right);
            }
            return (Math.max(a_left, b_left) + Math.min(a_right, b_right)) / 2;
        }

        if (a_left > b_right) {
            // means that there are too many elements in the left array
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }

    return 0;
}
