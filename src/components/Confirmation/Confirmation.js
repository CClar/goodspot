import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Confirmation extends Component {
    render() {
        return (
            <div className="Confirmation">
                <p>Thank you choosing our spot. A confirmation has been sent to you via email.</p>
                <Link to='/'>Back to homepage</Link>
            </div>
        )
    }
}