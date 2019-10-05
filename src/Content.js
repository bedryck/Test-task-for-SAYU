import React, { useState } from 'react';
import Clock from './Clock';

const Content = () => {
    const date = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} `;// the date is now for future transform input[time]
    const [time, setTime] = useState(''); // input time
    const changedDate = time ? new Date(date + time).getTime() : Date.now(); // transform input
    return (
        <div className="App-Content">
            <div className="clocks-container">
                <Clock city="London" time={changedDate - 2 * (60 * 60 * 1000)} />
                <Clock city="Kiev" time={changedDate} />
                <Clock city="Rome" time={changedDate - (60 * 60 * 1000)} />
            </div>
            <div className="time-picker">
                <p>Select time</p>
                <input type="time" step="1" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
        </div>
    );
};


export default Content;
