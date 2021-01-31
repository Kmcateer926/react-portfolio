import React from "react";
import ImageResume from "../../assets/resume.png";
// import Resume from "../../assets/Resume(2020).pdf";
import "./Contact.css";
const Contact = () => {
  return (
    <body>
      <div className="container">
        <main className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <h1>Contact</h1>

              <div className="contact">
                <h4>Name</h4>
                <p>Kevin Joseph McAteer</p>

                <h4>Email</h4>
                <p>kmcateer926@gmail.com</p>

                <h4>Phone</h4>
                <p>706-867-5611</p>

                <h4>Github</h4>
                <a
                  href="https://github.com/Kmcateer926"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  github.com/Kmcateer926
                </a>

                <h4>Linkedin</h4>
                <a
                  href="https://www.linkedin.com/in/kevin-mcateer-27950b1b5/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  linkedin.com/in/kevin-mcateer-27950b1b5
                </a>

                <h4>Resume</h4>
                <a
                  href="https://docs.google.com/document/d/1TvX-3BquNaXXLC3rSu0DsOy7caOVJJZXM8TmAVIC47s/edit#heading=h.1vb2dmqv1isa"
                  rel="noreferrer noopener"
                  target="_blank"
                  download
                >
                  Kevin's Resume
                  <img src={ImageResume} alt="resume" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Contact;
