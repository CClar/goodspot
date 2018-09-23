import React, { Component } from 'react';

export default class PostingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      postings: []
    }
  }

  componentDidMount() {
    const { address } = this.props.location.state;
    const url = 'https://calm-basin-51790.herokuapp.com/testdistance';
    
    fetch(url, {
      method: 'POST',
      body: { address },
      mode: 'cors'
    })
    .then((response) =>  response.json())
    .then((data) => {
      this.setState({
        postings: data
      });
      // console.log(data);
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
  }

  render() {
    const postings = this.state.postings;
    return (
      <div className="PostingList">
        <ul>
          {postings.map((posting, i) => {
            return <li key={i}>{posting.Address}</li>
          })}
        </ul>
      </div>
    );
  }
}