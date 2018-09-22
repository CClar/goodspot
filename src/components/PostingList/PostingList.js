import React, { Component } from 'react';

export default class PostingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      year: 0,
      month: 0,
      day: 0
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