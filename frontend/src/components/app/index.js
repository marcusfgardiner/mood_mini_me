import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            firstScaleScore: 50
        }
    }

    handleScaleChange = (event) => {
        this.setState({
            firstScaleScore: event.target.value
        });
    }

    handleMoodSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target)
        console.log(data.values)
        // const data = new Form
    }

render() {

    return (
        <div>
            <h1>Tamogotchi WellMo</h1>
            <form onSubmit={this.handleMoodSubmit}> 
                < input
                id = "firstScale"
                type = "range"
                min = "0"
                max = "100"
                name = "scaleInput"
                onChange = {
                    this.handleScaleChange
                }
                />
                <input type="submit" value="Enter Mood"/>
            </form>
            
            <h1>Score: {this.state.firstScaleScore} </h1>
        </div>
    );
    }
}

export default App;