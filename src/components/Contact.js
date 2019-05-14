import React from "react"
import { connect } from "react-redux"
import Collapse from "react-bootstrap/Collapse"

const Contact = ({ isContactOpen }) => {
  return (
    <Collapse in={isContactOpen}>
      <div className="container">
        <section id="contact-section">
          <div className="card card-body bg-danger text-white py-5">
            <h2>Contact Me</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, blanditiis.
            </p>
          </div>
          <div className="card card-body py-5">
            <h3>Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis accusantium voluptas tenetur accusamus facere eum.
            </p>
            <form>
              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-danger text-white">
                      <i className="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <textarea
                    className="form-control bg-dark text-white"
                    placeholder="Message"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-danger btn-block btn-lg"
              />
            </form>
          </div>
        </section>
      </div>
    </Collapse>
  )
}

export default connect(
  state => ({
    isContactOpen: state.app.isContactOpen,
  }),
  null
)(Contact)
