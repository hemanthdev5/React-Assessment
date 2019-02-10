import React, {Component} from 'react';
import Dropdown from '../Dropdown/Dropdown';

class Textinput extends Component{
    state = {
        input : ""
    }
    handleChange = (event) =>{
        this.setState({input: event.target.value})
    }
    render(){
        return(
            <div>
            Enter Text
            <textarea  onChange= {this.handleChange}>
            </textarea>
            <span>{this.state.input}</span> 
            <span> {this.props.value}</span>
            </div>
        );
    }
}
export default Textinput;

