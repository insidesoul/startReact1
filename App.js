import React, {Component} from "react"

class App extends Component {
    state = {
        count: +localStorage.getItem('count') || 0,
        start: true,
    };

    startStop = () => {
        this.state.start ?  this.setState({start: false}) : this.setState({start: true})

        this.state.start ?
            (this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1});}, 1000)) :
            clearInterval(this.timerId)
    }

    reset = () => {
        this.setState({count: 0, start: true})
        clearInterval(this.timerId)
    }

    componentDidUpdate() {
        localStorage.setItem('count', this.state.count)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div className="App" style={{margin: 'auto', width: '300px', textAlign: "center"}}>
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.startStop}>{this.state.start ? 'Start' : 'Stop'}</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default App;