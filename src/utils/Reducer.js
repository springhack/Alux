export function combineReducers(arr) {
    let ret = {
        multi : true,
        func : {}
    };
    for (let func in arr)
        ret.func[func] = arr[func];
    return ret;
}
