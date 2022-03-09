/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./bootstrap.min.css"
import "./layout.css"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site text-center text-capitalize"
      
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          marginTop: `1.5rem`,
          padding: `0 1.0875rem 1.45rem`,
          color: `crimson`,
        }}
      >
        <main>{children}</main>
        <footer className="col-10 mx-auto col-md-6 text-center text-capitalize"
          style={{
            marginTop: `1.5rem`,
            color: `crimson`,
          }}
        >
          <h4> © {new Date().getFullYear()}, ITDEV Class Project </h4>
          <h5>All Rights Reserved</h5> 
         
          {` `}
                      
        </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
