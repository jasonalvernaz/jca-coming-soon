import React, {Component} from 'react';

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    handleChange = e => {
        const value = e.target.value;
        if (e.target.name !== 'message') {
            this.setState({ [e.target.name]: value.trim() });
        } else {
            this.setState({ [e.target.name]: value });
        }
    }

    handleSubmit  = e => {
        e.preventDefault();
    }

    render() {
        const { firstPlaceholder, lastPlaceholder, emailPlaceholder, messagePlaceholder, buttonText } = this.props;

        return (
            <form className="contact" onSubmit={this.handleSubmit}>
                <input
                    className="contact-first-name"
                    name="firstName"
                    type="text"
                    placeholder={firstPlaceholder}
                    onChange={this.handleChange}
                    value={this.state.firstName}
                    aria-label="First Name"
                    required
                />
                <input
                    className="contact-last-name"
                    name="lastName"
                    type="text"
                    placeholder={lastPlaceholder}
                    onChange={this.handleChange}
                    value={this.state.lastName}
                    aria-label="Last Name"
                    required
                />
                <input
                    className="contact-email"
                    name="email"
                    type="email"
                    placeholder={emailPlaceholder}
                    onChange={this.handleChange}
                    value={this.state.email}
                    aria-label="Email Address"
                    required
                />
                <textarea
                    className="contact-message"
                    name="message"
                    type="text"
                    rows="3"
                    placeholder={messagePlaceholder}
                    onChange={this.handleChange}
                    value={this.state.message}
                    aria-label="Message"
                    required
                ></textarea>
                <button className="contact-button" type="submit">
                    {buttonText}
                </button>
            </form>
        )
    }
}

export default Contact;