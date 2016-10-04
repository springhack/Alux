'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //Import module


var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Define events
var events = {
  CHANGE_NAME: Symbol()
};

//Combine reducers
var reducers = _main2.default.combineReducers({
  change: function change(action) {
    var state = arguments.length <= 1 || arguments[1] === undefined ? { name: 'Alxw' } : arguments[1];

    switch (action.type) {
      case events.CHANGE_NAME:
        var ret = Object.assign({}, state);
        ret.name = action.name;
        return ret;
        break;
      default:
        return state;
        break;
    }
  }
});

//Create store
var store = _main2.default.createStore(reducers);

//Combine actions
var actions = _main2.default.combineActions({
  change: function change() {
    return {
      type: events.CHANGE_NAME,
      name: 'SpringHack'
    };
  }
}, store);

//A fake react class

var ReactComponent = function () {
  function ReactComponent() {
    //Nothing

    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'setState',
    value: function setState(state) {
      this.state = state;
    }
  }]);

  return ReactComponent;
}();

//Just see it as react component


var App = function (_ReactComponent) {
  _inherits(App, _ReactComponent);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    store.connect(_this);
    console.log('Initial state:', _this.state);
    return _this;
  }

  _createClass(App, [{
    key: 'onChange',
    value: function onChange() {
      actions.change();
      console.log('Changed state:', this.state);
    }
  }]);

  return App;
}(ReactComponent);

//Test it


var app = new App();
app.onChange();