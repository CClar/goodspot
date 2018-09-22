import React, { Component } from 'react';

export default class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (event) => {
        // TODO: send the states to list to be filtered, 
        // parsed also by filtered component
    }
    render() {
        return (
            <div>
                <label>Distance<input type="text" name="distance" /></label>
                <form name="priceRange">
                    <label>Low<input type="text" name="distance" /></label>
                    <label>High<input type="text" name="distance" /></label>
                </form>
                <label>Froms<input type="time" id="time" name="times"/></label>
                <label>To<input type="time" id="time" name="times"/></label>
                <label>Date<input type="date" id="time" name="times"/></label>
            </div>
        );
    }
}