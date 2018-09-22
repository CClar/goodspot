import React, { Component } from 'react';

export default class BookingForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
<                   input type="text" name="name" />
          </label>
          <label>
            Email:
<                   input type="text" name="email" />
          </label>
          <label>
            Phone:
<                   input type="text" name="phone" />
          </label>
          <label>
            License Plate:
<                   input type="text" name="lPlate" />
          </label>
          <label>
            Start Time - End Time (Intervals of 15mins):
<                   input type="text" name="startT" />:
                  <                   input type="text" name="startT" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}