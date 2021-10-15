import React from "react"
import Layout from "./../components/layout"
import SEO from "./../components/seo"
import About from "../components/about"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement()

const IndexPage = () => (
    <Layout> 
      <SEO title="About me" />
      <About /> 
    </Layout>
  )

export default IndexPage
