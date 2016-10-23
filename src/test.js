//Import module
import Alux from './main.js';
import 'babel-polyfill';

//Define events
let events = {
  CHANGE_NAME : Symbol()
};

//Combine reducers
let reducers = Alux.combineReducers({
  change(action, state = {name:'Alxw'}) {
    switch (action.type)
    {
      case events.CHANGE_NAME:
        let ret = Object.assign({}, state);
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
let store = Alux.createStore(reducers);

//Combine actions
let actions = Alux.combineActions({
  change(name) {
    return {
      type : events.CHANGE_NAME,
      name : name
    }
  }
}, store);

//A fake react class
class ReactComponent {
    constructor() {
        //Nothing
    }
    setState(state) {
        this.state = state;
    }
}

//Just see it as react component
class App extends ReactComponent {
    constructor(props) {
        super(props);
        store.connect(this);
        console.log('Initial state:', this.state);
    }
    onChange() {
        actions.change('SpringHack');
        console.log('Changed state:', this.state);
    }
}

//Test it
let app = new App();
app.onChange();
