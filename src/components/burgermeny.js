import { AnchorLink } from "gatsby-plugin-anchor-links";
import PropTypes from "prop-types";
import React from "react";

const Burgermeny = ({ chapters }) => (

    <div className={"burgermeny"} >
        <div className="sticky">
    {chapters
        .filter(chapter => chapter.node.frontmatter.title.length > 0)
        .map(({ node: chapter }) => {
          return (
            <AnchorLink key={chapter.id} className="menupunkt" to={"/#" + chapter.frontmatter.path}>
                <p className="reducedDistance">{chapter.frontmatter.title}</p>
              </AnchorLink>
          )
        })}
    </div>
    </div>
)

Burgermeny.propTypes = {
  chapters: PropTypes.array,
}

Burgermeny.defaultProps = {
  chapter: [],
}

export default Burgermeny
