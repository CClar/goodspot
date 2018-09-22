import React, { Component } from 'react';

export default class BookingForm extends Component {
  submit() {
    const formObj = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      license: document.querySelector('#license').value,
      startT: document.querySelector('#startT').value,
      endT: document.querySelector('#endT').value,
    }
    // TODO: Please submit this form, god bless backends
    // the submit will reload page on click, maybe use a normal button?
    console.log(formObj)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>
            Name:
            <input id="name" type="text" name="name" />
          </label>
          <label>
            Email:
            <input id="email" type="text" name="email" />
          </label>
          <label>
            Phone:
            <input id="phone" type="text" name="phone" />
          </label>
          <label>
            License Plate:
            <input id="license" type="text" name="license" />
          </label>
          <label>
            Start Time - End Time (Intervals of 15mins):
            <input id="startT" type="text" name="startT" />:
            <input id="endT" type="text" name="endT" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}