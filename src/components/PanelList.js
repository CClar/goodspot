import React, { Component } from 'react';
import Panel from './Panel';

export default class PanelList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panels: ['']
    }
  }
  componentDidMount() {
    // TODO: Put endpoint william please help us
    fetch('TODO: URL').then(response => {
      console.log(JSON.stringify(response.json));
    });
  }
  render() {
    return (
      <ul>{
        this.state.panels.map(function (element) {
          return <Panel pAddress={''} pDate={''} pDistance={''} pImg={''} pCost={''} date={''} />
        }, this)
      }
      </ul>
    );
  }
}

// -date, distance
// -background picture
// -list of parking cost
// --year,month,day,distance, starttime-endtime