/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "../css/typography.css"
import Menu from "./menu"
import Burgermeny from "./burgermeny";

const Layout = ({ children }) => {

  const [isToggled, setToggled] = useState(false);
  const toggleMenu = () => { setToggled(!isToggled); }
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMarkdownRemark 
      (sort: { fields: [frontmatter___title], order: ASC })
      {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
      site {
        siteMetadata {
          friendly
          title
          subtitle
          description
          name
          adress
          zip
          email
          tel
          instagram
        }
      }
    }
  `)


  const { edges: chapters } = data.allMarkdownRemark
  const { siteMetadata: meta } = data.site
  return (
    <>
    <div className="container">
      <Header subtitle={meta.subtitle} title={meta.title} description={meta.description} toggle={toggleMenu} isToggled={isToggled}/>
      <div className="content">{children}</div>
     <Menu chapters={chapters}/>
     { isToggled && 
     <Burgermeny chapters={chapters} toggle={toggleMenu}/>
}
      </div>
    <Footer footerData={data.site.siteMetadata} />
    </>
  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
