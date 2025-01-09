export function MergeSort(arr: Array<number>): Array<Array<number>> {
    const ArrayState: Array<Array<number>> = [];
    const n: number = arr.length;
    const temp: Array<number> = new Array(n);
    MergeSortHelper(arr, 0, n - 1, temp, ArrayState);
    return ArrayState;
}

function MergeSortHelper(arr: Array<number>, left: number, right: number, temp: Array<number>, ArrayState: Array<Array<number>>): void {
    if (left < right) {
        const mid: number = Math.floor((left + right) / 2);
        MergeSortHelper(arr, left, mid, temp, ArrayState);
        MergeSortHelper(arr, mid + 1, right, temp, ArrayState);
        Merge(arr, left, mid, right, temp, ArrayState);
    }
}

function Merge(arr: Array<number>, left: number, mid: number, right: number, temp: Array<number>, ArrayState: Array<Array<number>>): void {
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= right) {
        temp[k++] = arr[j++];
    }

    for (let l = left; l <= right; l++) {
        arr[l] = temp[l];
    }

    ArrayState.push([...arr]);
}