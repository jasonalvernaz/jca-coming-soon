import React, { Component } from "react";
import "../css/Notification.css";

class Notification extends Component {
  render() {
    const opts = {};
    if (!this.props.visible) {
      opts["hidden"] = "hidden";
    }
    return (
      <div className="notification" {...opts}>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Notification;
