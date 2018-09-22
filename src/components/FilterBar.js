import React, { Component } from 'react';

export default class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (event) => {
        // TODO: send the states to list to be filtered, 
        // parsed also by filtered component
        let obj = {
            areaNear: document.querySelector('#areaNear'),
            distance: document.querySelector('#distance').value,
            low: document.querySelector('#low').value,
            high: document.querySelector('#high').value,
            fromTimes: document.querySelector('#fromTimes'),
            toTimes: document.querySelector('#toTimes'),
            bookDate: document.querySelector('#bookDate'),
        }
        // TODO: Lord backends please handle this
        console.log(obj);
    }
    render() {
        return (
            <div>
                <label>Areas Near<input onChange={this.handleChange} id="areaNear" type="text" name="areaNear" /></label>
                <label>Distance<input id="distance" type="text" name="distance" /></label>
                <form name="priceRange">
                    <label>Low<input type="text" id="low" name="low" /></label>
                    <label>High<input type="text" id="high" name="high" /></label>
                </form>
                <label>Froms<input type="time" id="time" name="fromTimes"/></label>
                <label>To<input type="time" id="time" name="toTimes"/></label>
                <label>Date<input type="date" id="time" name="bookDate"/></label>
            </div>
        );
    }
}