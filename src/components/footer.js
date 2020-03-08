import PropTypes from "prop-types"
import React from "react"

const Footer = ({ footerData }) => (
  <footer
    style={{
      background: `yellow`,
      marginBottom: `1.45rem`,
      gridArea: `footer`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0 }}>
          {footerData.email}
      </p>
      <p style={{ margin: 0 }}>
          {footerData.tel}
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
