class Store {
    constructor(initialState, reducer) {
        this.state = initialState;
        this.reducer = reducer;
        this.components = [];
        if (this.reducer.multi)
        {
            let old = this.state;
            let ret = {};
            for (let re in this.reducer.func)
                ret[re] = Object.assign({}, old);
            this.state = ret;
        }
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
        if (this.reducer.multi)
        {
            let ret = this.state;
            for (let re in this.reducer.func)
                ret[re] = this.reducer.func[re](action, ret[re]);
            this.state = ret;
        } else
            this.state = this.reducer(action, this.state);
        for (let c of this.components)
            c.setState({
                alux : this.state
            });
    }
}

export function createStore(initialState, reducer) {
    return new Store(initialState, reducer);
}
