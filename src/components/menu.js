import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";
import React from "react";

const Menu = ({ chapters}) => (
  
  <div className="sidebar" >
  <div className="sticky">
    <div>
{chapters
  .filter(chapter => chapter.node.frontmatter.title.length > 0)
  .map(({ node: chapter }) => {
    return (
      <AnchorLink key={chapter.id} className="menupunkt" to={"/#" + chapter.frontmatter.path}>
          <p className="reducedDistance"><a>{chapter.frontmatter.title}</a></p>
        </AnchorLink>
    )
  })}
  </div>
  
  <p className="reducedDistance">
      <a href="https://blank.no">Til Blank.no</a>
  </p>
</div> 
</div>


)

Menu.propTypes = {
  chapters: PropTypes.array,
}

Menu.defaultProps = {
  chapters: []
}

export default Menu
