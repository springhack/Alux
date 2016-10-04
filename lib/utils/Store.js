'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createStore = createStore;

require('./Utils.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store(reducer) {
        _classCallCheck(this, Store);

        this.state = {};
        this.reducer = reducer;
        this.components = [];
        this.dispatch({
            type: Symbol()
        });
    }

    _createClass(Store, [{
        key: 'connect',
        value: function connect(component) {
            this.components.push(component);
            if (component.state) component.state.alux = this.state;else component.state = {
                alux: this.state
            };
        }
    }, {
        key: 'dispatch',
        value: function dispatch(action) {
            var ret = this.state;
            if (this.reducer.multi) {
                for (var re in this.reducer.func) {
                    ret[re] = this.reducer.func[re](action, Object.assign({}, ret[re]));
                }
            } else ret = this.reducer(action, Object.assign({}, this.state));
            if (!Object.isEqual(ret, this.state)) ;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var c = _step.value;

                    c.setState({
                        alux: ret
                    });
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
        }
    }]);

    return Store;
}();

function createStore(reducer) {
    return new Store(reducer);
}