import PropTypes from "prop-types"
import React from "react"

const Menu = ({ chapters }) => (
  <div className="sidebar">
    <div className="sticky">
      <div>
        {chapters
          .filter(chapter => chapter.node.frontmatter.title.length > 0)
          .map(({ node: chapter }) => {
            return (
              <p key={chapter.id} className="reducedDistance">
                <a className="menupunkt" href={"/#" + chapter.frontmatter.path}>
                  {chapter.frontmatter.title}
                </a>
              </p>
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
  chapters: [],
}

export default Menu
