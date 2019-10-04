import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => (
    <div className="App">
        <Header title="Test task for SAYU" />
        <div className="wrapper">
            <Content />
            <Footer text="Roman Koval" />
        </div>
    </div>
);

export default App;
