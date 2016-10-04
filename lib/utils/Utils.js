'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isEqual = function isEqual(that, obj) {
    if (obj !== that) {
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != (typeof that === 'undefined' ? 'undefined' : _typeof(that))) return false;
        if (obj instanceof Array && that instanceof Array) return obj.sort().toString() == that.sort().toString();
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && (typeof that === 'undefined' ? 'undefined' : _typeof(that)) == 'object') {
            if (Object.keys(that).sort().toString() != Object.keys(obj).sort().toString()) return false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(that)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (!isEqual(that[i], obj[i])) return false;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
        return false;
    }
    return true;
};

Object.isEqual = isEqual;