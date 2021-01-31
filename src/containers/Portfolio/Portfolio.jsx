import React from 'react';

const Portfolio = () => {
    return (
        <div className="container">
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <main className="row">
        <div className="col-sm-12">
          <div className="col-sm-12">
            <h1>Portfolio</h1>
            <div>
              <p>Know Before Your Go</p>
              <a
                href="https://kmcateer926.github.io/know-before-you-go/"
                rel="noreferrer noopener"
                target="_blank"
                >Deployed Site</a
              >
              <a
                href="https://github.com/Kmcateer926/know-before-you-go"
                rel="noreferrer noopener"
                target="_blank"
                >Repository</a
              >
            </div>
            <img
              data-src="holder.js/200x200"
              className="img-thumbnail img-responsive shadow float-left"
              alt="200x200"
            //   src="assets\images\2020-10-28.png"
              data-holder-rendered="true"
            />

            <main className="row">
              <div className="col-sm-12">
                <div className="col-sm-12">
                  <div>
                    <p>Day Planner</p>
                    <a
                      href="https://kmcateer926.github.io/day-planner-kevinmcateer/"
                      rel="noreferrer noopener"
                      target="_blank"
                      >Deployed Site</a
                    >
                    <a
                      href="https://github.com/Kmcateer926/day-planner-kevinmcateer"
                      rel="noreferrer noopener"
                      target="_blank"
                      >Repository</a
                    >
                  </div>
                  <img
                    data-src="holder.js/200x200"
                    className="img-thumbnail img-responsive shadow float-left"
                    alt="200x200"
                    // style="width: 600px; height: 400px"
                    // src="assets\images\2020-10-28 (2).png"
                    data-holder-rendered="true"
                  />
                </div>
              </div>
            </main>
            <main className="row">
              <div className="col-sm-12">
                <div className="col-sm-12">
                  <div>
                    <p>Password Generator</p>
                    <a
                      href="https://kmcateer926.github.io/password-generator-kevin2/"
                      rel="noreferrer noopener"
                      target="_blank"
                      >Deployed Site</a
                    >
                    <a
                      href="https://github.com/Kmcateer926/password-generator-kevin2"
                      rel="noreferrer noopener"
                      target="_blank"
                      >repository</a
                    >
                  </div>
                  <img
                    data-src="holder.js/200x200"
                    class="img-thumbnail img-responsive shadow float-left"
                    alt="200x200"
                    // style="width: 600; height: 400px"
                    // src="assets\images\passwordgen.png"
                    data-holder-rendered="true"
                  />
                </div>
              </div>
            </main>
            <main class="row">
              <div class="col-sm-12">
                <div class="col-sm-12">
                  <div>
                    <p>Employee-tracker</p>
                    <a
                      href="https://github.com/Kmcateer926/employee-tracker"
                      rel="noreferrer noopener"
                      target="_blank"
                      >repository</a
                    >
                  </div>
                  <img
                    data-src="holder.js/200x200"
                    className="img-thumbnail img-responsive shadow float-left"
                    alt="200x200"
                    // style="width: 600; height: 400px"
                    // src="assets\images\employee-tracker.png"
                    data-holder-rendered="true"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
    );
};

export default Portfolio;