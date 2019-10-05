import React from 'react';
import Clock from './Clock';

const Content = () => (
    <div className="App-Content">
        <div className="clocks-container">
            <Clock city="London" time={Date.now() - 2 * (60 * 60 * 1000)} />
            <Clock city="Kiev" time={Date.now()} />
            <Clock city="Rome" time={Date.now() - (60 * 60 * 1000)} />
        </div>
        <div className="time-picker">
            <p>Select time</p>
            <input type="time" onChange={(e) => console.log(e.target.value)} />
        </div>
    </div>
);


export default Content;
