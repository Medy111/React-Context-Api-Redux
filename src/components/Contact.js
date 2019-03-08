import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  // with this.onclick we can bind "this" of the clicked element. since we did destructiuring we acces this.props.contact  (name) . so through this we access the props in the context of a single contact.

  // this spares us from using .childelement . value and such , we dont need to traverse the dom .. but acces state / props ( easier)

  // this.onShowClick.bind(this , name)

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
