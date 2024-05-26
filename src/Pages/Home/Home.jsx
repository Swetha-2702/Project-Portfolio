import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";
import "./Home.css";
import Profile from '../../assets/photo.jpeg';

const Home = () => {
  const [text] = useTypewriter({
    words: ["JAVA Development", "UX Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <div className="row full-screen align-items-center">
            <div className="content-box col-lg-7">
              <div className="type-box">
                <h4>Hello , My Name is</h4>
                <h1>Lithiksha.A.S</h1>
                <p className="text">
                  {text}
                  <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#00000"
                  />
                </p>
                <p className="desc">
                  Welcome to my Engineering Portfolio
                  <br />
                  software engineer with a strong desire to create innovative
                  <br />
                  solutions and push the boundaries of technology.
                  <br />
                </p>
                <div className="btn-group">
                  <a
                    href=""
                    target="_blank"
                  >
                    Download CV
                  </a>
                  &nbsp; &nbsp; &nbsp;
                  <a href="mailto:lithiksha2012@gmail.com" target="_blank">
                    Contact
                  </a>
                </div>
                <div className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    className="first-icon"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="second-icon"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    className="third-icon"
                    href="#"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
                <Fade duration={500} direction="up">
                  <Zoom>
                    <Fade direction="500" cascade>
                      <div className="profile-photo">
                        <img
                          src={Profile}
                          alt="profile picture"
                        />
                      </div>
                    </Fade>
                  </Zoom>
                </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
