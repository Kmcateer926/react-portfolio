import React from "react";
import imageResume from "./2020-10-28 (3).png";
import resume from "./Resume(2020).pdf";
import "./Contact.css";
const Contact = () => {
  return (
    <main className="row" id="contact">
      <div className="col-sm-12">
        <div className="col-sm-12">
          <h1>Contact</h1>
          <div>
            <div className="contact">
              <h4>Name</h4>
              <p>Kevin Joseph McAteer</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>kmcateer926@gmail.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>706-867-5611</p>
            </div>

            <div>
              <h4>Github</h4>
              <a
                href="https://github.com/Kmcateer926"
                rel="noreferrer noopener"
                target="_blank"
              >
                github.com/Kmcateer926
              </a>
            </div>
            <div>
              <h4>Linkedin</h4>
              <a
                href="https://www.linkedin.com/in/kevin-mcateer-27950b1b5/"
                rel="noreferrer noopener"
                target="_blank"
              >
                linkedin.com/in/kevin-mcateer-27950b1b5
              </a>
            </div>
            <div
            >
              <h4>Resume</h4>
              <a
                href={resume}
                rel="noreferrer noopener"
                target="_blank"
                download
              >
                <img src={imageResume} alt="resume" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
