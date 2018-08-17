import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            moodScore: 50,
            existingMoodScores: {} 
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
        //TODO: Should this request be in the front end or in the controller?
        fetch('http://localhost:3000/api/mood', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
    }

//    componentDidMount() {
//        this.callAPI()
//        .then(res => this.setState({existingMoodScores: res.express }))
//        .catch(err => console.log(err));
//    }

//    callApi = async () => {
//        const response = await fetch('http://localhost:3000/api/existingMoods');
//        // response.json() returns a promise -> await and return its result
//        const body = await response.json()
//        return body
//    }

render() {

    return (
        <div>
            <h1>Kenkomon</h1>
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
            <h1>History of scores: </h1>
            <h1>Tamogotchi</h1>

        </div>
    );
    }
}

export default App;