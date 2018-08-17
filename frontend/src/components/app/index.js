import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            moodScore: 50,
            existingMoodScores: 0
        }
    }

    componentDidMount() {
        this.fetchExistingScores()
            .then(res => this.setState({
                existingMoodScores: res.results
            }
        ))
            .catch(err => console.log(err));
    }

    fetchExistingScores = async () => {
        // Don't need fully qualified route i.e. 'http...' due to "proxy" code in package.json file
        const response = await fetch('http://localhost:3000/api/existingMoods');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
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
//        this.callApi()
    //    .then(res => this.setState({existingMoodScores: res }))
    //    .catch(err => console.log(err));
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
            < h1 > History of scores: 
            TODO: iterate through Hash of existing mood scores and read off the '.moodScores'
            {this.state.existingMoodScores} </h1>
            <h1>Tamogotchi</h1>
        </div>
    );
    }
}

export default App;