import React, { Component } from 'react'

export default class Listposting extends Component {
  constructor(props){
      this.state = {
        year: "",
        month: "",
        day: ""
      }
  }

  componentDidMount() {
     users = ()=>{
    {contact.map(contact=> (
        <Contact
        year = {contact.year}
        month = {contact.month}
        day = {contact.day}   
        />
    ))
   } 
  }

   

  

    render() {
        const { contact } = this.state;
    return (
      <div>
          {users}
         }
      </div>
    );
}


