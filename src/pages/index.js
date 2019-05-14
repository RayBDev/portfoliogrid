import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import Resume from "../components/Resume"
import Work from "../components/Work"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfoliogrid`, `react`]} />
    <main>
      <Home />
      <Resume />
      <Work />
      <Contact />
    </main>
  </Layout>
)

export default IndexPage
