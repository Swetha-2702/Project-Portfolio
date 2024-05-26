import "./Education.css";

const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <div className="education-container">
          <div className="row">
            <div className="education-content">
              <h2 className="title">Education</h2>

              <div className="time-line">
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">
                    B.E Computer Science and Engineering - 79%
                  </h3>
                  <h4 className="item-title">
                    SAL University
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>&nbsp;
                    2019 - 2023
                  </h4>
                </div>
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">HSC - 95%</h3>
                  <h4 className="item-title">
                    SAP Higher Secondary School
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>&nbsp;
                    2018 - 2019
                  </h4>
                </div>
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">SSLC - 91%</h3>
                  <h4 className="item-title">
                    SAP Higher Secondary School
                  </h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>&nbsp;
                    2016 - 2017
                  </h4>
                </div>
              </div>
            </div>
            <div className="certificate">
              <h2 className="title">Certificate</h2>
              <div className="time-line">
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">IOS Development WorkShop</h3>
                  <h4 className="item-title">ADU University</h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>&nbsp;
                    JUN - 2023
                  </h4>
                  <div className="education-btn">
                    
                      <button type="submit" className="submit-btn">
                        View
                      </button>
                  </div>
                </div>
                <div className="time-line-item">
                  <div className="circle-dot"></div>
                  <h3 className="item-title">WEB Development</h3>
                  <h4 className="item-title">Agaram</h4>
                  <h4 className="item-title">
                    <i className="fa-solid fa-calendar"></i>&nbsp;
                    DEC - 2023 to FEB - 2024
                  </h4>
                  <div className="education-btn">
                      <button type="submit" className="submit-btn">
                        View
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Education;
