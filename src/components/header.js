import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ prefix, subtitle, title, description, toggle }) => (
    <div className="header">
        
        <button type="button" className="menu_btn" onClick={toggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
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
