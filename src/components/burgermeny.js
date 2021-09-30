import PropTypes from "prop-types"
import React from "react"

const Burgermeny = ({ chapters, toggle }) => (
  <div className="burgermeny">
    <div className="sticky">
      {chapters
        .filter(chapter => chapter.node.frontmatter.title.length > 0)
        .map(({ node: chapter }) => {
          return (
            <p key={chapter.id} className="reducedDistance">
              <a
                className="menupunkt"
                href={"/#" + chapter.frontmatter.path}
                onClick={toggle}
              >
                {chapter.frontmatter.title}
              </a>
            </p>
          )
        })}
      <p className="reducedDistance">
        <a href="https://blank.no">Til Blank.no</a>
      </p>
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
