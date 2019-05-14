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
