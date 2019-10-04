import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({ city }) => {
    console.log(city);
    return (
        <div className="clock">
            <div className="faceWatch">
                <span>
                    00:00:00
                </span>
            </div>
            <div className="city">
                <span>
                    {city}
                </span>
            </div>
        </div>
    );
};

Clock.propTypes = {
    city: PropTypes.string,
};

Clock.defaultProps = {
    city: '',
};

export default Clock;
