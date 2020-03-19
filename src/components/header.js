import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ prefix, subtitle, title, description, toggle, isToggled }) => (
    <div className="header">
        <button type="button" id="menuToggle" onClick={toggle}>
        <input type="checkbox" checked={isToggled} />
          <span></span>
          <span></span>
          <span></span>
        </button>

    
        <div className="prefix">About:</div>
          
        <div>
            <Link to="/" className="title">
              {title}
            </Link>
        </div>

        <div className="subtitle">
              {subtitle}
        </div>
        
        <div className="description">
              {description}
        </div>
    
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
