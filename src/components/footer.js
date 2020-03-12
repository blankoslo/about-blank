import PropTypes from "prop-types"
import React from "react"

const Footer = ({ footerData }) => (
  <footer class="footer">
    <div class="inf friendly">
    <p>
        {footerData.friendly}
    </p>

    </div>
    
    <div>
    <div class="inf">
      <a href="mailto:innboks@blank.no">
      <p>
        {footerData.email}
      </p>
      </a>  
    
      <a href="tel:9999999">
      <p>
        {footerData.tel}
      </p>
      </a>
      
      <a target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/blankoslo">
      <p>
        {footerData.instagram}
      </p>
      </a>
    </div>
    
    <div class="inf">
      <a target="_blank" rel="noopener noreferrer" href="http://www.blank.no">
      <p>
        {footerData.name}
      </p>
      </a>
      <p>
        {footerData.adress}
      </p>
      <p>
        {footerData.zip}
      </p>
    </div>
      
    </div>
  </footer>
)

export default Footer