import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="project" id="project">
        <div className="project-container">
          <div className="project-title">
            <h4>My Projects</h4>
            <p>All my engineering projects</p>
          </div>
          <div className="projects-list">
            <div className="project-item-1">
              <i className="fa-solid fa-brain"></i>
              <h4>Robotics ARM</h4>
              <p>
              A robotic arm is a device constructed of linkages connected by appropriate joints so that it may move in space and with the degrees of freedom needed for the task at hand. Frequently, the robotic manipulator may be trained to do specific tasks.
              </p>
              <div className="btn" style={{ marginTop: "80px" }}>
                <button type="button" className="view-btn">
                  View
                </button>
              </div>
            </div>
            <div className="project-item-2">
              <i className="fa-solid fa-landmark"></i>
              <h4>Solar Power Energy</h4>
              <p>
              Solar power works by converting energy from the sun into power. There are two forms of energy generated from the sun for our use – electricity and heat. Both are generated through the use of solar panels.
              </p>
              <div className="btn" style={{ marginTop: "10px" }}>
                <button type="button" className="view-btn">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
