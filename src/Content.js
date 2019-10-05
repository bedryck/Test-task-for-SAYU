import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const Content = () => {
    const date = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} `;// the date is now for future transform input[time]
    const [time, setTime] = useState(''); // input time
    const changedDate = time ? new Date(date + time).getTime() : Date.now(); // transform input

    const _onSetTime = (e) => {
        setTime(e.target.value);
        localStorage.setItem('time', e.target.value);
    };

    useEffect(() => {
        const storegeTime = localStorage.getItem('time');
        if (storegeTime) setTime(storegeTime);
    }, []);

    return (
        <div className="App-Content">
            <div className="clocks-container">
                <Clock city="London" time={changedDate - 2 * (60 * 60 * 1000)} />
                <Clock city="Kiev" time={changedDate} />
                <Clock city="Rome" time={changedDate - (60 * 60 * 1000)} />
            </div>
            <div className="time-picker">
                <p>Select time</p>
                <input type="time" step="1" value={time} onChange={_onSetTime} />
            </div>
        </div>
    );
};


export default Content;
