import "./Skill.css";
import { Fade, Zoom } from "react-awesome-reveal";

const Skill = () => {
  return (
    <>
      <section className="skill" id="skill">
        <div className="skill-container">
          <Fade duration={500} direction="up">
            <Zoom>
              <Fade direction="500" cascade>
                <div className="skill-items">
                  <div className="skill-title">
                    <h3>Skills</h3>
                  </div>
                  <div className="skill-list-1">
                    <div className="skill-item">
                      <i className="fa-brands fa-java"></i>
                      <h4>Java</h4>
                    </div>
                    <div className="skill-item">
                    <i className="fa-brands fa-react"></i>
                      <h4>React Native</h4>
                    </div>
                    <div className="skill-item">
                      <i className="fa-solid fa-gears"></i>
                      <h4>ML</h4>
                    </div>
                    <div className="skill-item">
                      <i className="fa-brands fa-python"></i>
                      <h4>Python</h4>
                    </div>
                  </div>
                </div>
              </Fade>
            </Zoom>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Skill;
