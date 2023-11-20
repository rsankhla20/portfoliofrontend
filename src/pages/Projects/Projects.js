import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import dalle2 from "../../assets/images/dalle2.jpeg";
import notehub from "../../assets/images/notehub.jpeg";
import todoapp from "../../assets/images/todoapp.jpeg";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 here are my top 3 recent project with live links and technologies
          used
        </p>

        {/* card design */}

        <div className="row" id="ads">
          <Spin>
            <div className="col-md-12 col-lg-6 col-xl-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={dalle2} alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title  ">
                    <h5 className="text-uppercase">Dall-E 2.0</h5>
                  </div>
                  <a
                    href="https://ai-image-generator-fi9s.onrender.com/"
                    className="ad-btn"
                    target="blank"
                  >
                    view site
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>

                  <img src={notehub} alt="Note Making App" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title  ">
                    <h5 className="text-uppercase">Note Making App</h5>
                  </div>
                  <a
                    href="https://notehub-app.onrender.com/login"
                    className="ad-btn"
                    target="blank"
                  >
                    view site
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={todoapp} alt="ToDo App" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title  ">
                    <h5 className="text-uppercase">ToDo App</h5>
                  </div>
                  <a
                    href="https://todolistapp-bvs5.onrender.com/"
                    className="ad-btn"
                    target="blank"
                  >
                    view site
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
