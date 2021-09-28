import React from "react";

function Contact() {
  return (
    <article>
      <h2 id="contact">contact Emeric</h2>
      <div className="div-center">
        <p>
          I'd love to hear from you!Please fell free to contact or follow me.
        </p>
        <ul className="social-links">
          <li>
            <a
              href={"https://www.linkedin.com/in/emeric-touolac/"}
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                className="social"
                src="images/linkedin.png"
                alt="linkedin icon"
              />{" "}
              - Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCK-gWU6flkKlWnvtPzTh8VA"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social" src="images/youtube.png" alt="youtube icon" />{" "}
              - YouTube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/EMERIC237"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="social"
                src="images/github-icon-4.jpg"
                alt="github icon"
              />{" "}
              - GitHub{" "}
            </a>
          </li>
          <li>
            <a
              href="mailto:bestvemeric@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <img className="social" src="images/email.png" alt="Email account" />{" "}
              - email me{" "}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Contact;
