# Alux
A flux framework for react.js

[![Build Status](https://travis-ci.org/springhack/Alux.svg?branch=master)](https://travis-ci.org/springhack/Alux)

A example:

```javascript
//Import module
import Alux from 'alux';
import React from 'react';
import ReactDOM from 'react-dom';

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
  change() {
    return {
      type : events.CHANGE_NAME,
      name : 'SpringHack'
    }
  }
}, store);

//Connect react component
class App extends React.Component {
  constructor(props) {
    super(props);
    store.connect(this);
  }
  render() {
    return (
        <div>
            I love {this.state.alux.change.name} !<br />
            <button onClick={actions.change}>Change</button>
        </div>
    );
  }
}
 
//Render component
ReactDOM.render(<App />, document.getElementById('container'));
```
