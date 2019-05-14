import React from "react"
import { connect } from "react-redux"
import Collapse from "react-bootstrap/Collapse"

const Home = ({ isHomeOpen }) => {
  return (
    <Collapse in={isHomeOpen}>
      <div className="container">
        <section id="home-section">
          <div className="card card-body bg-primary text-white py-5">
            <h2>Welcome to My Page</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, blanditiis.
            </p>
          </div>

          <div className="card card-body py-5">
            <h3>My Skills</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              nemo quo rem corporis veniam vel?
            </p>
            <hr />
            <h4>HTML5</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "100%" }}
              />
            </div>
            <h4>CSS3</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "100%" }}
              />
            </div>
            <h4>JavaScript</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "90%" }}
              />
            </div>
            <h4>React</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "80%" }}
              />
            </div>
            <h4>Node.js</h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </section>
      </div>
    </Collapse>
  )
}

export default connect(
  state => ({
    isHomeOpen: state.app.isHomeOpen,
  }),
  null
)(Home)
