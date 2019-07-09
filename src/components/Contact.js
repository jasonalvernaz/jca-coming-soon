import React, {Component} from 'react';

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    render() {
        const { placeholder, buttonText } = this.props;

        return (
            <form className="contact">
                <input
                    className="contact-first-name"
                    name="firstName"
                    type="text"
                    placeholder={placeholder}
                    value={this.state.firstName}
                    aria-label="First Name"
                />
                <input
                    className="contact-last-name"
                    name="lastName"
                    type="text"
                    placeholder={placeholder}
                    value={this.state.lastName}
                    aria-label="Last Name"
                />
                <input
                    className="contact-email"
                    name="email"
                    type="email"
                    placeholder={placeholder}
                    value={this.state.email}
                    aria-label="Email Address"
                />
                <textarea
                    className="contact-message"
                    name="message"
                    type="text"
                    rows="3"
                    placeholder={placeholder}
                    value={this.state.message}
                    aria-label="Message"
                />
                <button className="contact-button" type="submit">
                    {buttonText}
                </button>
            </form>
        )
    }
}

export default Contact;