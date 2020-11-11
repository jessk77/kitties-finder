import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css'

class App extends Component{
      constructor(){
            super();
            this.state= {
                  kitties: [],
                  searchField: ""
            }
      }

      componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({kitties: users}))
      }

      onSearchChange = event =>{
            this.setState({searchField:event.target.value});
      }

      render(){
            const {kitties,searchField} = this.state;
            const filteredKitties = kitties.filter(item=>
                  item.username.toLowerCase().includes(searchField.toLowerCase())
            );
            return(
                 <div className="App">
                       <h1>Kitties Finder</h1>
                       <SearchBox placeholder={"Search kitties"} changeHandler={this.onSearchChange}></SearchBox>
                       <CardList kitties={filteredKitties}></CardList>
                 </div>
            )
      }
}

export default App;
