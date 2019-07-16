import React, { Component } from "react";
import "../css/Notification.css";

class Notification extends Component {
  render() {
    return (
      <div className={`notification ${this.props.visible ? "visible" : ""}`}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
