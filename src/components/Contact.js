import React, { Component } from "react";
import "../css/Contact.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleChange = e => {
    const value = e.target.value;
    if (e.target.name === "email") {
      this.setState({ [e.target.name]: value.trim() });
    } else {
      this.setState({ [e.target.name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {
      namePlaceholder,
      emailPlaceholder,
      subjectPlaceholder,
      messagePlaceholder,
      buttonText
    } = this.props;

    return (
      <form className="contact" onSubmit={this.handleSubmit}>
        <input
          className="contact-name"
          name="name"
          type="text"
          placeholder={namePlaceholder}
          onChange={this.handleChange}
          value={this.state.name}
          aria-label="Enter Name"
          required
        />
        <input
          className="contact-email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          onChange={this.handleChange}
          value={this.state.email}
          aria-label="Enter Email Address"
          required
        />
        <input
          className="contact-subject"
          name="subject"
          type="text"
          placeholder={subjectPlaceholder}
          onChange={this.handleChange}
          value={this.state.subject}
          aria-label="Enter Subject"
          required
        />
        <textarea
          className="contact-message"
          name="message"
          type="text"
          placeholder={messagePlaceholder}
          onChange={this.handleChange}
          value={this.state.message}
          aria-label="Enter Message"
          required
        />
        <button className="contact-button" type="submit">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Contact;
