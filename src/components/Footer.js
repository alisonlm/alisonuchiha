import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
       	<h2>Copyright ©2020 Alison Uchiha</h2>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
