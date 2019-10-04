import React from 'react';
import Clock from './Clock';

const Content = () => (
    <div className="App-Content">
        <div className="clocks-container">
            <Clock city="London" />
            <Clock city="Kiev" />
            <Clock city="Rome" />
        </div>
        <div className="time-picker">
            <p>Select time</p>
            <input type="time" />
        </div>
    </div>
);


export default Content;
