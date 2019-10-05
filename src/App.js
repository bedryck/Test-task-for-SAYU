import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Notificatio from './Notification/Notification';

const App = () => (
    <div className="App">
        <Notificatio />
        <Header title="Test task for SAYU" />
        <div className="wrapper">
            <Content />
            <Footer text="Roman Koval" />
        </div>
    </div>
);

export default App;
