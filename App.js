import React, {Component} from "react"

class App extends Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render', this.state.count)
        return (
            <div className="App" style={{margin: 'auto', width: '300px'}}>
                <button onClick={this.increment}>+</button>
                <span style={{margin: '0 0.75rem', display: 'inline-block'}}>{this.state.count}</span>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default App;