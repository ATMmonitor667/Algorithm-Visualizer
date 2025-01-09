const BubbleSort = (arr: Array<number>)=>
{
    const n = arr.length;
    const ArrayState: Array<Array<number>> = [];
    for (let i = 0; i < n - 1; i++)
        {
            for (let j = 0; j < n - i - 1; j++)
                {
                    if (arr[j] > arr[j + 1])
                        {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                            }
                            }
                            ArrayState.push([...arr]);
                            }
                            return ArrayState;

}
export default BubbleSort;