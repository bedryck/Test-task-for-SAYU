import React, { useState, useEffect } from 'react';
import './Notification.css';


const Notification = () => {
    const [isShow, setIsShow] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [fontSize, setFontSize] = useState(14);

    const [showClose, setShowClose] = useState(true);

    let timer;

    const closeByTime = (time) => {
        clearTimeout(timer);
        setShowClose(false);
        timer = setTimeout(() => { setIsShow(false); }, time * 1000);
    };


    const setDisplayText = (text) => {
        let changedText;
        if (text.length > 600) {
            setFontSize(10);
            changedText = `${text.substring(0, 600)}...`;
        } else if (text.length > 106) {
            setFontSize(10);
        } else if (text.length > 46) {
            setFontSize(12);
        } else {
            setFontSize(14);
        }
        setMessage(changedText || text);
    };

    const info = (mesage, time) => {
        clearTimeout(timer);

        setShowClose(true);
        setDisplayText(mesage);
        setColor('var(--tile-color)');
        setIsShow(true);
        if (time) closeByTime(time);
    };


    useEffect(() => {
        window._notification = {
            info,
        };
    }, []);


    return (
        <div className={`pNotificationComponent_fixed ${isShow ? 'pNotificationComponent_fixed_show' : null}`}>
            <div className="pNotificationComponent_main" style={{ background: color }}>
                <div className="pNotificationComponent_image" style={{ color: 'var(--font-color)' }}>
                    {'i'}
                </div>

                <div className="pNotificationComponent_container">
                    <div className="pNotificationComponent_message" style={{ fontSize }}>
                        {message}
                    </div>
                </div>

                {showClose
                    ? (
                        <div className="pNotificationComponent_header">

                            <div className="pNotificationComponent_close_button" onClick={() => setIsShow(false)}>
                                {'x'}
                            </div>

                        </div>
                    )

                    : null}
            </div>
        </div>
    );
};


export default Notification;
