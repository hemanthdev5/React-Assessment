import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textinput from './Textinput/Textinput';
import Dropdown from './Dropdown/Dropdown';

class App extends React.Component {
  constructor(){
     super();
     this.state = { value: null}
     this.change = this.change.bind(this)
  }
  
  change(value){
     this.setState({value})
  }
  
  render(){
     return(
        <div>
           <Textinput value={this.state.value}/>
           <Dropdown value={this.state.value} change={this.change}/>
        </div>
     )
  }      
}

export default App;