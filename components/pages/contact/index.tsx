import React, { useState } from "react";
import { Container } from "./styles";
import { FaTwitter, FaGithub, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Layout from "../../layout";

const ContactPage = () => {
  const [contactData, setContactData] = React.useState({
    name: "",
    subject: "",
    message: "",
  });
  const [responseStatus, setResponseStatus] = useState({
    loading: false,
    isError: false,
    message: "",
  });

  const sendEmail = () => {
    const { name, subject, message } = contactData;
    if (name && subject && message) {
      setResponseStatus({ ...responseStatus, loading: true });
      emailjs
        .send(
          "default_service",
          "portfolio_site_contact",
          contactData as any,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result);
            if (result.status === 200) {
              setResponseStatus({
                ...responseStatus,
                loading: false,
                isError: false,
                message: "Message Sent! I will get back to you soon.",
              });
              setContactData({ subject: "", name: "", message: "" });
              return;
            }
            setResponseStatus({
              ...responseStatus,
              isError: true,
              loading: false,
              message: "Message failed! Please try again.",
            });
          },
          (error) => {
            setResponseStatus({
              ...responseStatus,
              isError: true,
              loading: false,
              message: "Message failed! Please try again.",
            });
          }
        );
    }
  };

  return (
    <Layout>
      <Container>
        <h1 className="main-header">
          Say <span className="red">hello</span>
        </h1>
        <div className="content">
          <div className="form-container">
            {responseStatus.message && (
              <p className={`message ${responseStatus.isError && "error-msg"}`}>
                {responseStatus.message}
              </p>
            )}
            <span>
              <input
                name={"name"}
                value={contactData.name}
                onChange={({ target }) =>
                  setContactData({ ...contactData, name: target.value })
                }
                className="input"
                placeholder="Name"
              />
              <div className="focus-effect" />
            </span>
            <span>
              <input
                name={"subject"}
                value={contactData.subject}
                onChange={({ target }) =>
                  setContactData({ ...contactData, subject: target.value })
                }
                type="email"
                className="input"
                placeholder="Email"
              />
              <div className="focus-effect" />
            </span>
            <span>
              <div className="textarea">
                <textarea
                  name={"message"}
                  value={contactData.message}
                  onChange={({ target }) =>
                    setContactData({ ...contactData, message: target.value })
                  }
                  className="input"
                  placeholder="Message"
                />
              </div>
              <div className="focus-effect" />
            </span>
            <button onClick={sendEmail}>
              {responseStatus.loading ? "Sending message..." : "Send message"}
            </button>
          </div>
          <div className="right-content">
            <p>
              If you're looking for a super fast and user friendly website/App
              or just want to say hello, please feel free to send me a message.
            </p>
            <div className="phone">
              <FaMobileAlt className="social-icon" />
              <p>+251911056281</p>
            </div>
            <div className="social-icons">
              <a
                rel="noopener noreferrer"
                href={"https://twitter.com/sisay_simon"}
                target="_blank"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                rel="noopener noreferrer"
                href={"https://github.com/simonsisay"}
                target="_blank"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/simon-sisay-446181187/"
                target="_blank"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
