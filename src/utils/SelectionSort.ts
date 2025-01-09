

export function SelectionSort(arr: Array<number>) {
    const n: number = arr.length;
    const ArrayState: Array<Array<number>> = [];
    for (let i = 0; i < n - 1; i++) {
        let minIndex: number = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp: number = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        ArrayState.push([...arr]);

    }
    return ArrayState;
}