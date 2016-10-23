"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineActions = combineActions;
function combineActions(arr, store) {
    var act = {};

    var _loop = function _loop(ac) {
        act[ac] = function () {
            return store.dispatch(arr[ac].apply(arr, arguments));
        };
    };

    for (var ac in arr) {
        _loop(ac);
    }return act;
}