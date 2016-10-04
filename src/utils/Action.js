export function combineActions(arr, store) {
    let act = {};
    for (let ac in arr)
        act[ac] = () => store.dispatch(arr[ac]());
    return act;
}
