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
import check from "../images/check-mark2.svg";
import phone from "../images/cellPhone.svg";
import linkedin from "../images/linkediniconPlain.svg";
import instagram from "../images/instaiconPlain.svg";
import youtube from "../images/youtubeiconPlain.svg";
import twitter from "../images/twittericonPlain.svg";
import heart from "../images/heart.svg";
import reno from "../images/oldReno.svg";
import "../css/ComingSoon.css";
import { Footer } from "./Footer";

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2019-09-19 00:00:00"
    },
    bio: {
      title: "About Me",
      text: `I am a web developer based out of Reno, NV, with a passion for building stunning sites for my clients.
        As a graduate from the University of Nevada, Reno with Bachelor's Degrees in both Business Management and Information Systems,
        I understand the technical and business needs for the websites I create and the businesses for which I work. My goal is to craft
        a site that is not only visually appealing but solves issues with your business processes and drives customers to your company.
        In order to build something that will compliment your brand, I must know the ins-and-outs of your business
        the way that you know your business. This concept is why I take the time to ask the questions and get the feedback that is necessary for
        me to create something that expresses your brand and its value proposition to your customers. So, reach out and let's build something beautiful together!`,
      src: phone,
      alt: "Cell Phone",
      phoneNumber: "775-997-5429",
      displayNumber: "775.997.5429"
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
        "My portfolio site will be up and running shortly. In the meantime, please fill out the contact form below to get started bringing your project to life. Whatever the needs are for your next website, I can craft you a customized and elegantly designed site to show off your product or service to the world."
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
        url: "https://www.linkedin.com/in/JasonAlvernaz",
        logo: linkedin,
        text: "Connect"
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
      src: check,
      alt: "Check Mark",
      message:
        "Thanks for reaching out! I will be in contact as soon as possible to discuss the exciting future for you and your business.",
      visible: false
    },
    footer: {
      heartImage: heart,
      heartText: "Red Heart",
      cityImage: reno,
      cityText: "Reno"
    }
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 5000);
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
      notification,
      footer
    } = this.state;

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Bio
          title={bio.title}
          text={bio.text}
          src={bio.src}
          alt={bio.alt}
          phoneNumber={bio.phoneNumber}
          displayNumber={bio.displayNumber}
        />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
        />
        <Contact
          namePlaceholder={contact.namePlaceholder}
          emailPlaceholder={contact.emailPlaceholder}
          subjectPlaceholder={contact.subjectPlaceholder}
          messagePlaceholder={contact.messagePlaceholder}
          buttonText={contact.buttonText}
          showNotification={this.showNotification}
        />
        <Links links={links} />
        <Footer
          heartImage={footer.heartImage}
          heartText={footer.heartText}
          cityImage={footer.cityImage}
          cityText={footer.cityText}
        />
      </div>
    );
  }
}

ComingSoon.propTypes = {
  countdown: PropTypes.shape({
    futureDate: PropTypes.instanceOf(Date)
  }),
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
  ),
  notification: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    message: PropTypes.string,
    visible: PropTypes.bool
  }),
  footer: PropTypes.shape({
    heartImage: PropTypes.string,
    heartText: PropTypes.string,
    cityImage: PropTypes.string,
    cityText: PropTypes.string
  })
};

ComingSoon.defaultProps = {
  countdown: {
    futureDate: new Date()
  },
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
  ],
  notification: {
    src: "",
    alt: "",
    message: "",
    visible: false
  },
  footer: {
    heartImage: "",
    heartText: "",
    cityImage: "",
    cityText: ""
  }
};

export default ComingSoon;
