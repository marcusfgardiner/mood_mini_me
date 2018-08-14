import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            firstScaleScore: 50
        }
    }

    // handleScaleChange = event => {
    //     this.setState({
    //         firstScaleScore: event.target.value
    //     });
    // }

render() {
    return (
        <div>
            <h1>Tamogotchi WellMo</h1>
            < input
                id="firstScale"
                type="range"
                min="0"
                max="100"
                name="scaleInput"
                onChange={this.handleScaleChange}
                />
            <h1>Score: {this.state.firstScaleScore} </h1>
        </div>
    );
    }
}

export default App;