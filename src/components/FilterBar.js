import React, { Component } from 'react';

export default class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (event)=>{
        // TODO: send the states to list to be filtered, 
        // parsed also by filtered component
    }
    render() {
        return (
            <div>
                <label>
                    Distance
<                   input type="text" name="name" />
                </label>
            {/* TODO: Add list component here */}
            </div>
        );
    }
}