import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            moodScore: 50,
            existingMoodScores: []
        }
    }
    //TODO: Print existing records on the page
        //State is definitely read in 'moodScores.routes.js' -> can see it in backend console
    // Potential issues: 
    //(1) 'res.send' in moodScores.routes is not working
        // Understand if state is making it back to front end from back end
    // (2) Need to learn how to print complex state hash AFTER component updates with new data
        // iterate through Hash of existing mood scores and read off the '.moodScores'
    componentDidMount() {
        this.fetchExistingScores()
            .then(res => 
            this.setState({
                existingMoodScores: res.results
            })
            // console.log(this.state.existingMoodScores)
        )
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

render() {
    console.log(this.state.existingMoodScores)
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