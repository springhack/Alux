import './Utils.js';

class Store {
    constructor(reducer) {
        this.state = undefined;
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
            if (ret == undefined)
                ret = {};
            for (let re in this.reducer.func)
                ret[re] = this.reducer.func[re](action, ret[re]);
        } else
            ret = this.reducer(action, ret);
        this.state = ret;
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
