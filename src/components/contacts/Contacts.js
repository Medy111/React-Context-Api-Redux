import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

// If out dont use the context api , you will have to
// "propegate up" , the events ( from "Contact" to "Contacts" ) to acces the state
// this is pain in the neck if you have to do it 1 level ... gets worse wiht more levels ()

// you cant acces state from Contacts in Contact !!!!

// use the contexts api to be able to acces the state
// form components that are not able to acces state directly ( global state = context api , later redux)
// this will make state management easy and dont fuck with your brain ( remembering that stuff gives headache) and gets immpossible with larger apps..

// this way you always know how to acces the state easily.... Medy 2019 march 7 ... :D

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                {" "}
                <span className="text-danger">Contact</span> List{" "}
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
