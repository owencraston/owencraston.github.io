import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import {GlobalStyle, ContainerLayout, MainContent} from '../common';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  deckDeckGoHighlightElement()

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout>
          <Navbar siteTitle={data.site.siteMetadata.title} />
        </ContainerLayout>
        <ContainerLayout>
          <main>{children}</main>
        </ContainerLayout>
      </MainContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
