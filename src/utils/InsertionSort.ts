export function InsertionSort(arr: Array<number>)
{
    const n = arr.length;
    const ArrayState: Array<Array<number>> = [];
    for (let i = 0; i < n; i++)
        {
            ArrayState.push([...arr]);
            if (i > 0)
                {
                    const key = arr[i];
                    let j = i - 1;
                    while (j >= 0 && key < arr[j])
                        {
                            arr[j + 1] = arr[j];
                            j--;
                            }
                    arr[j + 1] = key;
                    }
                    }
                    return ArrayState;
}