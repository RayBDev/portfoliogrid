import React from "react"
import { connect } from "react-redux"
import Collapse from "react-bootstrap/Collapse"

const Resume = ({ isResumeOpen }) => {
  return (
    <Collapse in={isResumeOpen}>
      <div className="container">
        <section id="resume-section">
          <div className="card card-body bg-success text-white py-5">
            <h2>my Resume</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, blanditiis.
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>Where Have I Worked?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              facere odit debitis, vero et cupiditate!
            </p>
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">DevMasters</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, vel.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Position: Full Stack Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Phone: (555) 555-5555
                  </p>
                </div>
                <div className="card-footer">
                  <h6 className="text-muted">Dates: 2015 - 2019</h6>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">123 Designs</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, vel.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Position: Web Designer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Phone: (444) 444-4444
                  </p>
                </div>
                <div className="card-footer">
                  <h6 className="text-muted">Dates: 2013 - 2015</h6>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Web Designer Pros</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, vel.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Position: Web Designer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                    Phone: (333) 333-3333
                  </p>
                </div>
                <div className="card-footer">
                  <h6 className="text-muted">Dates: 2010 - 2013</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Collapse>
  )
}

export default connect(
  state => ({
    isResumeOpen: state.app.isResumeOpen,
  }),
  null
)(Resume)
