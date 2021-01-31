import React from "react";
import "./Home.css";
import Kevin from "../../assets/kevin.jpg";
// import Background from "../../assets/background.jpg";

// var sectionStyle = {
//     height: "100%",

//   position:"absolute",

//   width:"100%",
//   transition:"0.5s",
//   backgroundImage: `url(${Background})`,
// };
// var imageKevin = require(`./images/image1.jpg`)
const Home = () => {
  return (
    <body>
      <div className="container">
        <main className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <h1 style={{ color: "white" }}>About Me</h1>
              <img
                src={Kevin}
                // className="img-fluid float-left"
                alt="Kevin McAteer"
              />

              <p className="text-justify">
                I grew up in a military family and lived all over the place, as
                a result I love to travel. I attended the university of North
                Georgia where I received a bachelors with a major in Arabic and
                minor in international affairs. While in school, I was in the
                Georgia Army National Guard for 8 years while working part time.
                While in the army, I learned how to be a leader and to lead by
                example. The army also taught me how to challenge myself, which
                is very rewarding. After graduating and receiving a degree, I
                became a full-time employee at NorthEast Sales distributing,
                working in multiple territories such as Snellville, Canton,
                Athens, and Lawrenceville. During my free time, I enjoy hiking,
                lifting weights, cooking, fishing, etc. Traveling is a big deal
                for me as well, my most recent adventure was in Alaska, where I
                was able to see a lot of wild animals. Moose are a lot scarier
                than I expected them to be. I am currently a student at GA tech
                coding bootcamp while working full-time. Coding is a little
                difficult but I am learning a lot and I am very proud of the
                progress that I have made. Last time I updated this portfolio, I
                said that coding is difficult. It still is, but I think I have
                come a long way. I now know how to set up data bases with my own
                server and deploy it to sites like heroku. I can also say I
                understand CRUD with my last project. I still have a lot of work
                to do but I feel way more confident now, than I did in October
                2020.
              </p>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Home;
