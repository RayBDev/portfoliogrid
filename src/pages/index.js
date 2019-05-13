import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import Resume from "../components/Resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfoliogrid`, `react`]} />
    <main>
      <Home />
      <Resume />
    </main>
  </Layout>
)

export default IndexPage
