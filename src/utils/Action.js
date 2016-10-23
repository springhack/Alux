export function combineActions(arr, store) {
    let act = {};
    for (let ac in arr)
        act[ac] = (...rest) => store.dispatch(arr[ac](...rest));
    return act;
}
