import './Utils.js';

class Store {
    constructor(reducer) {
        this.state = {};
        this.reducer = reducer;
        this.components = [];
        this.dispatch({
            type : Symbol()
        });
    }
    connect(component) {
        this.components.push(component);
        if (component.state)
            component.state.alux = this.state;
        else
            component.state = {
                alux : this.state
            };
    }
    dispatch(action) {
        let ret = this.state;
        if (this.reducer.multi)
        {
            for (let re in this.reducer.func)
                ret[re] = this.reducer.func[re](action, Object.assign({}, ret[re]));
        } else
            ret = this.reducer(action, Object.assign({}, this.state));
        if (!Object.isEqual(ret, this.state));
            for (let c of this.components)
                c.setState({
                    alux : ret
                });
    }
}

export function createStore(reducer) {
    return new Store(reducer);
}
