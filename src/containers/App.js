import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import 'tachyons'
import './App.css'



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField: '',
            robots: []
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json()).then(users => {
            this.setState({robots:users})
        })
    }

    searchRobots = (event) => {
        this.setState({searchField:event.target.value.toLowerCase()})
    }

    render(){
        const {robots,searchField} = this.state
        const filterdRobots = robots.filter((robot)=>{
            if (
             //checking for a match in name or email
                 robot.name.toLowerCase().includes(searchField) || 
                 robot.email.toLowerCase().includes(searchField)){ return true}
        });

        return !robots.length? <h1 className='tc'>loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox onSearch = {this.searchRobots}/>
                <Scroll>
                    <CardList robots={filterdRobots}/>
                </Scroll>
               
            </div>
    
        );
    }
}

export default App