import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ text }) => (
    <footer className="App-footer">
        <div className="footer-container">
            <span className="footer-title">
                {text}
            </span>
        </div>
    </footer>
);

Footer.propTypes = {
    text: PropTypes.string,
};

Footer.defaultProps = {
    text: '',
};

export default Footer;
