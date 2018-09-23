import React, { Component } from 'react';

export default class PostingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      postings: []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        List of postings
      </div>
    );
  }
}