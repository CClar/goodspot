import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Search.css';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    };
  }
  
  handleSearchSubmit = (e) => {
    e.preventDefault();
  }

  handleSearchTextChange = (e) => {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="Search">
        <input
          type ="text"
          placeholder="Search"
          autoFocus={true}
          value={this.state.userInput}
          onChange={this.handleSearchTextChange}
        />
        <Link to='/postings'>
          {'>'}
        </Link>
      </div>
    )
  }
}

