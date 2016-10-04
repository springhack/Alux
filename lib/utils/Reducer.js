"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineReducers = combineReducers;
function combineReducers(arr) {
    var ret = {
        multi: true,
        func: {}
    };
    for (var func in arr) {
        ret.func[func] = arr[func];
    }return ret;
}