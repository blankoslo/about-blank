import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ prefix, subtitle, title, description }) => (
    <div className="header">
        
        <div class="menu_btn">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    
        <div class="prefix">About:</div>
          
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
