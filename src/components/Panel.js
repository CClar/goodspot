import React, { Component } from 'react';

export default class Panel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <p>Date</p>
        <p>Distance</p>
        backgroundImg<img alt="backgroundImg" src="" />{/*TODO: Add Image*/}
        <p>{`Cost per hr of Parking`}</p>
        <p>{`year-month-day, distance away`}</p>
        <p>{'StartTime-EndTime'}</p>
      </li>
    );
  }
}

// -date, distance
// -background picture
// -list of parking cost
// --year,month,day,distance, starttime-endtime