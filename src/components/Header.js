import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { connect } from "react-redux"

import {
  toggleHomeOpen,
  toggleResumeOpen,
  toggleWorkOpen,
  toggleContactOpen,
} from "../state/app"

import "./Header.css"

const Header = ({
  isHomeOpen,
  isResumeOpen,
  isWorkOpen,
  isContactOpen,
  dispatch,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          freelancerPhoto: file(relativePath: { eq: "freelancer.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className="container">
          <header id="main-header">
            <div className="row no-gutters">
              <div className="col-md-4">
                <Img
                  fluid={data.freelancerPhoto.childImageSharp.fluid}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="d-flex flex-column">
                  <div className="p-5 bg-dark text-white">
                    <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
                      <h1 className="display-4 col-sm-12 col-md-9 pl-0">
                        John Doe
                      </h1>
                      <div>
                        <a href="https://twitter.com" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                      <div>
                        <a href="https://facebook.com" className="text-white">
                          <i className="fab fa-facebook" />
                        </a>
                      </div>
                      <div>
                        <a href="https://instagram.com" className="text-white">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com" className="text-white">
                          <i className="fab fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-black text-white">
                    Experienced Full Stack Web Developer
                  </div>
                  <div>
                    <div className="d-flex flex-row text-white align-items-stretch text-center">
                      <div
                        className="port-item col-3 p-4 bg-primary"
                        onClick={() => dispatch(toggleHomeOpen(!isHomeOpen))}
                        aria-controls="home-section"
                        aria-expanded={isHomeOpen}
                      >
                        <i className="fas fa-home fa-2x" />
                        <span className="d-none d-sm-block">Home</span>
                      </div>
                      <div
                        className="port-item col-3 p-4 bg-success"
                        onClick={() =>
                          dispatch(toggleResumeOpen(!isResumeOpen))
                        }
                        aria-controls="resume-section"
                        aria-expanded={isResumeOpen}
                      >
                        <i className="fas fa-graduation-cap fa-2x" />
                        <span className="d-none d-sm-block">Resume</span>
                      </div>
                      <div
                        className="port-item col-3 p-4 bg-warning"
                        onClick={() => dispatch(toggleWorkOpen(!isWorkOpen))}
                        aria-controls="work-section"
                        aria-expanded={isWorkOpen}
                      >
                        <i className="fas fa-folder-open fa-2x" />
                        <span className="d-none d-sm-block">Work</span>
                      </div>
                      <div
                        className="port-item col-3 p-4 bg-danger"
                        onClick={() =>
                          dispatch(toggleContactOpen(!isContactOpen))
                        }
                        aria-controls="contact-section"
                        aria-expanded={isContactOpen}
                      >
                        <i className="fas fa-envelope fa-2x" />
                        <span className="d-none d-sm-block">Contact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
    />
  )
}

export default connect(
  state => ({
    isHomeOpen: state.app.isHomeOpen,
    isWorkOpen: state.app.isWorkOpen,
    isResumeOpen: state.app.isResumeOpen,
    isContactOpen: state.app.isContactOpen,
  }),
  null
)(Header)
