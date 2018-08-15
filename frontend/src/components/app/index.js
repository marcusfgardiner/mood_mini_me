import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            moodScore: 50
        }
    }

    handleScaleChange = (event) => {
        this.setState({
            moodScore: Number(event.target.value)
        });
    }

    handleMoodSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        fetch('http://localhost:3000/api/mood', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        console.log(this.state.moodScore)
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
                value = {
                    this.state.value
                }
                onChange = {
                    this.handleScaleChange
                }
                />
                <input type="submit" value="Enter Mood"/>
            </form>
            
            <h1>Score: {this.state.moodScore} </h1>
        </div>
    );
    }
}

export default App;