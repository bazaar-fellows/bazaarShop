import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import '../components/design/footer.scss';

const Footer = ({ siteTitle }) => (
    <footer>
      <div>
          <Link
            to="/"
            >
            {siteTitle}
            Copyright 2019 Bazaar-Fellows
          </Link>
      </div>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Footer.defaultProps = {
    siteTitle: ``,
  }
  
export default Footer;