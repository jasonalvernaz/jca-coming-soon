import React, { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import { Title } from "./Title";
import { Description } from "./Description";
import { Links } from "./Links";
import { Bio } from "./Bio";
import Countdown from "./Countdown";
import Contact from "./Contact";
import logo from "../images/JasonCoryCircle.png";
import xmark from "../images/x-mark.svg";
import exclamation from "../images/exclamation.svg";
import check from "../images/check-mark.svg";
import facebook from "../images/fbookiconPlain.svg";
import instagram from "../images/instaiconPlain.svg";
import youtube from "../images/youtubeiconPlain.svg";
import twitter from "../images/twittericonPlain.svg";
import "../css/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2019-08-31 00:00:00"
    },
    bio: {
      title: "My Bio",
      text:
        "This is my bio!!This is my bio!!This is my bio!!This is my bio!!This is my bio!!This is my bio!!This is my bio!!This is my bio!!"
    },
    logo: {
      alt: "Jason Cory Alvernaz",
      src: logo
    },
    title: {
      text: "Jason Cory Alvernaz"
    },
    description: {
      text:
        "My portfolio site will be up and running shortly. In the meantime, please fill out the contact form below to get started bringing your project to life. Whatever the needs are for your next website, I can help you craft a beautifully designed site to show off your product or service to the world."
    },
    contact: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email Address",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "What can I build for you?",
      buttonText: "Send Email"
    },
    links: [
      {
        url: "https://www.facebook.com/JasonAlvernaz",
        logo: facebook,
        text: "Friend"
      },
      {
        url: "https://www.instagram.com/jason.cory.code/",
        logo: instagram,
        text: "Follow"
      },
      {
        url: "https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w",
        logo: youtube,
        text: "Watch"
      },
      {
        url: "https://www.twitter.com/JasonAlvernaz",
        logo: twitter,
        text: "Tweet"
      }
    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = level => {
    const notification = { ...this.state.notification };
    notification.level = level;
    if (level === "success") {
      notification.src = check;
      notification.alt = "Check Mark";
      notification.message = `Thank you for subscribing to our mailing list.
                        You will be receiving a welcome email shortly.`;
    } else if (level === "warning") {
      notification.src = exclamation;
      notification.alt = "Exclamation Point";
      notification.message = `The email you entered is already on our mailing list.
                        Thank you for joining the community.`;
    } else {
      notification.src = xmark;
      notification.alt = "X Mark";
      notification.message = `There was an issue with your email submission.
                        Please check your email and try again.`;
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {
      countdown,
      bio,
      logo,
      title,
      description,
      contact,
      links,
      notification
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Bio title={bio.title} text={bio.text} />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Contact
          namePlaceholder={contact.namePlaceholder}
          emailPlaceholder={contact.emailPlaceholder}
          subjectPlaceholder={contact.subjectPlaceholder}
          messagePlaceholder={contact.messagePlaceholder}
          buttonText={contact.buttonText}
        />
        <Links links={links} />
      </div>
    );
  }
}

ComingSoon.propTypes = {
  bio: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  }),
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.shape({
    text: PropTypes.string
  }),
  description: PropTypes.shape({
    text: PropTypes.string
  }),
  contact: PropTypes.shape({
    firstPlaceholder: PropTypes.string,
    lastPlaceholder: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    messagePlaceholder: PropTypes.string,
    buttonText: PropTypes.string
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      logo: PropTypes.string,
      text: PropTypes.string
    })
  )
};

ComingSoon.defaultProps = {
  bio: {
    title: "",
    text: ""
  },
  logo: {
    alt: "",
    src: ""
  },
  title: {
    text: ""
  },
  description: {
    text: ""
  },
  contact: {
    firstPlaceholder: "",
    lastPlaceholder: "",
    emailPlaceholder: "",
    messagePlaceholder: "",
    buttonText: ""
  },
  links: [
    {
      url: "",
      logo: "",
      text: ""
    }
  ]
};

export default ComingSoon;
