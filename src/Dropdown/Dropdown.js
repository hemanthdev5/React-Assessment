import React, {Component} from 'react';

class Dropdown extends React.Component {
    render(){
       return(
          <div>
              Select Language
            <select value={this.props.value} onChange={(e) => this.props.change(e.target.value)}>
               <option value='in English'> English</option>
               <option value='in Spanish'> Spanish</option>
               <option value='in French'>  French</option>
            </select>
          </div>
       )
    }
 }

 export default Dropdown;