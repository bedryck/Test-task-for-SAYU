import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <header className="App-header">
        <div className="header-container">
            <span className="header-title">
                {title}
            </span>
        </div>
    </header>
);

Header.propTypes = {
    title: PropTypes.string,
};

Header.defaultProps = {
    title: '',
};

export default Header;
