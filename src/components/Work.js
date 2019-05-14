import React, { Component } from "react"
import { connect } from "react-redux"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Collapse from "react-bootstrap/Collapse"
import Modal from "react-bootstrap/Modal"

class Work extends Component {
  state = {
    show: false,
    imageQueryName: "work1",
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = imageQueryName => {
    this.setState({ show: true, imageQueryName })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            work1: file(relativePath: { eq: "work1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work2: file(relativePath: { eq: "work2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work3: file(relativePath: { eq: "work3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work4: file(relativePath: { eq: "work4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work5: file(relativePath: { eq: "work5.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work6: file(relativePath: { eq: "work6.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work7: file(relativePath: { eq: "work7.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            work8: file(relativePath: { eq: "work8.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Collapse in={this.props.isWorkOpen}>
              <div className="container">
                <section id="work-section">
                  <div className="card card-body bg-warning text-white py-5">
                    <h2>My Work</h2>
                    <p className="lead">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci, blanditiis.
                    </p>
                  </div>
                  <div className="card card-body py-5">
                    <h3>What Have I Built?</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Fugiat dolorem maxime ratione assumenda ea? Cumque.
                    </p>
                    <div className="row no-gutters">
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work1")}
                      >
                        <Img fluid={data.work1.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work2")}
                      >
                        <Img fluid={data.work2.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work3")}
                      >
                        <Img fluid={data.work3.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work4")}
                      >
                        <Img fluid={data.work4.childImageSharp.fluid} />
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work5")}
                      >
                        <Img fluid={data.work5.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work6")}
                      >
                        <Img fluid={data.work6.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work7")}
                      >
                        <Img fluid={data.work7.childImageSharp.fluid} />
                      </div>
                      <div
                        className="col-md-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleShow("work8")}
                      >
                        <Img fluid={data.work8.childImageSharp.fluid} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Collapse>

            <Modal show={this.state.show} onHide={this.handleClose} size="lg">
              <Modal.Body>
                <Img
                  fluid={data[this.state.imageQueryName].childImageSharp.fluid}
                />
              </Modal.Body>
            </Modal>
          </>
        )}
      />
    )
  }
}

export default connect(
  state => ({
    isWorkOpen: state.app.isWorkOpen,
  }),
  null
)(Work)
