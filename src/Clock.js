import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ city, time }) => {
    const [stateSeconds, setSeconds] = useState('00');
    const [stateMinutes, setMinutes] = useState('00');
    const [stateHoures, setHoures] = useState('00');
    const [timer, setTimer] = useState();


    useEffect(() => {
        // INITIAL_TIME for increment 1000
        let INITIAL_TIME = time;
        // update function for clock
        const update = () => {
            const date = new Date(INITIAL_TIME);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            hours = (hours < 10) ? `0${hours}` : hours;
            minutes = (minutes < 10) ? `0${minutes}` : minutes;
            seconds = (seconds < 10) ? `0${seconds}` : seconds;
            setHoures(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            INITIAL_TIME += 1000;
        };

        clearInterval(timer);
        setTimer(setInterval(update, 1000));
        update();
    }, [time]);


    return (
        <div className="clock">
            <div className="faceWatch">
                <span>

                    {stateHoures}
                    :
                    {stateMinutes}
                    :
                    {stateSeconds}
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
    time: PropTypes.number,
};

Clock.defaultProps = {
    city: '',
    time: Date.now(),
};

export default Clock;
