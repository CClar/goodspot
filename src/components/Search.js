import React, { Component } from 'react'


export default class Search extends Component {

    constructor(props){
     super(props)
        console.log(this.props);
    }

    render(props) {
    return (
        
      <div classname = "Search">
      <input type ="text"
      value={this.props.searchText}
      placeholder="Search"
      autoFocus={"True"}
      onChange={(e) => props.onSearchTextChange(this.props)}
      />
      <button onClick={this.handleClick}>
       Search
      </button>
      
      </div>
    )
  }
}

