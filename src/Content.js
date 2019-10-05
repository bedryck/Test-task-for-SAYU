import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const Content = () => {
    const date = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()} `;// the date is now for future transform input[time]
    const [time, setTime] = useState(''); // input time
    const changedDate = time ? new Date(date + time).getTime() : Date.now(); // transform input

    const _requestToBack = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
            .then(() => window._notification.info('Response from backend', 3))
            .catch((error) => console.error(error));
    };


    const _onSetTime = (e) => {
        _requestToBack();
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
                <button type="button" onClick={() => { localStorage.setItem('time', ''); setTime(''); }}>
                    Current Time
                </button>
            </div>
        </div>
    );
};


export default Content;
