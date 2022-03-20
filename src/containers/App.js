import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { robots } from '../components/robots'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],//robots
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json).then(users => this.setState({ robots: robots }));
        document.body.style.zoom = "80%";
    }
    //useEffect = () => document.body.style.zoom = "100%";

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (

                <div className="tc" >
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox SearchChange={this.onSearchChange} />
                    <Scroll>
                        {<CardList robots={filteredRobots} />}
                    </Scroll>
                </div>


            );
        }
    }
}

export default App;